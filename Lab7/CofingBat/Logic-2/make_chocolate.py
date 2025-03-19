def make_chocolate(small, big, goal):
    goal-=5*min(big,goal//5)
    return goal if goal<=small else -1
