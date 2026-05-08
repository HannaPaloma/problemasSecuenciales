function triangulo(){
/* vinculador variable convertir a numero leemos el input con id num1 su valor */
    let b= parseFloat(document.getElementById("b").value);
    let h= parseFloat(document.getElementById("h").value);
    const result = (b* h)/2; 
    //El texto que tiene
    document.getElementById("result").textContent = "El resultado es: " + result;
};

