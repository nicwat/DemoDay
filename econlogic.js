google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);


      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Price', 'Supply', 'Demand'],
          [0,   100,      0,],
          [10,  75,      25,],
          [20,  50,      50,],
          [30,  25,       75,],
          [40,  0,      100,]
        ]);

        var options = {
          title: 'Supply-Demand',
          selectionMode: 'multiple',
          orientation: 'vertical',
          explorer: { axis: 'horizontal' },
          focusTarget: 'datum',
          tooltip: {isHtml: true ,trigger: 'selection'},
          aggregationTarget: 'series',
          hAxis: {title: 'Quantity', minValue: 0,  titleTextStyle: {color: '#333'}},
          vAxis: {title: 'Price($)', minValue: 0, format: 'currency'}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }


 FusionCharts.ready(function(){
    var sdGraph = new FusionCharts({
    type: 'dragarea',
    renderAt: 'chart-container',
    width: '1000',
    height: '700',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Supply-Demand",
            "captionFontSize": "30" ,
            "subCaption": "Drag anchors to change curve elasticities",
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
                "tooltext": "Demand blah blah blah blah blah blah blah blah blah"
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
});