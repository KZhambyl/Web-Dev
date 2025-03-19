def doublePower(a:int, n:int):
    if n==0:
        return 1
    if n%2==0:
        return doublePower(a, n/2)**2
    else:
        return doublePower(a, n-1)*a


a, n = map(int,input().split())
print(doublePower(a,n))