function edades(){
/* vinculador variable convertir a numero leemos el input con id num1 su valor */
    let empleado= parseFloat(document.getElementById("empleado").value);
    let actyear= parseFloat(document.getElementById("actyear").value);
    const result = actyear - empleado; 
    //El texto que tiene
    document.getElementById("result").textContent = "La edad es de: " + result + " años";
};

