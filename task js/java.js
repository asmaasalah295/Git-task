function plus(){
    var num1 = parseInt(document.getElementById("number1").value),
        num2 = parseInt(document.getElementById("number2").value),
        result = num1 + num2;

    if (num1 == 0 || num2 == 0) {
        document.getElementById("divv").innerText = 'Enter Number Please';
    }
    else if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("divv").innerText = 'Sorry is not a number';
        alert("focus on what you write");
    }
    else {
        document.getElementById("divv").innerText = result;
    }
}

function pro(){
    a = prompt("say some thing");

    document.getElementById("prom").innerText = a;
}

function makarr(ind){
    var users = new Array();
    var  ones = new Array();

        //var arr=["one","second"];

    for (let index = 0; index < ind; index++) {
        users[index] = prompt('type element number ' + (index + 1));
    }

    for (let index = 0; index < ind; index++) {
        ones[index] = index + 1;
    }

    for (let index = 0; index < users.length; index++) {
        document.getElementById("user").innerHTML += 
        ones[index] + " name is: " + users[index] + "<br>";
    }
    
}
