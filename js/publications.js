var _sortByName = function(o1, o2) {
    return o1.name.localeCompare(o2.name);
};

var _positionCounter = 1;
Handlebars.registerHelper('position', function() {
    return _positionCounter++;
});

jQuery(function($) {
    $.getJSON('https://api.cpicpgx.org/data/21270786.json', function(data) {
      if (data && data.length === 1) {
        $('#citeMain').html(Handlebars.templates.publication(data[0]));
      }
    });

    $.getJSON('https://api.cpicpgx.org/data/24479687.json', function(data) {
        $('#citeSecond').html(Handlebars.templates.publication(data[0]));
    });

    $.getJSON('https://api.cpicpgx.org/data/27441996.json', function(data) {
        $('#citeTerms').html(Handlebars.templates.publication(data[0]));
    });

    $.getJSON('https://api.cpicpgx.org/data/27026620.json', function(data) {
        $('#citeThird').html(Handlebars.templates.publication(data[0]));
    });

    $.getJSON('https://api.cpicpgx.org/data/27864205.json', function(data) {
        $('#citeFourth').html(Handlebars.templates.publication(data[0]));
    });

    $.getJSON('https://api.cpicpgx.org/data/31562822.json', function(data) {
        $('#citeSixth').html(Handlebars.templates.publication(data[0]));
    });

    $.getJSON('https://api.cpicpgx.org/data/publications.json',
        function(data) {
            data.forEach(function(o) {
                o.name = o.name.replace(/CPIC?\s/, '');
            });

            data.sort(_sortByName);

            Handlebars.partials = Handlebars.templates;

            var guidelinesSection = Handlebars.templates.citationTable(data);
            $('#guidelinesSection').html(guidelinesSection);
        });
}(jQuery));
