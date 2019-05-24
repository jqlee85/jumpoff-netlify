import Victor from 'victor';

//Takes in a date string and returns a formatted date
function getPrettyDate(rawDate, options) {

  if (typeof(options) == 'undefined' ) {
    var options = { year: 'numeric', month: 'short', day: 'numeric' };
  }
  if (rawDate.split(" ").length > 1){
    rawDate = rawDate.split(" ")[0];
  }
  var date = new Date(rawDate); 
  var formattedDate = date.toLocaleDateString("en-US", options); // Saturday, September 17, 2016
  return formattedDate;

}
export {getPrettyDate};

function addEllipsis(text){
  
  var position = text.lastIndexOf("</p>");
  var lastChar = text.slice(position -1, position);
  if ( ['.',',',':','?','!',';','-'].includes(lastChar) ) text = text.slice(0, position - 1) + text.slice(position);
  position = text.lastIndexOf("</p>");
  var output = [text.slice(0, position), '<span class="jo-ellipsis">...</span>', text.slice(position)].join('');
  
  return output;

}
export {addEllipsis};

/**
 * Returns a random int between a min and a max
 *
 * @param  int | min | A minimum number
 * @param  int | max | A maximum number
 * @return int | The random number in the given range
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export {getRandomInt};

/**
 * Returns the distance between two coordinates
 *
 * @param  int | x1 | Point 1's x coordinate
 * @param  int | y1 | Point 1's y coordinate
 * @param  int | x2 | Point 2's x coordinate
 * @param  int | y2 | Point 2's y coordinate
 * @return int | The distance between points 1 and 2
 */
function getDistance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt( Math.pow(xDist, 2) + Math.pow(yDist, 2) );
}
export {getDistance};

/**
 * Returns a random color from the colors array
 *
 * @param  array | colors | An array of color values
 * @return string | The random color value
 */
function randomColor(colors) {
  return colors[ Math.floor( Math.random() * colors.length) ];
}
export {randomColor};
/**
 * Get coefficients based on normal distribution
 *
 * @param  int | mean | The mean value of the data set
 * @param  int | stdev | The standard deviation for the data set
 * @return int | A number from the data set
 */
function gaussian(mean, stdev) {
    var y2;
    var use_last = false;
    return function() {
        var y1;
        if(use_last) {
           y1 = y2;
           use_last = false;
        }
        else {
            var x1, x2, w;
            do {
                 x1 = 2.0 * Math.random() - 1.0;
                 x2 = 2.0 * Math.random() - 1.0;
                 w  = x1 * x1 + x2 * x2;
            } while( w >= 1.0);
            w = Math.sqrt((-2.0 * Math.log(w))/w);
            y1 = x1 * w;
            y2 = x2 * w;
            use_last = true;
       }

       var retval = mean + stdev * y1;
       if(retval > 0)
           return retval;
       return -retval;
   }
}
export {gaussian};

class Boid {

  /**
   * Contstruct Boid object
   *
   * @param  object | boid | Initial setup properties for boid
   *
   */
  constructor(boid,boids,c,center,gravityPoint) {

    var speedIndex = 5;
    this.walls = true;
    this.center = center;
    this.boids = boids;
    this.c = c;
    this.target = gravityPoint;

    // Initial Properties
    this.id = boid.id;
    this.position = new Victor( boid.x, boid.y );
    this.radius = boid.radius * boid.radiusCoefficients[ boid.radiusCoefficient ];
    this.introversionCoefficient = boid.otherCoefficients[ boid.introversionCoefficient ];
    this.introversion = boid.introversion * this.introversionCoefficient * 2;
    this.quicknessCoefficient = boid.otherCoefficients[ boid.quicknessCoefficient ];
    this.quickness = boid.quickness * this.quicknessCoefficient;    
    this.color = boid.color;

    // Speed & Velocity & Force
    this.maxSpeed = speedIndex * this.quickness;
    this.speed = this.maxSpeed * .5;
    
    var radians = Math.PI * getRandomInt(-99,100) / 100;
    this.velocity = new Victor( this.speed * Math.cos( radians ), this.speed * Math.sin( radians ) );
    this.maxForce = .5;

  }

