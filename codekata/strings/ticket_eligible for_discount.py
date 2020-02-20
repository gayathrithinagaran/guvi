n=int(input())
l=[int(x) for x in input().split()][:n]
d=int(input())
for i in range(n):
    if l[i]%d==0:
        print("1",end="")
    else:
        print("0",end="")
    if i<n-1:
        print(end=" ")
