const voltageGraph = document.querySelector('.voltage-graph');

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
    text: 'Voltage Graph',
    font : {
      size: 18
    },
    // Set title 0.05 from the most left axis 
    x: 0.05
  }
}

Plotly.newPlot(voltageGraph, data, layout);

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
  Plotly.relayout(voltageGraph, minuteView);
  Plotly.extendTraces(voltageGraph, update, [0])
}, 1000);
