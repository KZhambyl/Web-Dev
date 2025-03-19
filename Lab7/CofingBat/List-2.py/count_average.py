def centered_average(nums):
    mi = ma = nums[0]
    res=0
    for i in nums:
        mi=min(i,mi)
        ma=max(i,ma)
        res+=i
    return (res-ma-mi)/(len(nums)-2)

  
