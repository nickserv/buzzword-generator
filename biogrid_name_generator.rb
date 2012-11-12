$prefixes = ['Super', 'Ultra', 'Mega']
$suffixes = ['on Rails', 'the Videogame', 'With Friends', '2.0', 'Free ', 'Pro', 'Episode 1', 'Land', 'Deluxe', 'Light', 'Lite', 'LE']
$extensions = ['.js', '.ly', 'Ville']

def decorate string
	case [:prefix, :suffix, :extension].sample
	when :prefix
		$prefixes.sample << ' ' << string
	when :suffix
		string << ' ' << $suffixes.sample
	when :extension
		string << $extensions.sample
	end
end

def swaggify(string, probability=1)
	if rand(probability) == 0
		swaggify(decorate(string), probability+1)
	else
		string
	end
end

puts swaggify 'BioGrid'