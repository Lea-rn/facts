const fact = document.querySelector(".facts")
const button = document.querySelector("button")
const counter = document.querySelector(".counter")



let x = 0 ; 

async function getFacts (){
    try {
        const res = await fetch ("https://uselessfacts.jsph.pl/api/v2/facts/random")
      
        const data = await res.json()
       
        fact.textContent = data.text
        // x = x+1 ; 
        x+=1 
        // counter.textContent = "you have read"+" "+x+" "+ "pieces of facts" 
        counter.textContent = `you have read ${x} pieces of facts`


    }catch(err){
     console.log("check your api !!! ")
     }
}

button.addEventListener("click",getFacts)
getFacts()

 ///// invocation , call the function , run the function