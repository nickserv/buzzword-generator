lint: jslint csslint

jslint:
	jslint src/**/*.js --terse --indent=2 --nomen --plusplus

csslint:
	csslint *.css --quiet --ignore=adjoining-classes

deploy:
	git checkout gh-pages
	git merge master
	git push
	git checkout master
	git push
