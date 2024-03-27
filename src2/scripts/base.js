console.log("Script initialized");

// get the button by its id and store it for other functions
const addButton = document.getElementById("add-note");
const newNote = document.getElementById("new-note");

const getNoteList = () => {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get("noteList", data => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(data.noteList || []);
            }
        });
    });
};

const addNote = async() => {
    const note = newNote.value;
    console.log({note});
    if(note.length > 0){
        const retrievedNoteList = await getNoteList();
        const noteList = [...retrievedNoteList, note];
        chrome.storage.sync.set({noteList}, () => {
            console.log("Note saved");
        });
        newNote.value = "";
    }
};

const createNotes = (noteList) => { 

};


(() => { 
    addButton.addEventListener("click", addNote);
    const noteList = chrome.storage.sync.get("noteList", (data) => { 
        console.log("Data received", data);
    })

    createNotes(noteList);
})();