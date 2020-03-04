n, k=[int(x) for x in input().split()]
num=[int(x) for x in input().split()]
for i in num:
    if (k==i):
        print("yes",end="")
        break
else:
	print("no",end="")
