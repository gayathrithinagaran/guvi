n=int(input())
num=[int(x) for x in input().split()]
a=num[0]
for i in range(1,n):
	a=a & num[i]
print(a,end="")
