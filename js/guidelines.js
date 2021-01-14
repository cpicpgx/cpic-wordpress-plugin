jQuery(function($) {
  var _distinctify = function(elem, index, self) {return index === self.indexOf(elem);};
	var _sortStrings = function(o1, o2) {
		return o1.localeCompare(o2);
	};
	var _calculateFields = function(o) {
		o.name = o.name.replace(/CPIC Dosing Guideline for/, '');
    o['gene'] = o.gene.map(function(f){return f.symbol;}).filter(_distinctify).sort(_sortStrings);
    o['drug'] = o.guideline_for_drug.map(function(f){return f.name;}).filter(_distinctify).sort(_sortStrings);
	};
	var _sortByName = function(o1, o2) {
		return o1.name.localeCompare(o2.name);
	};
	var getData = function() {
		var deferred = $.Deferred();
		$.getJSON('https://api.cpicpgx.org/v1/guideline?select=name,url,gene(symbol),guideline_for_drug(name)&order=name',
			function(data) {
				data.forEach(_calculateFields);
				data.sort(_sortByName);
				$('#guidelineList').html(Handlebars.templates.guidelines(data));
				deferred.resolve();
			});
		return deferred.promise();
	};
	var datafyTable = function() {
		$('#tableGuidelines').dataTable({
			paginate: false
		});
	};
	$(document).on('ready', function() {
		var promise = getData();
		promise.done(datafyTable);
	});
}(jQuery));
