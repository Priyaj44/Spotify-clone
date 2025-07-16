marks1 = int(input("Enter your marks for physics: "))
marks2 = int(input("Enter your marks for chemistry: "))
marks3 = int(input("Enter your marks for biology: "))

total_percentage = (100*(marks1 + marks2 + marks3))/300

if(total_percentage>=40 and marks1>=33 and marks2>=33 and marks3>=33):
    print("you are pass")

else:
    print("You failed, try again next year!")