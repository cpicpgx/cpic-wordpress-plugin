!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).guidelines=n({1:function(n,e,a,l,t){var r,s,u=null!=e?e:n.nullContext||{},d=a.helperMissing,h=n.escapeExpression;return'    <tr>\n        <td>\n            <p><em><a href="'+h((s=null!=(s=a.url||(null!=e?e.url:e))?s:d,"function"==typeof s?s.call(u,{name:"url",hash:{},data:t}):s))+'">'+h((s=null!=(s=a.name||(null!=e?e.name:e))?s:d,"function"==typeof s?s.call(u,{name:"name",hash:{},data:t}):s))+"</a></em></p>\n        </td>\n        <td>"+(null!=(r=a.each.call(u,null!=e?e.drug:e,{name:"each",hash:{},fn:n.program(2,t,0),inverse:n.noop,data:t}))?r:"")+"</td>\n        <td>"+(null!=(r=a.each.call(u,null!=e?e.gene:e,{name:"each",hash:{},fn:n.program(2,t,0),inverse:n.noop,data:t}))?r:"")+"</td>\n    </tr>\n"},2:function(n,e,a,l,t){return"<div>"+n.escapeExpression(n.lambda(e,e))+"</div>"},compiler:[7,">= 4.0.0"],main:function(n,e,a,l,t){var r;return'<table class="table table-striped" id="tableGuidelines">\n    <thead>\n    <tr>\n        <th style="width:60%;">Guidelines</th>\n        <th style="width:20%;">Drugs</th>\n        <th style="width:20%;">Genes</th>\n    </tr>\n    </thead>\n    <tbody>\n'+(null!=(r=a.each.call(null!=e?e:n.nullContext||{},e,{name:"each",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t}))?r:"")+"    </tbody>\n</table>"},useData:!0})}();