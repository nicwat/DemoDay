
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);


      function drawChart() {
        var data = google.visualization.arrayToDataTable([

          ['Price', 'Supply', 'Demand', 'Equilibrium (Supply = Demand)'],
          [0,   100,      0, null],
          [10,  75,      25, null],
          [20,  50,      50, 50],
          [30,  25,       75, null],
          [40,  0,      100, null]
        ]);

        var options = {
          // title: 'Supply-Demand',
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
           annotations: {

		    boxStyle: {
		      // Color of the box outline.
		      stroke: '#888',
		      // Thickness of the box outline.
		      strokeWidth: 1,
		      // x-radius of the corner curvature.
		      rx: 10,
		      // y-radius of the corner curvature.
		      ry: 10,
		      // Attributes for linear gradient fill.
		      gradient: {
		        // Start color for gradient.
		        color1: '#fbf6a7',
		        // Finish color for gradient.
		        color2: '#33b679',
		        // Where on the boundary to start and
		        // end the color1/color2 gradient,
		        // relative to the upper left corner
		        // of the boundary.
		        x1: '0%', y1: '0%',
		        x2: '100%', y2: '100%',
		        // If true, the boundary for x1,
		        // y1, x2, and y2 is the box. If
		        // false, it's the entire chart.
		        useObjectBoundingBoxUnits: true
		      }
		    }
  }
          
        };


        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);

        
        // $( "#chart_div" ).hover(function() {



  // $( this ).fadeOut( 500 );
  // $( this ).fadeIn( 500 );
// });
//above hover works...please replace with other jquery
var suppDemHover = document.getElementById("chart_div");

suppDemHover.addEventListener('mouseover', function(event){
	suppDemHover.src = "econbackground.jpg";
});
      }




//other google chart//overproduction

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart2);


      function drawChart2() {
        var data = google.visualization.arrayToDataTable([

          

            ['Price', 'Supply', 'Demand', 'Equilibrium','Productivity'],
          [0,   100,      0, null, 60],
          [10,  75,      25, null, 60],
          [20,  50,      50, 50, 60],
          [30,  25,       75, null,  60],
          [40,  0,      100, null, 60]
        ]);


    var options = {
      title : 'Overproduction',
      isStacked: false,
      orientation: 'vertical',
      vAxis: {title: 'Price'},
      hAxis: {title: 'Quantity'},
      seriesType: 'area',
      series: {3: {type: 'line', }}
    };
        

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div2'));
        chart.draw(data, options);
        // $( "#chart_div" ).hover(function() {

  // $( this ).fadeOut( 500 );
  // $( this ).fadeIn( 500 );
// });
//above hover works...please replace with other jquery
      }


