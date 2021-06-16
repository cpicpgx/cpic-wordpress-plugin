var positionCounter = 1;
Handlebars.registerHelper('position', function() {
	return positionCounter++;
});

Handlebars.registerHelper('isGuideline', function(c, o) {
	if (c.type === 'Guideline') {
		return o.fn(this);
	}
});
jQuery(function($) {
	var getData = function() {
		var deferred = $.Deferred();
		$.getJSON('https://api.cpicpgx.org/v1/pair_view?order=cpiclevel,drugname,genesymbol',
			function(data) {
				var drugs = new Set();
				var genes = new Set();
				for (var i=0; i < data.length; i++) {
					drugs.add(data[i].drugname);
					genes.add(data[i].genesymbol);
				}
				var payload = {
					countDrugs: drugs.size,
					countGenes: genes.size,
					countGuidelines: data.length,
					pairs: data,
				};
				$('#guidelineList').html(Handlebars.templates.pairs(payload));
				$('#lastUpdated').html('----');
				deferred.resolve();
			});

		return deferred.promise();
	};
	var datafyTable = function() {
		$('#tableCpicPairs').dataTable({
			paginate: false
		});
	};
	$(document).on('ready', function() {
		var promise = getData();
		promise.done(datafyTable);
	});
}(jQuery));
