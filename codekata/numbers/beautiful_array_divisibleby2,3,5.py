n=int(input())
l=[int(x) for x in input().split()][:n]
sum=0
for i in range(n):
    sum=sum+l[i]
if sum%2==0 and sum%3==0 and sum%5==0:
    print("1",end="")
else:
    print("0",end="")
