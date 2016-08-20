'use strict';
var learnjs = {};
learnjs.showView = function(hash) {
	var problemView = $('<div class="problem-view">').text('Kommer snart!');
	$('.view-container').empty().append(problemView);
}
