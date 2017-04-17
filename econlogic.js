google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Price', 'Demand', 'Supply'],
          [0,   100,      0,],
          [10,  75,      25,],
          [20,  50,      50,],
          [30,  25,       75,],
          [40,  0,      100,]
        ]);

        var options = {
          title: 'Supply Demand',
          selectionMode: 'multiple',
          orientation: 'vertical',
          explorer: { axis: 'horizontal' },
          focusTarget: 'datum',
          tooltip: {trigger: 'selection'},
          aggregationTarget: 'category',
          hAxis: {title: 'Quantity', minValue: 0,  titleTextStyle: {color: '#333'}},
          vAxis: {title: 'Price($)', minValue: 0, format: 'currency'}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }