
btn = document.getElementById("food-btn")
overlay = document.getElementById("overlay")

btn.addEventListener("click", ()=> {
overlay.style.display= 'grid'
overlay.classList.add('animate-overlay')
})

function popQuestion(){
    //btn = document.getElementById("food-btn")
    popUp = document.getElementsByClassName("popup")

    popUp.style.opacity= '1'
    popUp.style.pointerevents= 'visible'

}

function search(){
    document.getElementById("city").value = ''
}





function findFood() {

    if (userSignUp && userLogin === false){
        popQuestion()
    }
    else if (userSignUp === true && userLogin === false){
        popQuestion()
    }
    else {
        event.preventDefault()
    }
}