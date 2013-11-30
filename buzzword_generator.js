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
  decorate: function (string, modifier) {
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

  generate: function (modifiers, string, probability) {
    probability = probability || 1;
    if (Generator.randomNumber(probability) === 0) {
      var modifier = Generator.randomFrom(modifiers);
      string = Generator.generate(modifiers, Generator.decorate(string, modifier), probability + 1);
    }
    return string;
  }
};

$.getJSON('modifiers.json', function (data) {
  var modifiers = Config.convert(data);

  function update() {
    $('.title').html(Generator.generate(modifiers, 'Scrum'));
  }

  $(document).ready(update);
  $('.more-button').click(update);
});
