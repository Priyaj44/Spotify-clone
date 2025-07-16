a =(1,45,342,3424,False,"Rohan", "Shivam")

no = a.count("Rohan")            # it counts the given argument comes how many times in the given compartment
print(no)

i = a.index(3424)
print(i)


t = (1, 2, 2, 3)
print(t.count(2))  

t = (1, 2, 3, 2)
print(t.index(2))             # it returns the indexing of the given argument
 
print(len(t))
# print(max(t))
print(min(t))
print(sum(t))                      # (if numeric)
print(sorted(t))                  # (returns a list)


t = (1, 2, 3)
t1 = list(t)  # Convert to list
t2 = tuple(t1)  # Convert back to tuple


print(t1)
print(t2)