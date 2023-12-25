let result=document.getElementById("result")
let buttons=document.querySelectorAll("button")

let string= ''

buttons.forEach(element=>{
    element.addEventListener('click',(b)=>{
        if(b.target.innerText== '='){
            string=String(eval(string))
            result.value=string;
        }
        else if(b.target.innerText == 'C'){
            string=''
            result.value=string;
        }
        else if(b.target.innerText=="DE"){
            string=string.substring(0,string.length-1)
            result.value=string;
        }
        else{
            string+=b.target.innerText
            result.value=string
        }
    })
})