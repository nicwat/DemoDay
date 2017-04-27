var inelastic = document.getElementById("inelastic");

inelastic.addEventListener('mouseover', function(event){
	inelastic.src = "insulin.jpg";
});

inelastic.addEventListener('mouseout', function(event){
	inelastic.src = "inelasticdemand.jpg";
});

var elastic = document.getElementById("elastic");

elastic.addEventListener('mouseover', function(event){
	elastic.src = "restaurant.jpg";
});

elastic.addEventListener('mouseout', function(event){
	elastic.src = "elasticdemand.jpg";
});



var insupp = document.getElementById("inelasticsupp");

insupp.addEventListener('mouseover', function(event){
	insupp.src = "potatoes.jpg";
});

insupp.addEventListener('mouseout', function(event){
	insupp.src = "inelasticsupply.jpg";
});

var elsupp = document.getElementById("elasticsupp");

elsupp.addEventListener('mouseover', function(event){
	elsupp.src = "carplant.jpg";
});

elsupp.addEventListener('mouseout', function(event){
	elsupp.src = "elasticsupply.jpg";
});