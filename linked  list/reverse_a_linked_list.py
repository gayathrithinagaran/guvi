n=int(input())
l = input().split()
l.reverse()
for i in range(n):
	print(l[i],end="")
	if(i<n-1):
		print(end=" ")
