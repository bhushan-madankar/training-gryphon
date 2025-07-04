def solve(numbers, operators):
    print(numbers,operators)
    if len(numbers) >0 and len(operators) >0:
        n2 = numbers.pop()
        n1 = numbers.pop()
        op = operators.pop()
        result = n1 + n2 if op == '+' else n1 - n2
        numbers.append(result)

def evaluate(expression):
    numbers = []
    operators = []
    i = 0
    while i < len(expression):
        if expression[i].isdigit():
            num = 0
            while i < len(expression) and expression[i].isdigit():
                num = num * 10 + int(expression[i])
                i += 1
            numbers.append(num)
        else:
            while len(operators) >0:
                solve(numbers, operators)
            operators.append(expression[i])
            i += 1
    solve(numbers, operators)
    return numbers[-1] # -1 because we want the last element which is the result

# Example usage
if __name__ == "__main__":  
    expression = "3+2-4"
    result = evaluate(expression)
    print(f"The result of the expression '{expression}' is: {result}")