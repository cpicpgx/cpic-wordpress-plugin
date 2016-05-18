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
		$.getJSON('https://www.pharmgkb.org/download.do?objCls=common&objId=cpicPairs.json',
			function(data) {
				$('#guidelineList').html(Handlebars.templates.pairs(data));
				var $updated = $('#lastUpdated');
				if ($updated) {
					$updated.html(data.lastUpdated);
				}
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