  /**
   * Calculate the seek force for a boid and a target
   *
   * @param  object | target | The Victor.js vector for a target's position
   * @return object | The seek force for the target as a vector
   */
  seek( target ){
    var targetposition = target.clone();
    var diff = targetposition.subtract(this.position);
    var desired = new Victor(diff.x,diff.y);

    if (target.radius) {
      var buffer = target.radius + this.radius + 1;
    } else {
      var buffer = this.radius * 2 + 1;
    }

    var dist = diff.magnitude();
    if (dist < buffer) {
      desired.x = 0;
      desired.y = 0;
    } else if ( dist <= 100 ) {
      desired.normalize();
      desired.divide({x:this.maxSpeed * dist / 100,y:this.maxSpeed * dist / 100});
    } else {
      desired.limitMagnitude(this.maxSpeed);
    }
    desired.subtract(this.velocity);
    desired.limitMagnitude(this.maxForce);
    return desired;
  }

  /**
   * Calculate the separation force for a boid and its flock
   *
   * @param  array | boids | The boids array containing all the boids
   * @return object | The Separation force as a Victor vector
   */
  separate( boids ){
    var sum = new Victor();
    var count = 0;
    for (var j = 0; j < boids.length; j++) {
      
      var desiredSeparation = this.radius + boids[j].radius + ( 25 * this.introversion );
      var sep = this.position.clone().distance(boids[j].position);
      if ( (sep > 0) && (sep < desiredSeparation) ) {
        var thisposition = this.position.clone();
        var diff = thisposition.subtract(boids[j].position);
        diff.normalize();
        diff.divide({x:sep,y:sep});
        sum.add(diff);
        count++;
      }
    }
    if (count > 0) {
      sum.divide({x:count,y:count});
      sum.normalize();
      sum.multiply({x:this.maxSpeed,y:this.maxSpeed});
      sum.subtract(this.velocity);
      sum.limitMagnitude(this.maxForce);
    }
    return sum;
  }

  /**
   * Calculate the alignment force for a boid and its flock
   *
   * @param  array | boids | The boids array containing all the boids
   * @return object | The alignment force as a Victor vector
   */
  align( boids ) {
    var neighborDist = 150;
    var sum = new Victor();
    var steer = new Victor();
    var count = 0;
    for (var i = 0; i < boids.length; i++) {
      var dist = this.position.distance(boids[i].position);
      if ( dist > 0 && dist < neighborDist ) {
        sum.add(boids[i].velocity);
        count++;
      }
    }
    if (count > 0) {
      sum.divide({x:count,y:count});
      sum.normalize()
      sum.multiply({x:this.maxSpeed,y:this.maxSpeed});
      steer = sum.subtract(this.velocity);
      steer.limitMagnitude(this.maxForce);
      return steer;
    } else {
      return steer;
    }
  }

  /**
   * Calculate the cohesion force for a boid and its flock
   *
   * @param  array | boids | The boids array containing all the boids
   * @return object | The cohesion force as a Victor vector
   */
  cohesion( boids ) {
    var neighborDist = 50;
    var sum = new Victor();
    var count = 0;
    for (var i = 0; i < boids.length; i++) {
      var dist = this.position.distance(boids[i].position);
      if ( dist > 0 && dist < neighborDist ) {
        sum.add(boids[i].position);
        count++;
      }
    }
    if (count > 0) {
      sum.divide({x: count,y:count});
      return this.seek(sum);
    } else {
      return sum;
    }
  }

  /**
   * Avoid the canvas walls if walls are enabled
   *
   * @return object/boolean | The seek force to avoid a wall, or false if not near a wall
   */
  avoidWalls() {

    var buffer = 5;
    if ( this.distanceFromHorWall() < this.radius * buffer || this.distanceFromVertWall() < this.radius * buffer ) {
      return this.seek(this.center);
    } else { return false; }

  }

