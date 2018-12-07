//Takes in a date string and returns a formatted date
function getPrettyDate(rawDate, options) {

  if (typeof(options) == 'undefined' ) {
    console.log('undefined');
    var options = { year: 'numeric', month: 'short', day: 'numeric' };
  }
  var date = new Date(rawDate); 
  var formattedDate = date.toLocaleDateString("en-US", options); // Saturday, September 17, 2016

  return formattedDate;

}

export {getPrettyDate};