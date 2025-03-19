x = input()
res = 0

for ind, i in enumerate(x):
    res+=pow(10,ind)*int(i)
print(res)

