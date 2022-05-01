def qsort1(l, u, arr):
    if (l > u): 
        return
    m = l
    for i in range(l + 1, u + 1):
        if (arr[i] < arr [l]):
            m = m + 1
            arr [m], arr[i] = arr[i], arr[m]
    arr[m],arr[l] = arr[l],arr[m]
    qsort1(l, m-1, arr)
    qsort1(m+1, u, arr)


arr = [2,3,8,9,2,15,3,28,32,324,1,10]
qsort1(0,len(arr) - 1,arr)
print("排序后：")
for i in range(1, len(arr)):
    print("%d"%arr[i])
