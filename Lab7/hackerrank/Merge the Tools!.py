def merge_the_tools(string, k):
    for i in range(0, len(string), k):
        sub = string[i:i+k]
        met = set()
        res = ""
        for j in sub:
            if j not in met:
                res+=j
                met.add(j)
        print(res)
if __name__ == '__main__':
    string, k = input(), int(input())
    merge_the_tools(string, k)