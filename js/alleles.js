var _re = /(\D*)(\d*)(.*)/;

var _sortHapNames = function(a, b) {
	var namea = _re.exec(a);
	var nameb = _re.exec(b);

	if (namea[2] && nameb[2]) {
		var compareValue = namea[2] - nameb[2];
		if (compareValue !== 0) {
			return compareValue;
		}
	}
	return namea[0].localeCompare(nameb[0]);
};

var _sortByGeneAllele = function(a, b) {
	var genea = a.genesymbol;
	var geneb = b.genesymbol;

	var compare = genea.localeCompare(geneb);
	if (compare !== 0) {
		return compare;
	}

	var namea = a.allelename;
	var nameb = b.allelename;
	return _sortHapNames(namea, nameb);
};

var positionCounter = 1;
Handlebars.registerHelper('position', function() {
	return positionCounter++;
});

jQuery(function($) {
	var getData = function() {
		var deferred = $.Deferred();
		$.getJSON('https://api.cpicpgx.org/v1/allele_guideline?order=genesymbol,allelename',
			function(data) {
				data.sort(_sortByGeneAllele);
				var cpicAlleles = Handlebars.templates.cpicAlleles(data);
				$('#cpicAlleles').html(cpicAlleles);
				deferred.resolve();
			});
		return deferred.promise();
	};

	var datafyTable = function() {
		$('#tableCpicAlleles').dataTable({
			paginate: false,
			columnDefs: [{
				width: '3rem',
				targets: 0
			}, {
				width: '20%',
				targets: 1
			}, {
				width: '20%',
				targets: 2
			}]
		});
	};

	var promise = getData();
	promise.done(datafyTable);
}(jQuery));
