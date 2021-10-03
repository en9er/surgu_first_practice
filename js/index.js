document.addEventListener("DOMContentLoaded", ready)
function ready() {
    let currentSlideIndex = 0
    let lastSlideIndex = 3
    let slides = document.getElementsByClassName("slide")
    let prev = document.getElementById("prev")
    let next = document.getElementById("next")
    prev.addEventListener("click", ()=>{
        if(currentSlideIndex !== 0) {
            slides[currentSlideIndex - 1].style.display = "flex"
            slides[currentSlideIndex].style.display = "none"
            currentSlideIndex--
        }

        if(currentSlideIndex === 0)
        {
            prev.style.background = "#fff"
        }
        next.style.background = "#28585B"

    })

    next.addEventListener("click", ()=>{
        if(currentSlideIndex !== slides.length - 1) {
            slides[currentSlideIndex].style.display = "none"
            slides[currentSlideIndex + 1].style.display = "flex"
            currentSlideIndex++
        }

        if(currentSlideIndex === slides.length - 1)
        {
            next.style.background = "#fff"
        }
        prev.style.background = "#28585B"

    })

}