def end_other(s1, s2):
    s1, s2 = s1.lower(), s2.lower()
    return s1.endswith(s2) or s2.endswith(s1) 
