var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinkyDancer');
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer; 

BlinkyDancer.prototype.step = function() {
  var oldStep = this.step;
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

/*
css - make dancer blink 
*/
