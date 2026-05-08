function times(){
/* vinculador variable convertir a numero leemos el input con id num1 su valor */
    let distancia= parseFloat(document.getElementById("distancia").value);
    let velocidad= parseFloat(document.getElementById("velocidad").value);
    const result = distancia / velocidad; 
    //El texto que tiene
    document.getElementById("result").textContent = "El tiempo es: " + result + " m/s";
};
