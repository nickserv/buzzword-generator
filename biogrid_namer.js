var data = load_file('data.yml');

function randomNumber(max) {
	return Math.floor(Math.random()*max);
}

Array.prototype.random=function() {
	var i = randomNumber(this.length);
	return this[i];
}

function decorate(string) {
	var modes = ['before', 'after', 'prefix', 'suffix'];
	switch(modes.random()) {
		case 'before':
			return data.before.random() + ' ' + string;
		case 'after':
			return string + ' ' + data.after.random();
		case 'prefix':
			return data.prefixes.random() + string;
		case 'suffix':
			return string + data.suffixes.random();
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
