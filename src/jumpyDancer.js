var JumpyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
<<<<<<< HEAD
  this.$node.addClass('jumpyDancer');
=======
>>>>>>> 43b07b5bdc1ba693988b2d51a7a74de2246d750d
};

JumpyDancer.prototype = Object.create(Dancer.prototype);
JumpyDancer.prototype.constructor = JumpyDancer; 

JumpyDancer.prototype.step = function() {
<<<<<<< HEAD
  var context = this;
  context.$node.on('click', function(){
  	
	  var styleSettings = {
	    top: context.top -= 50
	  };

	  context.$node.css(styleSettings);
  });
};

/*

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};
*/
=======
  var oldStep = this.step;
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};


>>>>>>> 43b07b5bdc1ba693988b2d51a7a74de2246d750d
