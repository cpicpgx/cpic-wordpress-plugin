jQuery(function($) {
	var getData = function() {
		var deferred = $.Deferred();
		$.getJSON('https://api.cpicpgx.org/v1/guideline_summary_view?order=guideline_name',
			function(data) {
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
