def not_string(str):
    if not str.startswith('not'):
        str='not '+str
    return str