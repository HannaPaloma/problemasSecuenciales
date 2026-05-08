function hipotenusa(){
/* vinculador variable convertir a numero leemos el input con id num1 su valor */
    let catetoA= parseFloat(document.getElementById("catetoA").value);
    let catetoB= parseFloat(document.getElementById("catetoB").value);
    const result = Math.sqrt(catetoA* catetoA + catetoB*catetoB );

    //El texto que tiene
    document.getElementById("result").textContent = "La hipotenusa es: " + result;
};
