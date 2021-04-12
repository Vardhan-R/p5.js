p=int(input());
l=[];
k=1

for i in range (1, p+1):
    l.insert(i,i);

while ((len(l))!=1):
    while (k+1>(len(l))):
        k=k-(len(l))

    l.pop(k);

    k=k+1

print(str(l[0]));
