def sum2(nums):
    if len(nums)<2:
        return sum(nums)
    return sum(nums[:2])
