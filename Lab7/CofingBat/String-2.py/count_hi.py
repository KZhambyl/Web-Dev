def count_hi(str):
    res = 0
    for i in range(len(str)-1):
        if str[i]+str[i+1]=='hi':
            res+=1
    return res
