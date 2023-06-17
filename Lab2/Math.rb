module MyMath
  class Math
    SUPPORTED_OPERATORS = ['+', '-', '*', '/']

    def calc(number1, number2, operator)
      validate_number(number1)
      validate_number(number2)
      validate_operator(operator)

      expression = "#{number1} #{operator} #{number2}"

      if operator == '/' && number2 == 0
        raise ArgumentError, "Division by zero is not allowed."
      end

      eval(expression)
    end

    private

    def validate_number(number)
      unless number.is_a?(Numeric)
        raise ArgumentError, "Invalid number: #{number}. Number argument must be a numeric value."
      end
    end

    def validate_operator(operator)
      unless SUPPORTED_OPERATORS.include?(operator)
        raise ArgumentError, "Unsupported operator: #{operator}."
      end
    end
  end
end


