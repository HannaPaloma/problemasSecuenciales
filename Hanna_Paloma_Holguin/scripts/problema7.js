function viaje(){
/* vinculador variable convertir a numero leemos el input con id num1 su valor */
    let km = parseFloat(document.getElementById("km").value);
    const result = km * 35; 
    //El texto que tiene
    document.getElementById("result").textContent = "El costo del boleto es: " + result + " pesos";
};
