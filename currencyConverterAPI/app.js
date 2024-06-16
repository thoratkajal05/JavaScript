let select=document.querySelectorAll(".currency")
let btn=document.getElementById("btn")
let input=document.getElementById("input")

fetch('https://www.frankfurter.app/currencies')
.then(res=> res.json())
.then(res=>displaydropdown(res))


function displaydropdown(res){
      //console.log(Object.entries(res)[2][0])
      let curr=Object.entries(res)
      for(let i=0;i<curr.length;i++){
        //console.log(curr[i][0])
        let opt=`<option value=${curr[i][0]}>${curr[i][0]}</option>`
        //console.log(opt)
        select[0].innerHTML += opt
        select[1].innerHTML += opt

      }
}
btn.addEventListener("click",()=>{
    let curr1=select[0].value
    let curr2=select[1].value
    let inputval=input.value
    if(curr1==curr2)
        alert("Choose different currencies")
    else
    convert(curr1,curr2,inputval)
})
function convert(curr1,curr2,inputval){
    const host = 'api.frankfurter.app'; 
    fetch(`https://${host}/latest?amount=${inputval}& from=${curr1}& to=${curr2}`)   
    .then(resp => resp.json())  
     .then((data) => {   
        // console.log(Object.values(data.rates)[0])
        document.getElementById("result").value= Object.values(data.rates)[0]
        });
}