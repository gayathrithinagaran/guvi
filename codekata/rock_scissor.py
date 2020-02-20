x, y = input().split()
if((x=='R' and y=='P')or(x=='P' and y=='R')):
    print('P',end="")
elif((x=='S' and y=='P') or (x=='P' and y=='S')):
	print('S',end="")
elif((x=='R' and y=='S') or (x=='S' and y=='R')):
	print('R',end="")
else:
    print('D',end="")
