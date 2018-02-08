var _sortByName = function(o1, o2) {
    return o1.publicationSet.text.localeCompare(o2.publicationSet.text);
};

var _positionCounter = 1;
Handlebars.registerHelper('position', function() {
    return _positionCounter++;
});

jQuery(function($) {
    $.getJSON('/content/publications/21270786.json', function(data) {
        var citationMarkup = Handlebars.templates.citation(data);
        $('#citeMain').html(citationMarkup);
    });

    $.getJSON('/content/publications/24479687.json', function(data) {
        var citationMarkup = Handlebars.templates.citation(data);
        $('#citeSecond').html(citationMarkup);
    });

    $.getJSON('/content/publications/27441996.json', function(data) {
        var citationMarkup = Handlebars.templates.citation(data);
        $('#citeTerms').html(citationMarkup);
    });

    $.getJSON('/content/publications/cpic.publications.json',
        function(data) {
            data.forEach(function(o) {
                o.publicationSet.text = o.publicationSet.text.replace(/CPIC?\s/, '');
            });

            data.sort(_sortByName);

            Handlebars.partials = Handlebars.templates;

            var guidelinesSection = Handlebars.templates.citationTable(data);
            $('#guidelinesSection').html(guidelinesSection);
        });
}(jQuery));
