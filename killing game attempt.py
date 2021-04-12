p=int(input());
l=[];

for i in range (1, p+1):
    l.insert(i,i);

x=int((len(l))/2);
y=float((len(l))/2);

for i in range (2, p+1, 2):
    l.pop(int(i/2));

print(l);

while ((len(l))!=1):
    if (x==y):
        n=0

    if (x!=y):
        n=1

    x=int((len(l))/2);
    y=float((len(l))/2);

    if (n==0):
        if (x==y):
            for i in range (2, len(l)+1, 2):
                l.pop(int(i/2));

        print(l, "1");

        if (x!=y):
            for i in range (2, (len(l)), 2):
                l.pop(int(i/2));

        print(l, "2");
        
    if (n==1):
        if (x==y):
            for i in range (1, len(l)+1, 2):
                l.pop(int(i/2));

        print(l, "3");

        if (x!=y):
            for i in range (1, (len(l))+1, 2):
                l.pop(int(i/2));

        print(l, "4");

print(str(l[0]));
