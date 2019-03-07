import React, {Component} from 'react';
import  './HomeBoids.css';
import Victor from 'victor';
import {Boid, randomColor, getDistance, gaussian} from '../../lib/utilities';

class HomeBoids extends Component {
  
  // boidsCanvas = React.createRef();
  boids = [];
  colors = [
    '#f89c44',
    '#ef6085',
    '#f0ba45',
    '#cd5fa1'
  ];
  canvas = false;
  context = false;
  stop = false;
  frameCount = false;
  fps = 60;
  fpsInterval = 1000/60;
  now = Date.now();
  then = false;
  elapsed = false;
  fpsReport = false;
  
  constructor(props) {
    super(props);
    this.state = { 
      width: 0,
      height: 0,
      stop: false,
      center: new Victor(),
      gravityPoint: new Victor()
    };
    this.canvasRef = React.createRef();
    this.animate = this.animate.bind(this);
    this.initializeBoids = this.initializeBoids.bind(this);
  }

  initialWindowDimensions = () => {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    this.setState({
      width: windowWidth,
      height: windowHeight,
      center: new Victor( windowWidth/2, windowHeight/2),
      gravityPoint: new Victor(windowWidth * 2/3, windowHeight * 2/3)
    }, this.initializeBoids);

  }

  updateWindowDimensions = () => {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    this.setState({
      width: windowWidth,
      height: windowHeight,
      center: new Victor( windowWidth/2, windowHeight/2),
      gravityPoint: new Victor(windowWidth * 2/3, windowHeight * 2/3)
    }, this.updateBoidPoints);
    
  }

  updateBoidPoints() {
    for (var i = 0;  i < this.boids.length; i++ ) {
      this.boids[i].center = this.state.center;
      this.boids[i].gravityPoint = this.state.gravityPoint;
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
    this.initialWindowDimensions();
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    this.setState({stop: true});
  }


  initializeBoids(){
    this.canvas = this.canvasRef.current;
    this.context = this.canvas.getContext('2d');
    // console.log(this.state);

    this.state.center = new Victor( this.state.width / 2 ,this.state.height / 2 );
    this.state.gravityPoint = new Victor( this.state.width * 0.66 ,this.state.height * 0.66 );
    
    // Instantiate all Boids
    var numBoids = 12;
    var radius;
    if ( this.state.width / 288 > 5 ) {
      radius = 5;
    } else if ( this.state.width / 288 < 3) {
      radius = 3;
    } else {
      radius = this.state.width / 288;
    }
    var radiusCoefficients = [.7,.85,1,1.15,1.3];
    var quicknessCoefficients = [.85,.9,.95,1,1.05,1.1,1.15];
    var otherCoefficients = [.6,.65,.7,.75,.8,.83,.85,.87,.9,.92,.94,.96,.97,.98,.99,1,1.01,1.02,1.04,1.06,1.08,1.1,1.15,1.20,1.25,1.3,1.4];
    var i;
    for ( i = 0; i < numBoids; i++ ) {
      // Generate random coords
      var x = Math.ceil(Math.random()* ( this.state.width - ( radius * 2 ) ) ) + ( radius );
      var y = Math.ceil(Math.random()* ( this.state.height - ( radius * 2 ) ) ) + ( radius );
      // For subsequent boids, check for collisions and generate new coords if exist
      if ( i !== 0 ) {
        for (var j = 0; j < this.boids.length; j++ ) {
          if ( getDistance(x, y, this.boids[j].x, this.boids[j].y) - ( radius + this.boids[j].radius ) < 0 ) {
            x = Math.ceil(Math.random()* ( this.state.width - ( radius * 2 ) ) ) + ( radius );
            y = Math.ceil(Math.random()* ( this.state.height - ( radius * 2 ) ) ) + ( radius );
            j = -1;
          }
        }
      }
      
      // Add new Boid to array
      this.boids.push(new Boid(
        {
          id: i,
          x: x,
          y: y,
          color: this.colors[i % this.colors.length],
          radius: radius,
          radiusCoefficients: radiusCoefficients,
          otherCoefficients: otherCoefficients,
          radiusCoefficient: Math.floor(Math.random() * radiusCoefficients.length),
          quickness: 1,
          quicknessCoefficient: Math.floor(Math.random() * quicknessCoefficients.length),
          introversion: .5,
          introversionCoefficient: Math.floor(Math.random() * otherCoefficients.length),
        },
        this.boids,
        this.context,
        this.state.center,
        this.state.gravityPoint
      ));

    }

    this.startAnimating();

  }

  /**
   * Start Animation of Boids
   *
   */
  startAnimating() {
    
    // Setup animation
    this.fpsInterval = 1000 / this.fps;
    this.then = Date.now();
    this.startTime = this.then;
  
    requestAnimationFrame(this.animate.bind(this))
  }

  /**
   * Setup and call animation function
   *
   */
  animate() {
    
    // Calc elapsed time since last loop
    this.now = Date.now();
    this.elapsed = this.now - this.then;

    // If enough time has elapsed, draw the next frame
    if (this.elapsed > this.fpsInterval) {
      // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        this.then = this.now - (this.elapsed % this.fpsInterval);
        // Drawing Code
        // Update all boids
        let context = this.canvas.getContext('2d');
        context.clearRect(0, 0, this.state.width, this.state.height);
        for (var i = 0; i < this.boids.length; i++ ) {
          this.boids[i].update();
        }
    }
    if (!this.state.stop) requestAnimationFrame(this.animate.bind(this));
    
  }

  render() {
    let styles = {
      width: this.state.width,
      height: this.state.height
    }

    return <canvas ref={this.canvasRef} id="jo-home-boids" style={styles} width={this.state.width} height={this.state.height}></canvas>
    
  }

}

export default HomeBoids;

