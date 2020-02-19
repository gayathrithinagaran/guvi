def smallest(x,y):
	if(x<y):
		return x
	else:
		return y
x,y=list(map(int,input().split()))
s=smallest(x,y)
print (s)
