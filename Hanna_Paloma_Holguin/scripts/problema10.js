function conagua(){
/* vinculador variable convertir a numero leemos el input con id num1 su valor */
    let metros= parseFloat(document.getElementById("metros").value);
  
    const result = metros * 80;
    //El texto que tiene
    document.getElementById("result").textContent = "El resultado es: " + result;
};
