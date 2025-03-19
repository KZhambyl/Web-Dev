x = int(input())
res=0

for i in range(x):
    if(x%(i+1)==0):
        res+=1

print(res)
