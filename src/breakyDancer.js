var BreakyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('breakyDancer');
};

BreakyDancer.prototype = Object.create(Dancer.prototype);
BreakyDancer.prototype.constructor = BreakyDancer; 

BreakyDancer.prototype.step = function() {
  var context = this.$node;
  var oldStep = this.step;

  Dancer.prototype.step.call(this);

  setTimeout(function() {
    context.hasClass('img-hor-vert') ? context.removeClass('img-hor-vert') : context.addClass('img-hor-vert');
  }, 500);
  
};



/*
css - make dancer spin  
*/

