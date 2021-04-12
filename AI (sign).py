import random

bots = 150
tr = 100
allwnb = []
allpts = []
mostpts = 0
best = []

for i in range(bots):
    pts = 0

    w1 = random.randint(-100, 100)
    w2 = random.randint(-100, 100)
    w3 = random.randint(-100, 100)
    b1 = random.randint(-100, 100)
    b2 = random.randint(-100, 100)
    b3 = random.randint(-100, 100)

    for j in range(tr):

        x = random.randint(-10, 10)

        n = x

        o1 = n * w1 + b1
        o2 = n * w2 + b3
        o3 = n * w3 + b3

        if ((o1 > o2) and (o1 > o3)):
            if x < 0:
                pts = pts + 1
            #print(str(x) + " < 0")

        elif ((o3 > o1) and (o3 > o2)):
            if x > 0:
                pts = pts + 1
            #print(str(x) + " =  0")

        else:
            if x == 0:
                pts = pts + 1
            #print(str(x) + " = " + str(y))

    allwnb.append(w1)
    allwnb.append(w2)
    allwnb.append(w3)
    allwnb.append(b1)
    allwnb.append(b2)
    allwnb.append(b3)
    allpts.append(pts)
    #print(pts, "/", tr)

#print(allwnb)
#print(allpts)

for i in range(len(allpts)):
    if allpts[mostpts] < allpts[i]:
        mostpts = i

#print(mostpts)

best.append(allwnb[6 * mostpts])
best.append(allwnb[6 * mostpts + 1])
best.append(allwnb[6 * mostpts + 2])
best.append(allwnb[6 * mostpts + 3])
best.append(allwnb[6 * mostpts + 4])
best.append(allwnb[6 * mostpts + 5])

print(allpts[mostpts], "/", tr, best)

w1 = best[0]
w2 = best[1]
w3 = best[2]
b1 = best[3]
b2 = best[4]
b3 = best[5]

while True:
    x = int(input("x: "))

    n = x

    o1 = n * w1 + b1
    o2 = n * w2 + b2
    o3 = n * w3 + b3

    if ((o1 > o2) and (o1 > o3)):
        print(x, "< 0")

    elif ((o3 > o1) and (o3 > o2)):
        print(x, "> 0")

    else:
        print(x, "= 0")