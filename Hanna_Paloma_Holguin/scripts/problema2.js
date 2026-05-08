function dolares(){
/* vinculador variable convertir a numero leemos el input con id num1 su valor */
    let pesos= parseFloat(document.getElementById("pesos").value);
    const result = 0.058 * pesos; 
    //El texto que tiene
    document.getElementById("result").textContent = "Son: " + result + " dolares";
};
