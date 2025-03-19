v = int(input())
t = int(input())
res = (v * t) % 109
if res < 0:
    res += 109
print(res)
