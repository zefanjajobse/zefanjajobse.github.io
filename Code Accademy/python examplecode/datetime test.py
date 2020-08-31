from datetime import datetime

birthday = datetime(1997, 11, 1, 12)

print(datetime.now() - birthday)

# format time
# https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes
print(datetime.strptime("1 jan, 2001", "%d %b, %Y"))
# other way around
print(datetime.strftime(datetime.now(), "%d %b %Y"))

#for i in range(999999):
#    print(datetime.now())

print(datetime.strftime(datetime.now(), "%Y-%m-%d"))