describe('LearnJS', function() {
	it('can show a problem view', function() {
		learnjs.showView('#problem-1');
		expect($('.view-container .problem-view').length).toEqual(1);
	});
	it('Shows the landing page view when there is no hash', function() {
		learnjs.showview('');
		expect($('.view-container .landingview').length).toEqual(1);
	});
});


