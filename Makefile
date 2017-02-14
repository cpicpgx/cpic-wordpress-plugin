install: bootstrap templates deploy

bootstrap:
	npm install

deploy:
	cp -r js /var/www/html/wp-content/plugins/cpic-pharmgkb/
	chown -R www-data:www-data /var/www/html/wp-content/plugins/cpic-pharmgkb

templates:
	@for f in js/template/*.hbs; do \
	    node_modules/.bin/handlebars $$f -f "$${f%.hbs}.js" -e hbs -m -h /js/vendor/; \
	done
