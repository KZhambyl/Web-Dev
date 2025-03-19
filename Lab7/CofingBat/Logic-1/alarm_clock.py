def alarm_clock(day, vacation):
    if not vacation:
        return '10:00' if day in [0,6] else '7:00'
    return 'off' if day in [0,6] else '10:00'
