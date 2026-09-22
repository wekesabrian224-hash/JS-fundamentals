#if(<conditions>)

age = 18
if age>18:
  print("you can drink")
  print("something Else")
elif age == 44:
  print("you are not that young")
else:
  print("last else")  

for i in range(0,500,50): 
  print("I is ", i)

ar=[23,45,67,45,40]
for i in range(3,len(ar)):
  single_item=ar[i]
  print(single_item)

for single_item in ar:
  print("single item", single_item)  

k=0
while k<20:
  k=k+1
  print("k is ", k)


# for the range we have the (start,stop ,range)===> for in range (0,30,2)
for i in range(0,200):
  print("I is:", i)

#len gives you the length of the arrary  


if age>80:
  pass