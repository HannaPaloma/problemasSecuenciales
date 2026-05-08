function tarifa(){
/* vinculador variable convertir a numero leemos el input con id num1 su valor */
    let horas= parseFloat(document.getElementById("horas").value);
    const result = Math.ceil(horas) * 10; 
    //El texto que tiene
    document.getElementById("result").textContent = "La tarifa es de: " + result + " pesos";
};
