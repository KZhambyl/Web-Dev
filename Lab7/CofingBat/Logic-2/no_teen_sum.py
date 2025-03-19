def no_teen_sum(a, b, c):
    return fix_teen(a)+fix_teen(b)+fix_teen(c)
def fix_teen(n):
    if n==15 or n==16:
      return n
    return 0 if (n in [x for x in range(13,20)]) else n
