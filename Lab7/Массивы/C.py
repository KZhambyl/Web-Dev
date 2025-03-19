n = int(input())
arr = list(map(int, input().split()))
res=0

for i in arr:
    if i>=0:
        res+=1

print(res)