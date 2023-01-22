import os
pathiter = (os.path.join(root, filename)
    for root, _, filenames in os.walk('./')
    for filename in filenames
)
for path in pathiter:
    newname =  path.replace('payment', 'user')
    if newname != path:
        os.rename(path,newname)
