"""
concept in programming to make work easier..by using the pricnipals.
1. encapsulation 
     >>keeping data and methods<function inside a class>while resticting direct access to internal data

2. abstaraction
    >> hiidng unessesatiry complexity or imlrtation of details
3. inheritancee
   one class to reuse or extend propertie and methods of another class

4. polymorphism
    >>appearing in different forms . methods can have different behaviours
 JS and python are object orientated .
  >>number.toString()
"""


"""
>>class
 its a blue print of an object<>
 could be an architectural draiwing of a house. 
 object >>implementationn of the drawing.
"""
#to find the name capitalised
#property are the fields
class House:
  bedrooms=3
  bathrooms=2
  floors=1
  area=120
  owner=""
  location=""
  architect="kimani"

  def print_self(self):
    #self>>referd to the object
    print(self)
    print(self.__dict__) # prints all the properties in the dictionary



macrine_house=House()
print(f"macrines house bedrooms{macrine_house.bedrooms}")
print(f"macrines house bedrooms{macrine_house.bathrooms}")
print(f"macrines house bedrooms{macrine_house.floors}")

daniel_house=House()  
  