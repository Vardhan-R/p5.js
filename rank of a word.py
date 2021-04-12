import itertools
x = input("Enter a word: ")
x = x.upper()
l = []
k = 0
f = []
n = []
d = 0
for i in x:
    l.append(i)
l.sort()
perm = itertools.permutations(l)
for i in perm:
    f.append(i)
for i in range(len(f)):
    for j in range(i + 1, len(f)):
        if f[i] == f[j]:
            n.append(j)
    n.reverse()
    for j in n:
        f.pop(j)
    n.clear()
for i in f:
    k = k + 1
    print(k, i)
    for j in range(len(x)):
        if i[j] == x[j]:
            d = d + 1
    if d == len(x):
        r = k
    d = 0
print(r, k - r + 1)