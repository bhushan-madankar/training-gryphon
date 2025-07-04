def get_sum(a,b):
    return a+b

def get_product(a,b):
    return a*b

def greet(name):
    return f"Hello, {name}"
def print_name():
    print(__name__)
if __name__ == "__main__":          
    print(get_sum(5,10))
    print(get_product(5,10))
    print(greet("bhushan"))
    print_name()