import math

a = int(input())
b = int(input())

for i in range(a, b+1, 1):
    s = math.sqrt(i)
    if int(s)==s:
        print(i, end=" ")