
function want(){
	
	/*"use strict";*/
	
	var num1 = parseInt(document.getElementById("number1").value),
		num2 = parseInt(document.getElementById("number2").value),
		
		result = num1 + num2;
	
	
	if (num1 === "" || num2 === ""){
		document.getElementById("hed").innerHTML = "This field can't be enpty"; 
	}
	else if (isNaN(num1) || isNaN(num2)){
		document.getElementById("hed").innerHTML = "This NaN"; 
	}
	else {
		document.getElementById("hed").innerHTML = result; 
	}
}




function want2(){

    var an = document.getElementById("search").value ;

    if(an != '' || an != null){
        an = an.toUpperCase();
    }

    console.log(an);

    switch (an) {
        case '':
            document.getElementById("hea1").innerText = "sorry not found";
            console.log(an);
            break;
        
        case 'M':
            document.getElementById("hed1").innerHTML = '<img src="images/m.jpg">';
            console.log(an);
            break;

        case 'EBTESAM':
            document.getElementById("hed1").innerHTML = '<img src="images/ebtesam.jpg" width="183" height="270">';
            console.log(an);
            break;

        case 'GERL':
            document.getElementById("hed1").innerHTML = '<img src="images/gerl.jpg">';
            console.log(an);
            break;

        case 'NARUTO':
            document.getElementById("hed1").innerHTML = '<img src="images/naruto.jpg">';

            console.log(an);
            break;

        case 'LOV':
            document.getElementById("hed1").innerHTML = '<img src="images/lov.jpg" width="183" height="270">';

            console.log(an);
            break;

        case 'MOL':
            document.getElementById("hed1").innerHTML = '<img src="images/mol.jpg">';

            console.log(an);
            break;
        
        case 'NAR':
            document.getElementById("hed1").innerHTML = '<img src="images/nar.jpg" width="183" height="270">';

            console.log(an);
            break;

        default:
            document.getElementById("hed1").innerText = "sorry not found";
            
            console.log(an);
            break;
    }
}