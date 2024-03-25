console.log("Script initialized");

// get the button by its id and store it for other functions
const addButton = document.getElementById("add-note");

const addNote = () => {
  console.log("Note added");
};


(() => { 
    addButton.addEventListener("click", addNote);
})();