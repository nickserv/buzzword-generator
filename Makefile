lint: jslint csslint

jslint:
	jslint *.js --terse --browser --indent=2 --plusplus --predef $$

csslint:
	csslint *.css --quiet

deploy:
	git checkout gh-pages
	git merge master
	git push
	git checkout master
	git push
