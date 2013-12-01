# [buzzword-generator](http://thenickperson.com/buzzword-generator/)

[![Code Climate](https://codeclimate.com/github/thenickperson/buzzword-generator.png)](https://codeclimate.com/github/thenickperson/buzzword-generator)

## About
Produces amusing buzzword phrases.

## Hacking
If you would like to contribute to the generator (even if you only want to
add content), feel free to fork this repository and send me a pull request.

### Config File
The generator uses a JSON config file to store buzzwords that are nouns and
buzzwords that can be used as modifiers for those nouns. When the page is
loaded, a random number of modifiers is applied to a random noun.

Nouns and modifiers are stored in `config.json`. This JSON file holds one list
of nouns and four lists of modifiers (in different categories). Here is a brief
description of the modifier categories:
- __before__: Text added to the start of the string, with a space in between.
  - Example: Super Scrum
- __after__: Text added to the end of the string, with a space in between.
  - Example: Scrum the Videogame
- __prefixes__: Text added to the start of the string, without additional spaces.
  - Example: iScrum
- __suffixes__: Text added to the end of the string, without additional spaces.
  - Example: Scrum.js

If you edit the config, please consider sorting the strings you add/edit within
each section, as this makes it easier to find specific strings and duplicates.
