const notescontainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
// const notes = document.querySelectorAll(".input-box")

function showNotes(){
    notescontainer.innerHTML = localStorage.getItem("notes");
}

function updateStorage(){
    localStorage.setItem("notes", notescontainer.innerHTML);
}

createbtn.addEventListener("click",()=>{
    const inputBox = document.createElement("p");
    const img = document.createElement("img");
    inputBox.className ="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    img.addEventListener("click", () => {
        inputBox.remove();
        updateStorage();
    });
    notescontainer.appendChild(inputBox).appendChild(img);
});

notescontainer.addEventListener("input", (e) => {
    
    if (e.target.classList.contains("input-box")) {
        updateStorage();
    }
});
notescontainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        const parentP = e.target.closest(".input-box");
        parentP.remove();
        updateStorage();
    }
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

showNotes();