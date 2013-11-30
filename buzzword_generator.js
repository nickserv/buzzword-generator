"use strict";

var Config = {
  convert: function (data) {
    var categories = Object.keys(data);
    return categories.reduce(function (memo, category) {
      var convertedModifiers = data[category].map(function (modifier) {
        return { value: modifier, category: category };
      });
      return memo.concat(convertedModifiers);
    }, []);
  }
};

var Generator = {
  decorate: function (modifiers, string) {
    var modifier = Generator.randomFrom(modifiers);
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
  },

  randomFrom: function (list) {
    return list[Generator.randomNumber(list.length)];
  },

  randomNumber: function (max) {
    return Math.floor(Math.random() * max);
  },

  swaggify: function (modifiers, string, probability) {
    probability = probability || 1;
    if (Generator.randomNumber(probability) === 0) {
      string = Generator.swaggify(modifiers, Generator.decorate(modifiers, string), probability + 1);
    }
    return string;
  }
};

$.getJSON('modifiers.json', function (data) {
  var modifiers = Config.convert(data);

  function generate() {
    $('.title').html(Generator.swaggify(modifiers, 'Scrum'));
  }

  $(document).ready(generate);
  $('.more-button').click(generate);
});
