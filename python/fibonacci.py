

def fibonacci(n):
    fib_sequence = []
    for i in range(n):
        if i == 0:
            fib_sequence.append(0)
        elif i == 1:
            fib_sequence.append(1)
        else:
            fib_sequence.append(fib_sequence[i-1] + fib_sequence[i-2])
    return fib_sequence

def print_fib(limit):
    n1,n2 = 0,1
    if limit ==0:
        print(0)
    elif limit ==1:
        print(0,1,1)
    else:
        print(0,1, end = ' ')
        s = n1 + n2
        while s < limit:
            print(s,end=' ')
            n1, n2 = n2, s
            s = n1 + n2

# print(fibonacci(50))
print_fib(50)