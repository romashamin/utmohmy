# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'coffeescript', :input => 'coffee', :output => 'public/js'

guard 'sass', :input => 'sass', :output => 'public/css'

guard 'slim', :output_root => 'public', :slim => { :pretty => true } do
  watch(%r'^.+\.slim$')
end
