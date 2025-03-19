def sum13(nums):
    total = 0
    skip = False
    for num in nums:
        if num == 13:
            skip = True
        elif skip:
            skip = False
        else:
            total += num
    return total
