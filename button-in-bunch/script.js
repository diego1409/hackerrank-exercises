// Add your javascript here
function loadButtons(){
    let buttonsDiv = document.getElementById("buttons"); //Get main container
    for (let i=1; i <= 20; i++) { //Create 20 buttons
        let newBtn = document.createElement("button");
        newBtn.innerText = i;
        newBtn.onclick = function() { displayAlert(i); }; //Function to display index
        buttonsDiv.appendChild(newBtn);
    }
}

//Function called when click event is done in each button
function displayAlert(index){
    alert(index);
}