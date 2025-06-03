function calculate()
{
    let weg = prompt("Enter Your Weight in Kg:");
    let heg = prompt("Enter Your Height in Cm:");

    let oweg = parseFloat(weg);
    let ohegcm= parseFloat(heg);

    let oheg = ohegcm / 100;

    let bmi = oweg / (oheg * oheg);
    let type = "";

    if (bmi < 18.5){
        type = "Underweight";
    }
    else if (bmi >= 18.5 && bmi <24.5){
        type = "Normal Weight";
    }
    else if (bmi >= 25 && bmi <29.9){
        type = "Over Weight";
    }
    else {
        type = "Obese";
    }
    
    document.getElementById("result").innerHTML =
        `Your BMI is : ${bmi.toFixed(2)}
         Your are : ${type}`
        ;
}
