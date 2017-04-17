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
            "caption": "Supply-Demand with Elasticities",
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

    (function() {
  var questions = [{
    question: "What is X ?",
    choices: [1, 2, 3, 4, 5],
    correctAnswer: 2
  }, {
    question: "What is X ?",
    choices: [1, 2, 3, 4, 5],
    correctAnswer: 4
  }, {
    question: "What is X ?",
    choices: [1, 2, 3, 4, 5],
    correctAnswer: 0
  }, {
    question: "What is X ?",
    choices: [1, 2, 3, 4, 5],
    correctAnswer: 3
  }, {
    question: "What is X ?",
    choices: [1, 2, 3, 4, 5],
    correctAnswer: 4
  }];
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!!');
    return score;
  }
})();
});