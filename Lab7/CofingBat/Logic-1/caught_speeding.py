def caught_speeding(speed, is_birthday):
    if is_birthday:
        return 0 if speed<=65 else 1 if speed<=85 else 2
    return 0 if speed<=60 else 1 if speed<=80 else 2
