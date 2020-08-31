# define flatten() below...
def flatten(my_list):
  result = []
  for planets in my_list:
    if isinstance(planets, list):
      print("list found!")
      flat_list = flatten(planets)
      result += flat_list
    else:
      result.append(planets)
  return result

### reserve for testing...
planets = ['mercury', 'venus', ['earth'], 'mars', [['jupiter', 'saturn']], 'uranus', ['neptune', 'pluto']]
print(flatten(planets))