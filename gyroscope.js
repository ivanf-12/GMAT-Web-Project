const gyro = document.querySelector('.gyro');

function rand() {
  return Math.random();
}

var time = new Date();

var data = [{
  x: [time],
  y: [rand],
  mode: 'lines',
  line: { color: '#80CAF6' },
  name: 'YAW'
}, {
  x: [time],
  y: [rand],
  mode: 'lines',
  line: { color: '#DF56F1' },
  name: 'PITCH'
  }, {
  x: [time],
  y: [rand],
  mode: 'lines',
  line: { color: '#FF6666' },
  name: 'ROLL'
}]

var layout = {
  title: {
    text: 'GYROSCOPE',
    x: 0.05
  }
}

Plotly.newPlot(gyro, data, layout);

var interval = setInterval(function() {

  var time = new Date();

  var update = {
  x:  [[time], [time], [time]],
  y: [[rand()], [rand()], [rand()]]
  }

  var olderTime = time.setMinutes(time.getMinutes() - 1);
  var futureTime = time.setMinutes(time.getMinutes() + 1);

  var minuteView = {
        xaxis: {
          type: 'date',
          range: [olderTime,futureTime]
        }
      };

  Plotly.relayout(gyro, minuteView);
  Plotly.extendTraces(gyro, update, [0, 1, 2])

}, 1000);
