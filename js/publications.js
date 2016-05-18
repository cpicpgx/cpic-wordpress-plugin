var _sortByName = function(o1, o2) {
	return o1.publicationSet.body.localeCompare(o2.publicationSet.body);
};

var _positionCounter = 1;
Handlebars.registerHelper('position', function() {
	return _positionCounter++;
});

jQuery(function($) {
	$.getJSON('/wp-content/uploads/2015/12/21270786.json', function(data) {
		var citationMarkup = Handlebars.templates.citation(data);
		$('#citeMain').html(citationMarkup);
	});

	$.getJSON('/wp-content/uploads/2015/12/24479687.json', function(data) {
		var citationMarkup = Handlebars.templates.citation(data);
		$('#citeSecond').html(citationMarkup);
	});

	$.getJSON('https://api.pharmgkb.org/v1/cpic/publications',
		function(data) {
			data.forEach(function(o) {
				o.publicationSet.body = o.publicationSet.body.replace(/CPIC?\s/, '');
			});

			data.sort(_sortByName);

			Handlebars.partials = Handlebars.templates;

			var guidelinesSection = Handlebars.templates.citationTable(data);
			$('#guidelinesSection').html(guidelinesSection);
		});
}(jQuery));
