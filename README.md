# [biogrid-namer](http://thenickperson.github.com/biogrid-namer/)
Produces amusing names for BioGrid, the next RapDev project for the <a
href="http://sse.se.rit.edu">Society of Software Engineers</a>.

Please note that this software is a personal project of mine, and not of the
Society of Software Engineers.

## Hacking
If you would like to contribute to the name generator (even if you only want to
add content), feel free to fork this repository and send me a pull request.

### Editing the list of modifiers
The name generator uses Modifier objects to hold text that can modify BioGrid's
title. When the page is loaded, a random number of modifiers is applied to the
string "BioGrid".

Modifier text is stored in `modifiers.json`. This JSON file holds four lists of
modifiers, stored in a hash table. Here are brief descriptions of these four
lists:
- __before__: Text added to the start of the name, with a space in between.
	- Example: Super BioGrid
- __after__: Text added to the end of the name, with a space in between.
	- Example: BioGrid the Videogame
- __prefixes__: Text added to the start of the name, without additional spaces.
	- Example: iBioGrid
- __suffixes__: Text added to the end of the name, without additional spaces.
	- Example: BioGrid.js
