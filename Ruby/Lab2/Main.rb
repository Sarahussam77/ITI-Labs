require_relative 'math'

my_math = MyMath::Math.new
puts my_math.calc(5, 2, '+')  # Output: 7
puts my_math.calc(10, 3, '-')  # Output: 7
puts my_math.calc(6, 4, '*')  # Output: 24
puts my_math.calc(8, 2, '/')  # Output: 4
p '############################################'

require 'date'
require_relative 'person'

person = MyModule::Person.new
person.get_person_data
person.welcome

