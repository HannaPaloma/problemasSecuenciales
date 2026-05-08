function call(){
/* vinculador variable convertir a numero leemos el input con id num1 su valor */
    let time= parseFloat(document.getElementById("time").value);
    const result = time * 15; 
    //El texto que tiene
    document.getElementById("result").textContent = "El cobro sera de: " + result + " pesos";
};