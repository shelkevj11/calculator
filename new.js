let input = document.querySelector('#inbox')
console.log(input);
let button = document.querySelectorAll('button')
// let display = document.querySelector('.display')
// let heading = document.querySelector('h1')
// console.log(heading)
// heading.style.background='yellow'


let arr1=[];
let arr = Array.from(button);
arr.forEach(e => {

    
    e.addEventListener('click',()=>{
        
        if(e.innerText == '='){
            arr1 = eval(arr1)
            
        }
        
        else if(e.innerText == '←'){
            // console.log(e.innerText)
            arr1 = arr1.slice(0,- 1); 
        }
        
        else if(e.innerText == '√'){
            arr1=arr1**0.5;
        }

        else if(e.innerText == 'C'){
            arr1 = "";
        }
        else{
            arr1 += e.innerText
        }
        
        input.value=arr1;
        
    })
})

