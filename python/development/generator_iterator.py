# import sys
# r = range(1,100000)
# # a = 10
# # print(sys.getsizeof(a))

# print(sys.getsizeof(r))  # This will print the size of the range object


# Generator Example
# def get_num():
#     yield(10)
#     yield(20)
#     yield(30)
#     yield(40)
#     yield(50)


# f = get_num()
# # print(f)
# # print(type(f))  # Output: <class 'generator'>
# print(next(f))  # Output: 10
# print(next(f))  # Output: 20


# ----------------- generator vs iterator -----------------
# def inf_series():
#     i = 1
#     while True:
#         yield i
#         i += 1

# # f = inf_series()
# # print(next(f))  # Output: 1
# # print(next(f))  # Output: 2
# # print(next(inf_series()))  # Output: 1
# # print(next(inf_series()))  # Output: 1

# def my_range(start,end,step):
#     current = start
#     while current < end:
#         yield current
#         current += step  

# for n in my_range(3, 6, 0.1):
#     print(round(n,2))
    
# -------- iterator example --------
# custom iterator class (__init__ , __iter__, __next__) dunder methods

class EmployeeIds:
    def __init__(self, low , high):
        self.low = low
        self.high = high
        self.current = low
        
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current <= self.high:
            val = self.current
            self.current += 1
            return val
        else:
            raise StopIteration

for id in EmployeeIds(100, 105):
    print(id, end =', ')
        

    