while True:
    n = int(input("Number: "))
    p1 = ""
    p2 = "*"
    p3 = ""
    p4 = ""

    for i in range(n):
        p1 = p1 + "*"
        print(p1)

    for i in range(n - 1):
        p2 = " " + p2
    if n > 0:
        print(p2)
    for i in range(n - 1):
        p2 = p2[1:] + "**"
        print(p2)
    for i in range(n - 1):
        p2 = " " + p2[:-2]
        print(p2)

    for i in range(n):
        p3 = p3 + chr(65 + i)
        print(p3)

    for i in range(n):
        p4 = p4 + chr(97 + i)
        print(p4)