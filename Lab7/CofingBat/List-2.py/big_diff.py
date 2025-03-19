def big_diff(nums):
    mi = ma = nums[0]
    for i in nums:
        mi=min(i,mi)
        ma=max(i,ma)
    return ma-mi
