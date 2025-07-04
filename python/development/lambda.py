# def get_sum(a, b):
#     return a + b

# print(get_sum(3, 5))

# s = lambda a,b : a+b
# print(s(3, 5))

 
# nums = [[1000, 10], [500, 20], [800, 40], [200, 30]]
# print(nums)
# nums.sort(reverse=True)
# print(nums)
 
# # sort according to the second element of each sublist
# nums.sort(key=lambda x: x[1], reverse=True)
# print(nums)

from random import randint
#  generate a list with 20 random integers and add a tag of even and odd to corresponding integers
nums = [randint(1, 100) for _ in range(20)]
# print(nums)

# tagged_nums = [(num, "even" if num % 2 == 0 else "odd") for num in nums]
tagged_nums = [(lambda num: (num, "even" if num % 2 == 0 else "odd"))(num) for num in nums] # using a lambda function
print(tagged_nums)
