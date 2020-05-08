class SortedList(list): #is the child of the default function list
  def append(self, value):
    super().append(value)
    self.sort()
  def __init__(self, lst): #overwrite the newlist function
    super().__init__(lst) #add the old rewrite function
    self.sort() #add sort to the end of the function
    

new_list = SortedList([4, 1, 5]) #call the newly created function

print(new_list)