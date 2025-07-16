a = int(input("Enter your age: "))



if(a%2 == 0):
    print("a is even")  # End of if statement: 1


if(a>=18):      # if statament no 2 :
    print("You are above the age of consent ")
    print("Good for you")


elif(a<0):
    print("You are entering an invalid negative age ")
    
elif(a==0):
    print("You are entering 0 which is not a valid age ")

else:
    print("You are below the age of consent")
    
# End of if statement no: 2
    
    
print("End of program")