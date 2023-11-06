


var add = document.getElementById("add-popup")
var overlay = document.querySelector(".pop-overlay")
var popupbox = document.querySelector(".popup-box")



add.addEventListener("click",function(){
    overlay.style.display="block"
    popupbox.style.display="block"
    
})


// Cancell button

var cancel = document.getElementById("Cancel-popup")

cancel.addEventListener("click",function(event){
    event.preventDefault()
    popupbox.style.display="none"
    overlay.style.display="none"
})



// Add button


var addbutton = document.getElementById("Add-book")
var container = document.querySelector(".container")
var booktitle = document.getElementById("book-title")
var bookauthor = document.getElementById("book-author")
var description = document.getElementById("description")


addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h4>${bookauthor.value}</h4>
    <p>${description.value}</p>
    <button onclick="deleteBook(event)">Delete</button>`
    container.append(div)
    popupbox.style.display="none"
    overlay.style.display="none"
})



//Delete book   

function deleteBook(event)
{
    event.target.parentElement.remove()
}