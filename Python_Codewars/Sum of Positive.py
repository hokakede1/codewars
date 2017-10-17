import os
import sys
import random

def positive_sum(arr):
    # Your code here
    sum = 0;
    for x in range(0,len(arr)):
        if arr[x] % 2 == 0:
            print("this is the array value that got in", arr[x])
            sum = sum + arr[x]
        # print('here is the sum',sum)
    return sum




print(positive_sum([1,2,3,4,5]))  #15
# print(positive_sum([1,-2,3,4,5])) #13
# print(positive_sum([-1,2,3,4,-5])) #9


# print("outside", 9 % 2 == 0)
