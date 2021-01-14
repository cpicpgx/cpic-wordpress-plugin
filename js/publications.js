var _sortByName = function(o1, o2) {
    return o1.name.localeCompare(o2.name);
};

var _positionCounter = 1;
Handlebars.registerHelper('position', function() {
    return _positionCounter++;
});

jQuery(function($) {
    $.getJSON('https://api.cpicpgx.org/v1/publication?pmid=eq.21270786', function(data) {
        $('#citeMain').html(Handlebars.templates.publication(data[0]));
    });

    $.getJSON('https://api.cpicpgx.org/v1/publication?pmid=eq.24479687', function(data) {
        $('#citeSecond').html(Handlebars.templates.publication(data[0]));
    });

    $.getJSON('https://api.cpicpgx.org/v1/publication?pmid=eq.27441996', function(data) {
        $('#citeTerms').html(Handlebars.templates.publication(data[0]));
    });

    $.getJSON('https://api.cpicpgx.org/v1/publication?pmid=eq.27026620', function(data) {
        $('#citeThird').html(Handlebars.templates.publication(data[0]));
    });

    $.getJSON('https://api.cpicpgx.org/v1/publication?pmid=eq.27864205', function(data) {
        $('#citeFourth').html(Handlebars.templates.publication(data[0]));
    });

    $.getJSON('https://api.cpicpgx.org/v1/publication?pmid=eq.31562822', function(data) {
        $('#citeSixth').html(Handlebars.templates.publication(data[0]));
    });

    $.getJSON('https://api.cpicpgx.org/v1/guideline?select=id,name,url,publication(*)&order=name',
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
