!function(){var l=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).cpicAlleles=l({1:function(l,n,e,a,t){var s,i,r=null!=n?n:l.nullContext||{},u=l.escapeExpression;return'        <tr>\n            <td style="text-align:right;padding-right:1em;">'+u((i=null!=(i=e.position||(null!=n?n.position:n))?i:e.helperMissing,"function"==typeof i?i.call(r,{name:"position",hash:{},data:t}):i))+"</td>\n            <td>"+(null!=(s=e.if.call(r,null!=(s=null!=n?n.allele:n)?s.symbol:s,{name:"if",hash:{},fn:l.program(2,t,0),inverse:l.program(4,t,0),data:t}))?s:"")+"</td>\n            <td>"+u(l.lambda(null!=(s=null!=(s=null!=n?n.allele:n)?s.gene:s)?s.symbol:s,n))+'</td>\n            <td><ul class="list-unstyled">\n'+(null!=(s=e.each.call(r,null!=n?n.guidelines:n,{name:"each",hash:{},fn:l.program(6,t,0),inverse:l.noop,data:t}))?s:"")+"            </ul></td>\n        </tr>\n"},2:function(l,n,e,a,t){var s;return"\n                "+l.escapeExpression(l.lambda(null!=(s=null!=n?n.allele:n)?s.symbol:s,n))+"\n"},4:function(l,n,e,a,t){var s,i=l.lambda,r=l.escapeExpression;return"                "+r(i(null!=(s=null!=(s=null!=n?n.allele:n)?s.gene:s)?s.symbol:s,n))+" "+r(i(null!=(s=null!=n?n.allele:n)?s.name:s,n))+"\n            "},6:function(l,n,e,a,t){var s,i=null!=n?n:l.nullContext||{},r=e.helperMissing,u=l.escapeExpression;return'                    <li>\n                        <a href="'+u((s=null!=(s=e.url||(null!=n?n.url:n))?s:r,"function"==typeof s?s.call(i,{name:"url",hash:{},data:t}):s))+'">'+u((s=null!=(s=e.title||(null!=n?n.title:n))?s:r,"function"==typeof s?s.call(i,{name:"title",hash:{},data:t}):s))+"</a>\n                    </li>\n"},compiler:[7,">= 4.0.0"],main:function(l,n,e,a,t){var s;return'<table class="table table-condensed table-striped" id="tableCpicAlleles">\n    <caption>There is also a <a href="https://api.cpicpgx.org/data/cpic.alleles.csv">CSV version of this table</a> for download.</caption>\n    <thead>\n    <tr>\n        <th></th>\n        <th>Allele</th>\n        <th>Gene</th>\n        <th>Guideline</th>\n    </tr>\n    </thead>\n    <tbody>\n'+(null!=(s=e.each.call(null!=n?n:l.nullContext||{},n,{name:"each",hash:{},fn:l.program(1,t,0),inverse:l.noop,data:t}))?s:"")+"    </tbody>\n</table>\n"},useData:!0})}();