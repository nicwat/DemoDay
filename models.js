google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);


      function drawChart() {
        var data = google.visualization.arrayToDataTable([

          ['Price', 'Demand', 'Supply', 'Equilibrium (Supply = Demand)'],
          [0,   100,      0, null],
          [10,  75,      25, null],
          [20,  50,      50, 50],
          [30,  25,       75, null],
          [40,  0,      100, null]
        ]);

        var options = {
          title: 'Supply-Demand',
          isStacked:false,
          titleTextStyle: {fontSize: '30'},
          annotations: {'column_id': {style: 'line'}},
          curvetype: 'function',
          legend: { position: 'bottom' },
          selectionMode: 'multiple',
          orientation: 'vertical',
          explorer: { axis: 'horizontal' },
          focusTarget: 'datum',
          tooltip: {isHtml: true ,trigger: 'selection'},
          aggregationTarget: 'series',
          hAxis: {title: 'Quantity', minValue: 0,  titleTextStyle: {color: '#333'}},
          vAxis: {title: 'Price($)', minValue: 0, format: 'currency'},
          
        };


        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);


      }




//other google chart//overproduction

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart2);


      function drawChart2() {
        var data = google.visualization.arrayToDataTable([

          

            ['Price', 'Demand', 'Supply', 'Equilibrium','Productivity'],
          [0,   100,      0, null, 60],
          [10,  75,      25, null, 60],
          [20,  50,      50, 50, 60],
          [30,  25,       75, null,  60],
          [40,  0,      100, null, 60]
        ]);


    var options = {
      title : 'Overproduction',
      titleTextStyle: {fontSize: '30'},
      legend: { position: 'bottom' },
      isStacked: false,
      orientation: 'vertical',
      vAxis: {title: 'Price'},
      hAxis: {title: 'Quantity'},
      seriesType: 'area',
      series: {3: {type: 'line', }}
    };
        

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div2'));
        chart.draw(data, options);
        
      }


///other chart underproduction

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart3);


      function drawChart3() {
        var data = google.visualization.arrayToDataTable([

           ['Price', 'Demand', 'Supply', 'Equilibrium (Supply = Demand)', 'Production'],
          [0,   100,      0, null, 20],
          [10,  75,      25, null, 20],
          [20,  50,      50, 50, 20],
          [30,  25,       75, null, 20],
          [40,  0,      100, null, 20]
        ]);

        var options = {
          title: 'Underproduction',
          titleTextStyle: {fontSize: '30'},
          annotations: {'column_id': {style: 'line'}},
          curvetype: 'function',
          legend: { position: 'bottom' },
          selectionMode: 'multiple',
          orientation: 'vertical',
          explorer: { axis: 'horizontal' },
          focusTarget: 'datum',
          tooltip: {isHtml: true ,trigger: 'selection'},
          aggregationTarget: 'series',
          hAxis: {title: 'Quantity', minValue: 0,  titleTextStyle: {color: '#333'}},
          vAxis: {title: 'Price($)', minValue: 0, format: 'currency'},
          seriesType: 'area',
          series: {3: {type: 'line', }}
          
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div3'));
        chart.draw(data, options);

      }



 FusionCharts.ready(function(){
    var sdGraph = new FusionCharts({
    type: 'dragarea',
    renderAt: 'chart-container',
    width: '100%',
    height: '700',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Supply-Demand with Elasticities",
            "captionFontSize": "30" ,
            "subCaption": "Drag anchors to change curve elasticities and see changes in equilibrium",
            "subCaptionFontSize": "15",
            "xAxisName": "Quantity",
            "xAxisNameFontSize": "20",
            "yAxisName": "Price($)",
            "yAxisNameFontSize": "20",
            "numberPrefix": "$",
            "theme": "fint",
            "showHoverEffect": "1",
            "anchorHoverEffect": "1",
            "showToolTip" : "1",
            "seriesNameInToolTip" :"1",
            "showHoverEffect" : "1",
          
        },
        "categories": [{
            "category": [{
                "label": "0",
                "label": "5",

                // "labelLink" : "insertURL for each val"
            }, {
                "label": "50",
            }]
        }],
        "dataset": [{
            "seriesname": "Demand",
            "valuePosition": "ABOVE",
            "allowDrag": "1",
            "data": [{
                "value": "600",
                "allowDrag": "1",
                "dashed": "1",
                "showvalue": "1",
                "drawAnchors" : "1",

            }, {
                "value": "300",
                "allowDrag": "1",
                "tooltext": "Demand"
                // "link" : "enterstring",
            }]
        }, {
            "seriesname": "Supply",
            "allowDrag": "1",
            "data": [{
                "value": "300",
                "allowDrag": "1",
                "dashed": "1"
            }, {
                "value": "600",
                "allowDrag": "1",
                "tooltext": "Supply"
            }]

        }]
    },
}
);
    sdGraph.render();



})();





