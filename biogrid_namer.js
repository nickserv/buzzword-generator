var data = load_file('data.yml');

function randomNumber(max) {
	return Math.floor(Math.random()*max);
}

function decorate(string) {
	var modes = ['before', 'after', 'prefix', 'suffix'];
	switch(modes.getRandom()) {
		case 'before':
			return data.before.getRandom() + ' ' + string;
		case 'after':
			return string + ' ' + data.after.getRandom();
		case 'prefix':
			return data.prefixes.getRandom() + string;
		case 'suffix':
			return string + data.suffixes.getRandom();
	}
}

function swaggify(string, probability) {
	if(!probability) {
		probability = 1;
	}
	if(randomNumber(probability) === 0) {
		string = swaggify(decorate(string), probability+1);
	}
	return string;
}

document.write(swaggify('BioGrid'));
