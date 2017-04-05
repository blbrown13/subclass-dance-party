var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
<<<<<<< HEAD
  this.$node.addClass('blinkyDancer');
=======
>>>>>>> 43b07b5bdc1ba693988b2d51a7a74de2246d750d
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer; 

BlinkyDancer.prototype.step = function() {
  var oldStep = this.step;
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
