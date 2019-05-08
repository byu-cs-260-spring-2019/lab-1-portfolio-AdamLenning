window.onload = function(){
    var isAnsweredDisplayed = false;
    
    document.getElementById("button").addEventListener('click', function(){
        if(!isAnsweredDisplayed){
            document.getElementById('answer').style.display = "block";
            document.getElementById('button').innerHTML = "Hide my Family";
            isAnsweredDisplayed = true;
        } else {
            document.getElementById('answer').style.display = "none";
            document.getElementById('button').innerHTML = "Show my Family";
            isAnsweredDisplayed = false;
        }
    });
}