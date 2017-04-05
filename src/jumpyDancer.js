var JumpyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('jumpyDancer');
};

JumpyDancer.prototype = Object.create(Dancer.prototype);
JumpyDancer.prototype.constructor = JumpyDancer; 

JumpyDancer.prototype.step = function() {
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
