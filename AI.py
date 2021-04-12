import random

bots = 150
tr = 100
allwnb = []
allpts = []
mostpts = 0
best = []

for i in range(bots):
    pts = 0

    w11 = random.randint(-100, 100)
    w12 = random.randint(-100, 100)
    w13 = random.randint(-100, 100)
    w21 = random.randint(-100, 100)
    w22 = random.randint(-100, 100)
    w23 = random.randint(-100, 100)
    b1 = random.randint(-100, 100)
    b2 = random.randint(-100, 100)
    b3 = random.randint(-100, 100)

    for j in range(tr):

        x = random.randint(0, 10)
        y = random.randint(0, 10)

        n1 = x
        n2 = y

        o1 = n1 * w11 + n2 * w21 + b1
        o2 = n1 * w12 + n2 * w22 + b2
        o3 = n1 * w13 + n2 * w23 + b3

        if ((o1 > o2) and (o1 > o3)):
            if x < y:
                pts = pts + 1
            #print(str(x) + " < " + str(y))

        elif ((o2 > o1) and (o2 > o3)):
            if x > y:
                pts = pts + 1
            #print(str(x) + " >  " + str(y))

        else:
            if x == y:
                pts = pts + 1
            #print(str(x) + " = " + str(y))

    allwnb.append(w11)
    allwnb.append(w12)
    allwnb.append(w13)
    allwnb.append(w21)
    allwnb.append(w22)
    allwnb.append(w23)
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

best.append(allwnb[9 * mostpts])
best.append(allwnb[9 * mostpts + 1])
best.append(allwnb[9 * mostpts + 2])
best.append(allwnb[9 * mostpts + 3])
best.append(allwnb[9 * mostpts + 4])
best.append(allwnb[9 * mostpts + 5])
best.append(allwnb[9 * mostpts + 6])
best.append(allwnb[9 * mostpts + 7])
best.append(allwnb[9 * mostpts + 8])


print(allpts[mostpts], "/", tr, best)

w11 = best[0]
w12 = best[1]
w13 = best[2]
w21 = best[3]
w22 = best[4]
w23 = best[5]
b1 = best[6]
b2 = best[7]
b3 = best[8]

while True:
    x = int(input("x: "))
    y = int(input("y: "))

    n1 = x
    n2 = y

    o1 = n1 * w11 + n2 * w21 + b1
    o2 = n1 * w12 + n2 * w22 + b2
    o3 = n1 * w13 + n2 * w23 + b3

    if ((o1 > o2) and (o1 > o3)):
        print(x, "<", y)

    elif ((o2 > o1) and (o2 > o3)):
        print(x, ">", y)

    else:
        print(x, "=", y)