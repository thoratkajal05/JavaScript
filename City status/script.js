/*
'Chennai': population = 4646732
        literacyRate = 90.20
        language = 'Tamil'
'pune':population = 8443675
            literacyRate = 88.71
            language = 'Kannada'
'Mumbai':population = 12442373
        literacyRate = 89.73
        language = 'Marathi'
'Delhi': population = 16787941
        literacyRate = 86.20
        language = 'Hindi'
The Indian city of Bengaluru has a population of 8443675. Language spoken is Kannada and literacy rate is 88.71%.
*/
let button=document.querySelector("button")
//event listner
button.addEventListener("click",display)
function display(){
    //console.log("clicked")
    let input=document.getElementById("input")
    let city=input.options[input.selectedIndex].value
    //console.log(city)
    let population=0,literacyRate=0,language=" "
    switch(city){
        case "chennai":
            population = 4646732
            literacyRate = 90.20
            language = 'Tamil'
            break
        case "pune":
            population = 12442373
            literacyRate = 89.73
            language = 'Marathi'
            break
        case "mumbai":
            population = 16787941
            literacyRate = 86.20
            language = 'Hindi'
            break
        case "delhi":
            population = 8443675
            literacyRate = 88.71
            language = 'Kannada'
            break
    }
    let text=`The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}.`
    //console.log(text)
    //document.getElementById("result").innerHTML=text+"completed"

    let resultdiv=document.createElement('div')//creating div tag
    resultdiv.id='result'//creating is for created div
    document.getElementById("wrapper").appendChild(resultdiv)
    document.getElementById('result').innerHTML=text
}