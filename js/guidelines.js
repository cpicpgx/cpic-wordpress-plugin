jQuery(function($) {
	var _calculateFields = function(o) {
		o.name = o.name.replace(/CPIC Dosing Guideline for/, '');
	};
	var _sortByName = function(o1, o2) {
		return o1.name.localeCompare(o2.name);
	};
	var getData = function() {
		var deferred = $.Deferred();
		$.getJSON('https://api.pharmgkb.org/v1/data/guideline?source=CPIC&view=base',
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
