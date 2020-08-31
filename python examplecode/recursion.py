def sum_list(array):
    if array == []:
        return 0
    return array[0] + sum_list(array[1:])

print(sum_list([5, 6, 3]))
