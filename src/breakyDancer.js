var BreakyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('breakyDancer');
};

BreakyDancer.prototype = Object.create(Dancer.prototype);
BreakyDancer.prototype.constructor = BreakyDancer; 

BreakyDancer.prototype.step = function() {
  // var oldStep = this.step;
  // Dancer.prototype.step.call(this);
  // this.$node.toggle();
};

/*
css - make dancer spin  
*/

