def insertSort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i-1
        while j >= 0 and key < arr[j]:
            arr[j+1] = arr [j]
            j -= 1
        arr[j + 1] = key

arr = [2,3,8,9,2,15,3,28,32,324,1,10]
insertSort(arr)
print("排序后：")
for i in range(1, len(arr)):
    print("%d"%arr[i])