///other chart underproduction

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart3);


      function drawChart3() {
        var data = google.visualization.arrayToDataTable([

           ['Price', 'Supply', 'Demand', 'Equilibrium (Supply = Demand)', 'Production'],
          [0,   100,      0, null, 20],
          [10,  75,      25, null, 20],
          [20,  50,      50, 50, 20],
          [30,  25,       75, null, 20],
          [40,  0,      100, null, 20]
        ]);

        var options = {
          // title: 'Supply-Demand',
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
           annotations: {

		    boxStyle: {
		      // Color of the box outline.
		      stroke: '#888',
		      // Thickness of the box outline.
		      strokeWidth: 1,
		      // x-radius of the corner curvature.
		      rx: 10,
		      // y-radius of the corner curvature.
		      ry: 10,
		      // Attributes for linear gradient fill.
		      gradient: {
		        // Start color for gradient.
		        color1: '#fbf6a7',
		        // Finish color for gradient.
		        color2: '#33b679',
		        // Where on the boundary to start and
		        // end the color1/color2 gradient,
		        // relative to the upper left corner
		        // of the boundary.
		        x1: '0%', y1: '0%',
		        x2: '100%', y2: '100%',
		        // If true, the boundary for x1,
		        // y1, x2, and y2 is the box. If
		        // false, it's the entire chart.
		        useObjectBoundingBoxUnits: true
		      }
		    }
  }
          
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div3'));
        chart.draw(data, options);
//         $( "#chart_div" ).hover(function() {
//   $( this ).fadeOut( 500 );
//   $( this ).fadeIn( 500 );
// });
//above hover works...please replace with other jquery
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
                "tooltext": "Supply blah blah blah blah blah blah blah blah blah"
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

  var Chart;
moment.locale("fr");
Chart = $('#container').highcharts({
	chart: {
		renderTo: 'ChartContainer',
		zoomType: 'x'
	},
	credits: {
		enabled: false
	},
	legend: {
		useHTML: true
	},
	title: {
		align: 'center'
	},
	tooltip: {
		enabled: false,
		/*formatter: TooltipFormatter,
		shared: true,
		useHTML: true*/
	},
	xAxis: [{
		type: 'datetime'
	}],
	yAxis: [{
		id: 'GraphicLeft',
		title: {
			text: ''
		}
	}],
	series: [{
		data: [{
			x: 1441205305571,
			y: 12.8800001144409
		}, {
			x: 1441291705571,
			y: 15.2600002288818
		}, {
			x: 1441378105571,
			y: 33.3499984741211
		}, {
			marker: {
				lineWidth: 2,
				radius: 1,
				symbol: 'url(http://iconshow.me/media/images/Mixed/line-icon/png/20/bubble-20.png)'
			},
			x: 1441464505571,
			y: 6.69000005722046,
			comments: [{
				author: 'N. Peronny',
				comment: 'Probleme de sonde, a voir',
				date: Date.parse('09/07/2015 14:48:24'),
				dateString: 1441637304786.67
			}, {
				author: 'O. Houssin',
				comment: 'La sonde a été changer dans cette plage horaire, le calibrage c est dérouler au moment de la mesure.Ne pas en tenir compte',
				date: Date.parse('09/06/2015 14:48:24'),
				dateString: 1441550904786.67
			}, {
				author: 'N. Peronny',
				comment: 'Merci, tu es gentil Olivier.',
				date: Date.parse('09/07/2015 14:48:24'),
				dateString: 1441637304786.67
			}]
		}, {
			x: 1441550905571,
			y: 11.6700000762939
		}, {
			x: 1441637305571,
			y: 23.3899993896484
		}, {
			x: 1441723705571,
			y: 9.48999977111816
		}],
		id: 1,
		name: 'Index d&#39;&#233;nergie active : Poste horaire Mesure',
		type: 'spline',
		yAxis: 'GraphicLeft',
		color: '#ff0000',
		unit: "°C",
		point: {
			events: {
				mouseOver: tooltipCreator,

			}
		}
	}]
});

function tooltipCreator(e) {
	if (!$("#wrapper").hasClass('editor-mode') && this.graphic != undefined) {
		var data = this; //Used in Eval function call to fill the tooltip w/ data in this var.  /!\Don't rename or remove/!\
		var currentCommentContext = e.target;

		var content = $('#tooltip-model').clone().attr('id', 'tooltip-current').show();
		content.find('content').each(function(i, e) {
			$(this).before(eval($(this).attr('value')));
			$(this).remove();
		});
		content.find('[customstyle]').each(function(i, e) {
			$.each($(this).attr('customStyle').split(';'), function(nb, style) {
				if (style != '')
					$(e).css(style.split(':')[0].trim(), String(eval(style.split(':')[1])).trim());
			});
			$(this).removeAttr('customstyle');
		});
		if (typeof data.comments != 'undefined' && data.comments.length > 0)
			$.each(this.comments, function(i, e) {
				var $currComment = $($("#comment-model").clone().html());
				comment = e;
				$currComment.find('content').each(function(i, e) {
					$(this).before(eval($(this).attr('value')));
					$(this).remove();
				});
				content.find('#CommentsContainer .direct-chat-messages').append($currComment);
			});

		content.find("#commentRenderer").click({
			pointData: currentCommentContext
		}, showTooltipComments);
		if ($(this.graphic.element).attr('id') == undefined)
			$(this.graphic.element).attr('id', new Date().getTime());

		$('[aria-describedby]').popover('destroy');
		$("#" + $(this.graphic.element).attr('id')).popover({
			content: content,
			container: 'body',
			html: true,
			animation: false,
			trigger: 'manual',
			placement: 'bottom'
		}).popover('show');
	}
}

function showTooltipComments(e) {
	$('#tooltip-current #CommentsContainer').show();
	$('#tooltip-current #commentRenderer').hide();
	$('#tooltip-current').height($('#tooltip-current').parents('.popover').height() - 18);
	$('#tooltip-current button').on('click', e.data, function(e) {
		SendNewComment($('#tooltip-current #newComment'), e.data.pointData);
	});
	$('#tooltip-current #CommentsContainer #newComment').on('keyup input', e.data, function(e) {
		$('#tooltip-current').height($('#tooltip-current').parents('.popover').height() - 18);
		$(this).css('height', 'auto').css('height', this.scrollHeight + this.offsetHeight - this.clientHeight); //Pour redimensionner le textarea du commentaire dynamiquement
		$('.CommentsContainer').css('height', 'auto').css('height', this.scrollHeight + this.offsetHeight - this.clientHeight);
		$("#tooltip-current #CommentsContainer").scrollTop($("#tooltip-current #CommentsContainer")[0].scrollHeight);
		if (e.ctrlKey && e.keyCode == 13) { //Si appuie sut CTRL + enter, on envoie le commentaire au serveur
			SendNewComment($(this), e.data.pointData);
		}
	});
}



})();
});