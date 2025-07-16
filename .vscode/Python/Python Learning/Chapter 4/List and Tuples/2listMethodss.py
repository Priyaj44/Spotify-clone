friends = ["Apple", "Orange", 5, 345.06, False, "Aakash", "Rohan"]
print(friends[0])

friends.append("Harry")
print(friends)

list1 = [1, 34, 62, 2, 6, 11]
list1.sort()                     # It sort the list in ascending order
print(list1)

list1.reverse()
print(list1)        #sort the list in descending order

list1.insert(3, 3333)       #Insert object before index.
print(list1)

print(list1.pop(3))
print(list1)

list1.remove(1)
print(list1)