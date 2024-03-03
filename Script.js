
document.addEventListener("DOMContentLoaded", function() {
    
    var clearButton = document.getElementById("clearButton");

    
    clearButton.addEventListener("click", function() {
        
        var mainElement = document.getElementById("text");
        
        mainElement.innerHTML = "";
    });
});
