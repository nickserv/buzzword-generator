"use strict";

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

Array.prototype.random = function () {
  return this[randomNumber(this.length)];
};

function loadModifiers(data) {
  var categories = Object.keys(data);
  return categories.reduce(function (memo, category) {
    var convertedModifiers = data[category].map(function (modifier) {
      return { value: modifier, category: category };
    });
    return memo.concat(convertedModifiers);
  }, []);
}

function decorate(modifiers, string) {
  var modifier = modifiers.random();
  switch (modifier.category) {
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

function swaggify(modifiers, string, probability) {
  probability = probability || 1;
  if (randomNumber(probability) === 0) {
    string = swaggify(modifiers, decorate(modifiers, string), probability + 1);
  }
  return string;
}

$.getJSON('modifiers.json', function (data) {
  var modifiers = loadModifiers(data);

  function generate() {
    $('.title').html(swaggify(modifiers, 'Scrum'));
  }

  $(document).ready(generate);
  $('.more-button').click(generate);
});
