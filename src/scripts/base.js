console.log("Script initialized");

// get the button by its id and store it for other functions
const addButton = document.getElementById("add-note");
const newNote = document.getElementById("new-note");

const addNote = () => {
    const note = newNote.value;
    console.log({note});
    if(note.length > 0){
        chrome.storage.sync.set({note}, () => {
            console.log("Note saved");
        });
        newNote.value = "";
    }
};


(() => { 
    addButton.addEventListener("click", addNote);
    chrome.storage.sync.get("note", (data) => { 
        console.log("Data received", data);
    })
})();