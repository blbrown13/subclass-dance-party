$(document).ready(function() {
  window.dancers = [];

<<<<<<< HEAD
  $('.blinkyDancerButton, .breakyDancerButton, .jumpyDancerButton, .grumpyDancerButton, .squigglyDancerButton')
    .on('click', function(event) {
=======
  $('.blinkyDancerButton, .breakyDancerButton, .jumpyDancerButton').on('click', function(event) {
>>>>>>> 43b07b5bdc1ba693988b2d51a7a74de2246d750d
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
     console.log('CLICKED');
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
  
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    console.log(window.dancers);
  });

  // add lineup button
  // var lineupDancersButton = $(this).data('lineupDancersButton');

  $('.lineupDancersButton').on('click', function(event){
    // console.log('hey you guys');
    for (var i = 0; i < window.dancers.length; i++) {
      var dancer = window.dancers[i];
      // console.log(dancer);
      var styleSettings = {
        top: 500
      };
      dancer.$node.css(styleSettings);
    }
  });

});

