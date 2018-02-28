
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  // you do the rest
  console.log(answerPTagWithValue.textContent)
  answerPTagWithValue.innerHTML = answerPTagWithValue.textContent * 2

})



document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  const circle = document.querySelector('#circle-bw')

  if (circle.style.backgroundColor !== "rgb(0, 0, 0)") {
    circle.style.backgroundColor = "rgb(0, 0, 0)"
  }else{
    circle.style.backgroundColor = "rgb(255, 255, 255)"
  }
    
})
const size = document.querySelector(".circle-red")
 size.style.width = "40px"
 

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  // const size = document.querySelector(".circle-red") 
  const sizeOne = document.querySelector(".circle-red")

    if(sizeOne.style.width === "40px"){

    sizeOne.style.width = (40 * 2)+"px"
    sizeOne.style.height =  sizeOne.style.width 

    return sizeOne.style.width 
    }
    

    if (sizeOne.style.width === "80px") {
      sizeOne.style.width = (80 * 2)+"px"
      sizeOne.style.height =  sizeOne.style.width 
      return sizeOne.style.width 
    }

     if (sizeOne.style.width === "160px") {
      sizeOne.style.width = (160 * 2)+"px"
      sizeOne.style.height =  sizeOne.style.width 
      return sizeOne.style.width 
    }

    if (sizeOne.style.width === "320px") {
      sizeOne.style.width = (160 / 4)+"px"
      sizeOne.style.height =  sizeOne.style.width 
      return sizeOne.style.width 
    }
    

    
    

})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  const inactiveAll = document.querySelectorAll("li")
  const arrayOfinactive = [...inactiveAll]
  for(let i = 0; i < arrayOfinactive.length; i++){
  //console.log(allParagraphs[i])
  //allParagraphs[i].style.margin= "0px"
    const inac = inactiveAll[i]
    if(inac.textContent === "inactive user"){
      inac.classList.add(".inactive")
      inac.style.display = "none"

    }

    
  }
  

   

 


})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
let cambio = document.querySelector("#reverse-squares .content-box .answer-box").classList.toggle("reverse-squares")

})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  const item = document.querySelectorAll("#pig-latin #tasks li")
  //console.log(item)
  const arrayReverseText = [...item]
  for(let i = 0; i <  arrayReverseText.length; i++ ){
    const element = item[i]
    let text = element.textContent
    let resText = text.split("").reverse().join("")
    element.textContent = resText
  }
})

let incremento =1
document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
   let imgs = document.querySelector("#city-img")
   incremento += 1
   if(incremento > 10){
      incremento = 1
      imgs.src = "./images/city-photo-"+incremento+".jpg"
   }
   imgs.src = "./images/city-photo-"+incremento+".jpg"
   console.log(imgs.src)
})
