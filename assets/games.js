
$(document).ready(function(){
     'use strict';

	 $(document).on('click', '#pick-your-crystal .crystal', function(){ 
	    $('#your-crystal').append($(this));
		$('#available-crystal-to-compete').append($('#pick-your-crystal .crystal'));
		$(this).addClass('border-blue');
		$('#available-crystal-to-compete .crystal').addClass('border-red');
	 });

	 $(document).on('click', '#available-crystal-to-compete .crystal', function(){ 
	 	if ( $('#defender-crystal').children().length == 0 ) {
     		 $('#defender-crystal').append($(this));
     		 $('#defender-crystal .crystal').removeClass('border-red').addClass('border-blue');
		}
		
	 });

	var crystalCollector = {
	    crystals: [{
	        crystal: 'red',
	        points: 100
	    }, {
	        crystal: 'purple',
	        points: 120
	    }, {
	    	crystal: 'blue',
	    	points: 140,
	    }, {
	    	crystal: 'yellow',
	    	points: 160
	    }],
	    randomMatchNum: null;
	    redVaule: null,
	    getRandomInt: function(min, max){

	    },
	    startGame: function() {

	    },
	    getMessage: function() {
	        
	    },

	 };

	crystalCollector.startGame();

});