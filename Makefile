install: bootstrap templates deploy

bootstrap:
	npm install

deploy:
	cp -r build/cpic-pharmgkb /var/www/html/wp-content/plugins/
	chown -R www-data:www-data /var/www/html/wp-content/plugins/cpic-pharmgkb

templates:
	@for f in js/template/*.hbs; do \
	    node_modules/.bin/handlebars $$f -f "$${f%.hbs}.js" -e hbs -m -h /js/vendor/; \
	done
	cp node_modules/handlebars/dist/handlebars.runtime.js js/vendor/handlebars.js

plugin:
	rm -rf build/cpic-pharmgkb
	mkdir -p build/cpic-pharmgkb/js/template
	mkdir -p build/cpic-pharmgkb/js/vendor
	cp js/*.js build/cpic-pharmgkb/js
	cp js/template/*.js build/cpic-pharmgkb/js/template
	cp js/vendor/*.js build/cpic-pharmgkb/js/vendor
	cp plugin_readme.txt build/cpic-pharmgkb/readme.txt
