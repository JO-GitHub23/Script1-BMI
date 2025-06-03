function calculate()
{
    let weg = prompt("Enter Your Weight in Kg:");
    let heg = prompt("Enter Your Height in Cm:");

    let oweg = parseFloat(weg);
    let ohegcm= parseFloat(heg);

    let oheg = ohegcm / 100;

    let bmi = oweg / (oheg * oheg);

    document.getElementById("result").innerHTML =
        `Your BMI is : ${bmi.toFixed(2)}`;

}
