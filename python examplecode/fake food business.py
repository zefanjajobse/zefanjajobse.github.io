from datetime import time

# make menus have function
class Menu:
 def  __init__(self, name, items, start_time, end_time):
   self.name = name
   self.items = items
   self.start_time = start_time
   self.end_time = end_time
 def __repr__(self):
   return "{} menu available from {} to {}".format(self.name, self.start_time.strftime("%I%p").lower(), self.end_time.strftime("%I%p").lower())
 def calculate_bill(self, purchased_items):
   purchased_item = []
   bill = 0
   for item in purchased_items:
    if item in self.items:
     purchased_item.append(self.items[item])
   for item in purchased_item:
     bill += item
   return bill

# add different shops
class Franchise:
  def __init__(self, address, menus):
    self.address = address
    self.menus = menus
  def __repr__(self):
    return "{}".format(self.address)
  def available_menus(self, time):
    items = []
    for item in self.menus:
      if item.start_time <= time and item.end_time >= time:
        items.append(item)
    return items

# deversify into a different marked:
class Business:
  def __init__(self, name, franchises):
    pass

# make the menus itself
brunch = Menu("Brunch", {
  'pancakes': 7.50, 'waffles': 9.00, 'burger': 11.00, 'home fries': 4.50, 'coffee': 1.50, 'espresso': 3.00, 'tea': 1.00, 'mimosa': 10.50, 'orange juice': 3.50
}, time(11), time(16))
early_bird = Menu("Early bird", {
  'salumeria plate': 8.00, 'salad and breadsticks (serves 2, no refills)': 14.00, 'pizza with quattro formaggi': 9.00, 'duck ragu': 17.50, 'mushroom ravioli (vegan)': 13.50, 'coffee': 1.50, 'espresso': 3.00,
}, time(15), time(18))
dinner = Menu("Dinner", {
  'crostini with eggplant caponata': 13.00, 'ceaser salad': 16.00, 'pizza with quattro formaggi': 11.00, 'duck ragu': 19.50, 'mushroom ravioli (vegan)': 13.50, 'coffee': 2.00, 'espresso': 3.00,
}, time(17), time(23))
kids = Menu("Kids", {
  'chicken nuggets': 6.50, 'fusilli with wild mushrooms': 12.00, 'apple juice': 3.00
}, time(11), time(21))
# diff food business
arepas_menu = Menu("Take a' Arepa", {
  'arepa pabellon': 7.00, 'pernil arepa': 8.50, 'guayanes arepa': 8.00, 'jamon arepa': 7.50
}, time(10), time(20))

# make the franchises for the shops function
flagship_store = Franchise("1232 West End Road", [brunch, early_bird, dinner, kids])
new_installment = Franchise("12 East Mulberry Street", [brunch, early_bird, dinner, kids])
# diff food business
arepas_place = ("189 Fitzgerald Avenue", [arepas_menu])

# make the different business franchises
first_business = Business("Basta Fazoolin' with my Heart", [flagship_store, new_installment])
second_business = Business("Take a' Arepa", [arepas_place])

# Test if it works
print(brunch)
print(flagship_store)
print(brunch.calculate_bill(["pancakes", "home fries", "coffee"]))
print(early_bird.calculate_bill(["salumeria plate", "mushroom ravioli (vegan)"]))
print(flagship_store.available_menus(time(12)))
print(flagship_store.available_menus(time(17)))