n=int(input())
l, r = [int(x) for x in input().split()] 

if n>l and r>l:
	print("yes",end="")
else:
	print("no",end="")
