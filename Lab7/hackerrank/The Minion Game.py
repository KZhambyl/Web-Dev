def minion_game(string):
    s=k=0
    vowels = "AEIOU"
    l = len(string)
    for i in range(len(string)):
        if string[i] in vowels:
            k+=l-i
        else:
            s+=l-i
    if k==s:
        print("Draw")
    elif k>s:
        print("Kevin", k)
    else:
        print("Stuart", s)

if __name__ == '__main__':
    s = input()
    minion_game(s)