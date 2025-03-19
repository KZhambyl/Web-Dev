def min(a:int, b:int, c:int, d:int):
    arr = [a,b,c,d]
    arr.sort()
    return arr[0]

inp = list(map(int,input().split()))
print(min(inp[0], inp[1], inp[2], inp[3]))