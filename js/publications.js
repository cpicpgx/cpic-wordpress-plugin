var _sortByName = function(o1, o2) {
    return o1.name.localeCompare(o2.name);
};

var _positionCounter = 1;
Handlebars.registerHelper('position', function() {
    return _positionCounter++;
});

jQuery(function($) {
    $.getJSON('https://api.cpicpgx.org/v1/publication?highlightedonsite=eq.true', function(data) {
        for (let i = 0; i < data.length; i++) {
            var pubDiv = document.createElement('div');
            pubDiv.setAttribute('style', 'padding: 1rem;');
            pubDiv.innerHTML = Handlebars.templates.publication(data[i]);
            document.getElementById('highlightedPubs').appendChild(pubDiv);
        }
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
