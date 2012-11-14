function randomNumber(max) {
	return Math.floor(Math.random()*max);
}

Array.prototype.random=function() {
	var i = randomNumber(this.length);
	return this[i];
};

function Modifier(value, category) {
	this.value = value;
	this.category = category;
	//console.log(value+","+category);
}

function loadModifiers(data) {
	var modifiers = [];
	var categories = ['before','after','prefixes','suffixes'];
	for(i=0; i<4; i++) {
		for(j=0; j<data[categories[i]].length; j++) {
			var category = categories[i];
			var modifier = new Modifier(data[category][j], category);
			modifiers.push(modifier);
		}
	}
	return modifiers;
}

function decorate(data, string) {
	// convert data to list of modifiers
	modifiers = loadModifiers(data);
	// get a random modifier
	var modifier = modifiers.random();
	switch(modifier.category) {
		case 'before':
			return modifier.value + ' ' + string;
		case 'after':
			return string + ' ' + modifier.value;
		case 'prefixes':
			return modifier.value + string;
		case 'suffixes':
			return string + modifier.value;
	}
}

function swaggify(data, string, probability) {
	if(!probability) {
		probability = 1;
	}
	if(randomNumber(probability) === 0) {
		string = swaggify(data, decorate(data, string), probability+1);
	}
	return string;
}

function generate() {
	$.getJSON('modifiers.json', function(data) {
		$('#title').html(swaggify(data, 'BioGrid'));
	});
}

$(document).ready(function() {
	generate();
});

$('#more-button').click(function() {
	generate();
});
