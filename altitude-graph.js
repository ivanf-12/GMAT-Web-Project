const altitudeGraph = document.querySelector('.altitude-graph');

function rand() {
  return Math.random();
}

var time = new Date();

var data = [{
  x: [time],
  y: [rand],
  mode: 'lines',
  line: {color: '#80CAF6'}
}]

var layout = {
  title : {
    text: 'Altitude Graph',
    font : {
      size: 18
    },
    x: 0.05
  }
}

Plotly.newPlot(altitudeGraph, data, layout);

var interval = setInterval(function() {

  var time = new Date();

  var update = {
  x:  [[time]],
  y: [[rand()]]
  }

  var olderTime = time.setMinutes(time.getMinutes() - 1);
  var futureTime = time.setMinutes(time.getMinutes() + 1);

  var minuteView = {
        xaxis: {
          type: 'date',
          range: [olderTime,futureTime]
        }
      };

  Plotly.relayout(altitudeGraph, minuteView);
  Plotly.extendTraces(altitudeGraph, update, [0])

}, 1000);
