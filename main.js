//01
let div2 = document.getElementsByTagName ("div") [2]
console.log(div2.firstElementChild)
//02
console.log(div2.lastElementChild)
//03
let p = div2.getElementsByTagName ("p") [0]
let i = p.getElementsByTagName ("i") [0]
console.log(i)
//04
let p1 = div2.getElementsByTagName ("p") [1]
let b = p1.getElementsByTagName ("b") [0]
console.log(b)
//05
console.log(i.parentElement)
//06
console.log(b.parentElement)
//07
console.log(div2.firstElementChild.nextElementSibling)