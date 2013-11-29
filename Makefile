lint: jslint csslint

jslint:
	jslint *.js --terse --indent=2 --plusplus

csslint:
	csslint *.css --quiet

deploy:
	git checkout gh-pages
	git merge master
	git push
	git checkout master
	git push
