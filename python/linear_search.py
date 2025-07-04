# def linear_search(arr):
#     for i in range(len(arr)):
#         for j in range(i + 1, len(arr)):
#             if arr[i] == arr[j]:
#                 return True
            
#     return False


# def main():
#     target = input("Enter the target number to search for: ")
#     print("Target number:", target)
#     arr = [1, 2, 3, 4, 5,6,]
#     print("Array:", arr)
#     result = linear_search(target)
#     if result:
#         print(f"{target} found.")
#     else:
#         print(f"{target} not found.")
        
# if __name__ == "__main__":
#     main()

def average(arr):
    if not arr:
        return 0
    return sum(arr) / len(arr)


# Linear Search Implementation with enumerate function
def linear_search(arr, target):
    for index, element in enumerate(arr):
        # print(f"Checking index {index}: {element}")
        if element == target:
            return index
    return -1

arr = [1, 2, 3, 4, 5, 6]
target = 30
result = linear_search(arr, target)
if result != -1:
    print(f"Element found at index {result}")
else:
    print("Element not found in the array")