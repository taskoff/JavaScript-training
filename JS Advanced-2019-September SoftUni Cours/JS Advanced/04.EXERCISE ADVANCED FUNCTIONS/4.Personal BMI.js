function personalBmi(name, age, weight, height) {
    let resultObj = {};
    resultObj.name = name;

    (function getPersonalInfo(age, weight, height) {
        personalInfo = {
            age: age,
            weight: weight,
            height: height      
        };
        resultObj.personalInfo = personalInfo;
    })(age, weight, height);

   (function calculateBmi(weight, height) {
        let bmi = weight / (height/100)**2;
        resultObj.BMI = Number(bmi.toFixed());
    })(weight, height);

    (function getStatus(bmi) {
        let status;
        if (bmi < 18.5) {
            status = 'underweight';
        } else if(bmi < 25){
            status = 'normal';
        }else if(bmi < 30){
            status = 'overweight';
        }else {
            status = 'obese';
        }
        resultObj.status = status;

        if (status === 'obese') {
            resultObj.recommendation = 'admission required'
        }
    })(resultObj.BMI)
    return resultObj;
    

}
// console.log(personalBmi('Honey Boo Boo', 9, 57, 137));
var chart = personalBmi('Peter', 29, 75, 182);
console.log(chart.name)