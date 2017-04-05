var GrumpyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('grumpyDancer');
};

GrumpyDancer.prototype = Object.create(Dancer.prototype);
GrumpyDancer.prototype.constructor = GrumpyDancer; 

GrumpyDancer.prototype.step = function() {
  var context = this;
  this.$node.on('click', function(){
  	var styleSettings = {

  	}
  	context.$node.css(styleSettings);
  });
};

/*
css - make dancer blink 
*/