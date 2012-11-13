function randomNumber(max) {
	return Math.floor(Math.random()*max);
}

Array.prototype.random=function() {
	var i = randomNumber(this.length);
	return this[i];
};

function decorate(data, string) {
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
	$.getJSON('data.json', function(data) {
		$("#title").html(swaggify(data, 'BioGrid'));
	});
}

$(document).ready(function() {
	generate();
});

$('#more-button').click(function() {
	generate();
});
