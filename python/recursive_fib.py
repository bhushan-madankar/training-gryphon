def fib_recursion(limit):
    a , b = 0,1
    if(limit == 0):
        return 0
    elif (limit ==1):
        return 1
    else:
        print(0,1, end = ' ')
        n1 = fib_recursion(limit-1)
        n2 = fib_recursion(limit-2)
        s = n1 + n2
        if s < limit:
            print(s)
        else:
            return None

print(fib_recursion(10)) 