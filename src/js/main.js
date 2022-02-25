//function that display value 
function dis(val) {
    document.getElementById("result").value += val
}


//function that evaluates the digit and return result 
function solve() {
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}


//function that clear the display 
function clr() {
    document.getElementById("result").value = ""
}

//function that clear the display 
function rot() {
    let x = document.getElementById("result").value
    document.getElementById("result").value = Math.sqrt(x);
}


//Delete Button
function back() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}
