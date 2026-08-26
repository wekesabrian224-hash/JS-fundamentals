#if(<conditions>)

age = 18
if age>18:
  print("you can drink")
  print("something Else")
elif age == 44:
  print("you are not that young")
else:
  print("last else")  

for i in range(0,200,5): 
  print("I is ", i)

ar=[23,45,67,45,40]
for i in range(0,len(ar)):
  single_item=ar[i]
  print(single_item)

for single_item in ar:
  print("single item", single_item)  

k=0
while k<20:
  k=k+1
  print("k is ", k)
