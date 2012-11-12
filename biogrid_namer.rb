require 'yaml'

$data = YAML.load_file 'data.yml'

def decorate string
	case [:before, :after, :prefix, :suffix].sample
	when :before
		$data['Before'].sample.to_s << ' ' << string
	when :after
		string << ' ' << $data['After'].sample.to_s
	when :prefix
		string << $data['Prefix'].sample.to_s
	when :suffix
		$data['Suffix'].sample.to_s << string
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
