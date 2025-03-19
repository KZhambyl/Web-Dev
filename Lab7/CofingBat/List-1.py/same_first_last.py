def same_first_last(nums):
    if not len(nums):
        return False
    return nums[0]==nums[-1]
