n = int(input())
arr = list(map(int, input().split()))
found=False
for i in range(n-1):
    if arr[i]>0 and arr[i+1]>0 or arr[i]==0 and arr[i+1]==0 or arr[i]<0 and arr[i+1]<0:
        print("YES")
        found=True
        break

if not found:
   print("NO")