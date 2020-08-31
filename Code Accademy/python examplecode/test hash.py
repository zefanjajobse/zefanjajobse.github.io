key = str(input("give my a string to hash \n"))
key_list_ord = []
key_list = []
key_string_ord = ""
total = 0
for item in key:
    key_list.append(item)
    key_list_ord.append(ord(item))
    if item != key[-1]:
        key_string_ord += (str(ord(item)) + " + ")
    else:
        key_string_ord += (str(ord(item)) + " = ")
    total += ord(item)
print(str(key_list) + "\n" + str(key_list_ord) + "\n" + str(key_string_ord) + "\n" + str(total))