  /**
   * Run force calculation functions for the boid, then apply forces
   *
   */
  flock(boids) {
    
    // Get Forces
    var alignForce = this.align(boids);
    var mouseForce = this.seek(this.target);
    var separateForce = this.separate(boids);
    var cohesionForce = this.cohesion(boids);
    if ( this.walls ) var avoidWallsForce = this.avoidWalls();

    // Weight Forces
    var alignWeight = 1.2;
    var mouseWeight = .07;
    var separateWeight = 1;
    var cohesionWeight = 1;
    if ( this.walls ) var avoidWallsWeight = 1.2;


    // Apply forces
    this.applyForce( alignForce, alignWeight );
    this.applyForce( mouseForce, mouseWeight );
    this.applyForce( separateForce, separateWeight );
    this.applyForce( cohesionForce, cohesionWeight );
    
    if ( this.walls && avoidWallsForce ) this.applyForce( avoidWallsForce, avoidWallsWeight );

  }

  updateTarget() {
    // this.targetIncrementor++;
    // this.target.
  }


  /**
   * Apply a coefficient to a given force and apply it to the boid
   *
   * @param object | force | The Victor vector of the force to be applied
   * @param float | coefficient | The factor to be applied to the force
   */
  applyForce( force, coefficient ) {
    if ( ! coefficient ) { var coefficient = 1; }
    force.multiply({x:coefficient,y:coefficient});
    this.velocity.add(force);
    this.velocity.limitMagnitude( this.maxSpeed );
  }

  /**
   * Run the flock function and update the boid's position based on the resulting velocity
   *
   */
  nextPosition() {

    // Loop through behaviors to apply forces
    this.flock(this.boids);
    // Update position
    this.position = this.position.add(this.velocity);
    // Check edges for walls or overruns
    this.edgeCheck();

  }

  /**
   * Check for edge crossings and bounce the boid or wrap it to the other side of the canvas
   *
   */
  edgeCheck() {
    if (this.walls) {
      this.wallBounce();
    } else {
      this.borderWrap();
    }
  }

  /**
   * If the boid passes a border with no walls, wrap the boid to the other side of the canvas
   *
   */
  borderWrap() {
    if (this.position.x < 0) {
      this.position.x = window.innerWidth;
    } else if ( this.position.x > window.innerWidth ) {
      this.position.x = 0;
    }
    if (this.position.y < 0) {
      this.position.y = window.innerHeight;
    } else if ( this.position.y > window.innerHeight ) {
      this.position.y = 0;
    }
  }

  /**
   * Detect a wall hit and bounce boid
   *
   */
  wallBounce() {
    if (this.position.x <= this.radius) {
      this.position.x = this.radius;
    } else if ( this.position.x >= window.innerWidth - this.radius) {
      this.position.x = document.body.clientWidth - this.radius;
    }
    if (this.position.y <= this.radius) {
      this.position.y = this.radius;
    } else if ( this.position.y >= window.innerHeight - this.radius ) {
      this.position.y = window.innerHeight - this.radius;
    }
    if ( this.distanceFromHorWall() <= this.radius  ) {
      this.velocity.invertY();
    }
    if ( this.distanceFromVertWall() <= this.radius  ) {
      this.velocity.invertX();
    }
  }

  /**
   * Calculate the distance from vertical wall in the direction of the boid's velocity
   *
   * @param float | the boid's distance from the wall
   */
  distanceFromVertWall() {
    if (this.velocity.x > 0) {
      return window.innerWidth - ( this.position.x );
    } else {
      return this.position.x;
    }

  }

  /**
   * Calculate the distance from horizontal wall in the direction of the boid's velocity
   *
   * @param float | the boid's distance from the wall
   */
  distanceFromHorWall() {
    if (this.velocity.y > 0) {
      return window.innerHeight - ( this.position.y );
    } else {
      return this.position.y;
    }
  }

  /**
   * Draw Boid to the canvas
   *
   */
  draw(){
    // console.log(this.position);
    this.c.beginPath();
    this.c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
    this.c.fillStyle = this.color;
    this.c.fill();
    this.c.closePath();
  }

  /**
   * Update a boid's position and call draw()
   *
   */
  update() {
    this.nextPosition();
    this.draw();
  }


}
export {Boid};

/**
 * Add Limit Magnitude function to Victor objects
 *
 * @param  int | max | The limit magnitude for the vector
 */
Victor.prototype.limitMagnitude = function (max) {

  if (this.length() > max) {
    this.normalize();
    this.multiply({x:max,y:max});
  }

};