jQuery(function($) {
  var _distinctify = function(elem, index, self) {return index === self.indexOf(elem);};
	var _calculateFields = function(o) {
		o.name = o.name.replace(/CPIC Dosing Guideline for/, '');
    o['gene'] = o.gene.map(function(f){return f.hgncid;}).filter(_distinctify);
    o['drug'] = o.drug.map(function(f){return f.name;}).filter(_distinctify);
	};
	var _sortByName = function(o1, o2) {
		return o1.name.localeCompare(o2.name);
	};
	var getData = function() {
		var deferred = $.Deferred();
		$.getJSON('https://data.cpicpgx.org/v1/guideline?select=name,url,gene(hgncid),drug(name)',
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
