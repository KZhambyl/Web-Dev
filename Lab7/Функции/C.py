def xor(x:int, y:int):
    return int(x!=y)

x,y = map(int, input().split())
print(xor(x,y))