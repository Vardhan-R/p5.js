while True:
    n = int(input("Natural number: "))
    a = 0
    r = []
    if n > 0:
        while n!= 1:
            r.append(n % 2)
            n //= 2
    for i in range(len(r)):
        a += r[i] * 2 ** i
    print(2 * a + 1)