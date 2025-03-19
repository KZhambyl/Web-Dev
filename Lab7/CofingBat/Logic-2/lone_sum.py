def lone_sum(a, b, c):
    return int(a!=b and a!=c)*a+int(b!=a and b!=c)*b+int(c!=a and c!=b)*c
