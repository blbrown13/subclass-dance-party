var GrumpyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('grumpyDancer');
};

GrumpyDancer.prototype = Object.create(Dancer.prototype);
GrumpyDancer.prototype.constructor = GrumpyDancer; 

GrumpyDancer.prototype.step = function() {
  // var oldStep = this.step;
  // Dancer.prototype.step.call(this);
  // this.$node.toggle();
};

/*
css - make dancer blink 
*/