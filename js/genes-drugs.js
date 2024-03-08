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
	const populateTable = function(data, elementId) {
		const drugs = new Set();
		const genes = new Set();
		for (let i= 0; i < data.length; i++) {
			drugs.add(data[i].drugname);
			genes.add(data[i].genesymbol);
		}
		var payload = {
			countDrugs: drugs.size,
			countGenes: genes.size,
			countGuidelines: data.length,
			pairs: data,
		};
		$(elementId).html(Handlebars.templates.pairs(payload));
	};

	const getData = function() {
		const deferred = $.Deferred();
		$.getJSON('https://api.cpicpgx.org/v1/pair_view?order=cpiclevel,drugname,genesymbol',
			function(data) {
				populateTable(data.filter((d) => !d.provisional), '#guidelineListFinal');
				populateTable(data.filter((d) => d.provisional), '#guidelineListProvisional');
				$('#lastUpdated').html('----');
				deferred.resolve();
			});

		return deferred.promise();
	};
	var datafyTable = function() {
		$('table.table-striped').dataTable({
			paginate: false
		});
	};
	$(document).on('ready', function() {
		var promise = getData();
		promise.done(datafyTable);
	});
}(jQuery));
