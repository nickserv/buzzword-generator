var data = load_file('data.yml');

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
	if(rand(probability) === 0) {
		return swaggify(decorate(string), probability+1);
	}
	else {
		return string;
	}
}

document.write(swaggify('BioGrid'));
