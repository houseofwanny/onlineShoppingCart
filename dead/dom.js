let shoeEl = document.getElementById('shoe')
let numberItems = 0

let shoesEll = document.getElementById('shoes')
let numberItems1 = 0

let shoessElll = document.getElementById('shoess')
let numberItems2 = 0

let heartButo = document.getElementById('heartButton1')
let totalPrice = document.getElementById('total')
let subPrice = 0

let checkoutPrice = document.getElementById('checkoutButton')
let heart = document.getElementById("heart-btn")
let heartTwo = document.getElementById("heart-btn2")
let heartThree = document.getElementById("heart-btn3")
let AbortSig = document.getElementById("abort")



function Toggle1(){
    if (heartTwo.style.color == "saddlebrown"){
        heartTwo.style.color = "grey"  
    }else {
        heartTwo.style.color = "saddlebrown"
    }
};


function Toggle2(){
    if (heartThree.style.color == "saddlebrown"){
        heartThree.style.color = "grey"  
    }else {
        heartThree.style.color = "saddlebrown"
    }
};
for(i = 0; i < 101; i++){
    console.log([i])
   }

   function plus(){
    numberItems += 1
    shoeEl.innerText = numberItems
    subPrice += 250
    totalPrice.textContent = '$' + subPrice
    checkoutPrice.textContent = 'CHECKOUT ' + '$' + subPrice

}

function minus(){
    if(numberItems > 0){
        numberItems -= 1
        shoeEl.innerText = numberItems
        subPrice -= 250
        totalPrice.textContent = '$'+ subPrice
        checkoutPrice.textContent = 'CHECKOUT ' + '$' + subPrice
        }
        else {shoeEl.innerText(0)
        };
    }

    function pluss(){
        numberItems1 += 1
        shoesEll.innerText = numberItems1
        subPrice += 500
        totalPrice.textContent = '$' + subPrice
        checkoutPrice.textContent = 'CHECKOUT ' + '$' + subPrice
    }
    
    function minuss(){
        if(numberItems1 > 0){
            numberItems1 -= 1
            shoesEll.innerText = numberItems1
            subPrice -= 500
            totalPrice.textContent = '$'+ subPrice
            checkoutPrice.textContent = 'CHECKOUT ' + '$' + subPrice
            }
            else {shoesEll.innerText(0)
            };
    
    
    }

    function plusss(){
        numberItems2 += 1
        shoessElll.innerText = numberItems2
        subPrice += 1000
        totalPrice.textContent = subPrice
        totalPrice.textContent = '$' + subPrice
        checkoutPrice.textContent = 'CHECKOUT ' + '$' + subPrice
    }
    
    
    function minusss(){
        if(numberItems2 > 0){
        numberItems2 -= 1
        shoessElll.innerText = numberItems2
        subPrice -= 1000
        totalPrice.textContent = '$'+ subPrice
        checkoutPrice.textContent = 'CHECKOUT ' + '$' + subPrice
        }
        else {shoessElll.innerText(0)
        };
    
    
    }
    