module MyModule
  class Person
    attr_accessor :fname, :lname, :birth_date, :age

    def initialize(fname = '', lname = '', birth_date = '', age = 0)
      @fname = fname
      @lname = lname
      @birth_date = birth_date
      @age = age
    end

    def get_person_data
      print 'Enter your first name: '
      @fname = gets.chomp

      print 'Enter your last name: '
      @lname = gets.chomp

      print 'Enter your birth date (YYYY-MM-DD): '
      @birth_date = gets.chomp

      calculate_age
    end

    def welcome
      puts "Welcome, #{@fname} #{@lname}!"
      puts "You are #{@age} years, #{months_old} months, and #{days_old} days old."
    end

    private

    def calculate_age
      today = Date.today
      birth = Date.parse(@birth_date)
      @age = today.year - birth.year
      @age -= 1 if today.month < birth.month || (today.month == birth.month && today.day < birth.day)
    end

    def months_old
      today = Date.today
      birth = Date.parse(@birth_date)
      (today.year * 12 + today.month) - (birth.year * 12 + birth.month)
    end

    def days_old
      today = Date.today
      birth = Date.parse(@birth_date)
      (today - birth).to_i
    end
  end
end
