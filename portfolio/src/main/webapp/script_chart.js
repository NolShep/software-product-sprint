google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

/** Creates a chart and adds it to the page. */
function drawChart() {
  var data = google.visualization.arrayToDataTable([
        ['Languages', 'Python', 'Java', 'Swift', 'Haskell',
         'HTML/JS/CSS', 'Ruby', 'Racket', { role: 'annotation' } ],
        ['2018', 100, 0, 0, 0, 0, 0, 0, ''],
        ['2019', 45, 0, 0, 45, 0, 10, 0, ''],
        ['2020', 15, 60, 0, 0, 10, 15, 0, ''],
        ['2021', 0, 20, 30, 0, 20, 0, 30, '']
      ]);

  var options_fullStacked = {
          isStacked: 'percent',
          height: 300,
          legend: {position: 'top', maxLines: 3},
          hAxis: {
            minValue: 0,
            ticks: [0, .3, .6, .9, 1]
          }
        };

  const chart = new google.visualization.BarChart(
      document.getElementById('chart-container'));
  chart.draw(data, options_fullStacked);
}