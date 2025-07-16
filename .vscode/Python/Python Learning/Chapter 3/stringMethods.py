a = "Priya!"
print(len(a))
print(a.upper())
print(a.lower())
print(a.rstrip("!"))
print(a.replace("Priya!","John"))
print(a.split(" "))
blogHeading = "introduction TO PyThon"
print(blogHeading.capitalize())

str1 = "Welcome to the Console!!! "
print(len(str1))  #it counts the spaces too
print(len(str1.center(50)))
print((str1.center(50)))
print(str1.count("o"))


# methods which returns boolean value

str2 = "WelcomeToTheConsole"
print(str2.endswith("!!! "))    #Return True if the string ends with the specified suffix, False otherwise.
print(str2.startswith("Welcome"))

print(str1.isalnum())           
    # Return True if the string is an alpha-numeric string, False otherwise.
    # A string is alpha-numeric if all characters in the string are alpha-numeric and there is at least one character in the string.

print(a.islower())

print(str2.isprintable())       #Return True if all characters in the string are printable, False otherwise.
                                # A character is printable if repr() may use it in its output.

print(str2.swapcase())      #Convert uppercase characters to lowercase and lowercase characters to uppercase.

print(str2.title())         #Return a version of the string where each word is titlecased.
                                    
                                
                                