var JumpyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('jumpyDancer');
};

JumpyDancer.prototype = Object.create(Dancer.prototype);
JumpyDancer.prototype.constructor = JumpyDancer; 

JumpyDancer.prototype.step = function() {
  // var oldStep = this.step;
  // Dancer.prototype.step.call(this);
  // this.$node.toggle();
};

/*
css - make dancer jump 
*/
