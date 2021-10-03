document.addEventListener("DOMContentLoaded", ready)
let string = "";
let array;
let timer;
let textSpan;
let content;
let photoText;
function pasteInfo(item)
{
    photoText.innerText = item.children[1].textContent
    clearTimeout(timer)
    textSpan.innerText = ""
    textSpan.classList.add("blinkAnimation")
    content.classList.add("slideUpAnimation")
    string = item.children[2].textContent
    array = string.split("")
    frameLooper()
}

function ready() {
    photoText = document.getElementById("info__photo__text")
    content = document.getElementById("info__content")
    textSpan = document.getElementById("info__text")
    let items = document.getElementsByClassName("slider__item")
    pasteInfo(items[0])
    for(let i = 0; i < items.length; i++)
    {
        items[i].addEventListener("click", ()=>{
            pasteInfo(items[i])
        })
    }
}

function frameLooper () {
    if (array.length > 0)
    {
        textSpan.innerText += array.shift()
    }
    else {
        content.classList.remove("slideUpAnimation")
        clearTimeout(timer)
        textSpan.classList.remove("blinkAnimation")
    }
    timer = setTimeout('frameLooper()',0.5); /* change 70 for speed */

}