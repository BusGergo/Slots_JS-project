


function deposit(){
    document.getElementById("displayBox").innerHTML = document.getElementById("depositInput").value;
    
}

document.getElementById("depositButton").addEventListener("click", deposit);