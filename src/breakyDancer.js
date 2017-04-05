var BreakyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
<<<<<<< HEAD
  this.$node.addClass('breakyDancer');
=======
>>>>>>> 43b07b5bdc1ba693988b2d51a7a74de2246d750d
};

BreakyDancer.prototype = Object.create(Dancer.prototype);
BreakyDancer.prototype.constructor = BreakyDancer; 

BreakyDancer.prototype.step = function() {
<<<<<<< HEAD
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

=======
  var oldStep = this.step;
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};


>>>>>>> 43b07b5bdc1ba693988b2d51a7a74de2246d750d
