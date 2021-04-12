x = 0.6
f = 2.5
for i in range (100):
    x = f * x * (1 - x)
    print(x)