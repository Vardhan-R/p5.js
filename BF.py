import time
x = str(input())
k = []
pt = 0
a = 0
b = 0
for i in range(16):
    k.append(0)

while True:
    #time.sleep(0.01)

    if x[a] == "+":
        k[pt] = k[pt] + 1

    if x[a] == "-":
        k[pt] = k[pt] - 1

    if x[a] == "<":
        pt = pt - 1

    if x[a] == ">":
        pt = pt + 1

    if x[a] == ".":
        print(k[pt])

    if x[a] == ",":
        k[pt] = int(input())

    if x[a] == "[":
        if k[pt] == 0:
            b = 0
            while b >= 0:
                a = a + 1
                if x[a] == "[":
                    b = b + 1
                if x[a] == "]":
                    b = b - 1

    if x[a] == "]":
        if k[pt] != 0:
            b = 0
            while b >= 0:
                a = a - 1
                if x[a] == "]":
                    b = b + 1
                if x[a] == "[":
                    b = b - 1
    a = a + 1
    if a == len(x):
        break
#print(k)
#,>,[<+>-]<. addition
#,>,[<->-]<. subtraction
#,>,<[>[>>+<<-]>>[<+<+>>-]<<<-]>[-]>[<<+>>-]<<. multiplication
#,>,<[>[>+>+<<-]>>[<<+>>-]<[<<->>-]>>+<<<<]>>>>. division
#,[>+>+<<-]>>[<<+>>-]<<[>[>>+<<-]>>[<+<+>>-]<<<-]>[-]>[<<+>>-]<<. square
#,>,-[>>>>+<<<<-]<[>+>+>>+<<<<-]>>[<<+>>-]>>>[<<<<<[>[>>+<<-]>>[<+<+>>-]<<<-]>[-]>[<<+>>-]>>[<<+<+>>>-]<<[>>+<<-]>>>-]<[-]<<<[-]<. power
#,>,>+<[>>+>+<<<-]>>[<<+>>-]<<<[>>>+>>+<<<<<-]>>>>>[<<<<<+>>>>>-]<<[>[>]<-<-]<<. greater or equal number
#>>>,<,[<+<+>>>>>+<<<-]>[<<<[[>]>[-<]<<-]>[<+>>+<-]>[<+>-]>]<<<<[->>>>>-<<<<<]>>>>>. mod