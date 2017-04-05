var SquigglyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('squigglyDancer');
};

SquigglyDancer.prototype = Object.create(Dancer.prototype);
SquigglyDancer.prototype.constructor = SquigglyDancer; 

SquigglyDancer.prototype.step = function() {
  // var oldStep = this.step;
  // Dancer.prototype.step.call(this);
  // this.$node.toggle();
};

/*
css - make dancer jump 
*/
