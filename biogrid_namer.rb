require 'yaml'

$data = YAML.load_file 'data.yml'

def decorate string
	case [:prefix, :suffix, :extension].sample
	when :prefix
		$data['Prefixes'].sample.to_s << ' ' << string
	when :suffix
		string << ' ' << $data['Suffixes'].sample.to_s
	when :extension
		string << $data['Extensions'].sample.to_s
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
