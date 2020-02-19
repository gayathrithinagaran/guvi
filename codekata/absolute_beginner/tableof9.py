n=int(input())
if(n==0):
	print("NULL",end="")
else:
    for i in range(1,n+1):
        print(9*i,end="")
        if(i<n):
            print(end=" ")
