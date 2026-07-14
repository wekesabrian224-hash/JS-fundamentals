/*
DOM Access using

1.querySelector
2.documentGet<....>

1.getElementById:
-create a variable assign to the dom element with id<div1>
-console.log this element :view in your browser
-in browser console you should be able hover over the element

2.getElementByClass
-create a variable assign to the dom element with with class<list-item>
-console.log this element :view in your browser
-in browser console you should be able hover over the element>

3.querySelector:
    1.for the id: hint use # for id
    -create a variable assign to the dom element with id<div1>
    -console.log this element :view in your browser
    -in browser console you should be able hover over the element

    2.<use querySelector>for the class: hint use <.>
    -create a variable assign to the dom element with class<list-item>
    -console.log this element :view in your browser
    -in browser console you should be able hover over the element
    -Note you only get the first List item.

    2.<use querySelectorAll>for the class: hint use <.>
    -create a variable assign to the dom element with class<list-item>
    -console.log this element :view in your browser
    -in browser console you should be able hover over the element
    -Note you get the array.
    -use a for Loop or while to go through the array elements
      and print each element.
*/
//1 getting elementById
const div1=document.getElementById("div1")
console.log(div1)
//2get elementByClass
const list=document.getElementsByClassName("list-item")
console.log(list)
// 3 queryselectors
  const first1=document.querySelector("#div1")
  console.log(first1)

  const first2=document.querySelector(".list-item")
  console.log(first2)

  const body1=document.querySelectorAll(".list-item")

  //looop
  for (let i = 0; i < body1.length; i++) {
    console.log(body1[i])};



    function money(){
      console.log("funds clicked")
    }

    function food(){
      console.log("chapo clicked")
    }
    function nature(){
      console.log("peace clicked")
    }