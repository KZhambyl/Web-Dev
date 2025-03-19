def xyz_there(s):
    for i in range(len(s) - 2):
        if s[i:i+3] == 'xyz' and (i == 0 or s[i-1] != '.'):
            return True
    return False
