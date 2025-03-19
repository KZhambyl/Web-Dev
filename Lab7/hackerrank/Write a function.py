def is_leap(year):
    leap = False
    
    # Write your logic here
    leap = (year%100!=0 and year%4==0) or year%400==0
    return leap

year = int(input())
print(is_leap(year))