# Run linters on the source code
lint: jslint csslint

# Run jslint on all JavaScript code
jslint:
	jslint *.js --terse --browser --indent=2 --plusplus --predef $$

# Run csslint on all CSS code
csslint:
	csslint *.css --quiet

# Deploy the app by merging master into gh-pages and pushing
deploy:
	git checkout gh-pages
	git merge master
	git push
	git checkout master
	git push
