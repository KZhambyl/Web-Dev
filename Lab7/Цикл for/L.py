x = input()
p = len(x) - 1
res = 0

for ind,i in enumerate(x):
    res+=pow(2,p-ind)*int(i)
    
print(res)