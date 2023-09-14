let btn = document.querySelector(".btn");
let spans = document.querySelectorAll(".rating span");
let containerOne=document.querySelector('.container')
let containerTwo = document.querySelector(".container2")
let resultArea = document.querySelector(".selected-star p")

let spansArray = Array.from(spans)

spansArray.forEach(span => {
    span.addEventListener('click', () => {
        document.querySelector(".active")?.classList.remove('active')
        span.classList.add('active')

        btn.addEventListener('click',()=> {
            containerOne.style.display = "none"
            containerTwo.style.display = "block"

            resultArea.innerHTML=`You selected ${span.innerHTML} out of 5`

            
        })
    })
})
