var height0, weight0, error, bmi, underWeight,normal,overweight,fat, measure, error;
function calculation(){
    underWeight="SOME HELTH TIPS FOR YOU: Eat regular meals. Healthy snacks: Dried fruits, Nuts, Butter. Calorie-rise food: Rice, Meat, Fish, Potatoes. Track your calories."
    normal="SOME HELTH TIPS FOR YOU: Eat regular meals. Exercise daily 30/50 minutes. Drink water and eat healthy food. Track your calories."
    overweight="SOME HELTH TIPS ROR YOU: You have to join a GYM immediately. Take the stairs not Lift. Don't eat late at night. Fix your sleeping and working times. Don't just sit in your office. Maximize your workout. Track your BMI regularly."
    fat="SOME TIPS YOU CAN FOLLOW: You have to join a GYM immediately. Don't just sit in your office. Maximize your workout. Follow your Doctor's prescription."
    weight0= document.getElementById("weight").value;
    height0= document.getElementById("height").value;
    error="You should consult a psychiatrist!!";
    bmi= weight0/(height0*height0);
    bmi=bmi.toFixed(1);

    if(bmi<=18.8){
        measure=`Your BMI is: ${bmi} which means you are Underweight.`;
    }
    else if(bmi >= 18.5 && bmi <=24.9){
        measure=`Your BMI is: ${bmi} which means you are Normal.`;

    }
    else if(bmi >= 25 && bmi <=29.9){
        measure=`Your BMI is: ${bmi} which means you are Overweight.`;
    }
    else if(bmi >= 30){
        measure=`Your BMI is: ${bmi} you have to consult a Doctor.`;
    }
    if (weight0 <=0 || height0 <=0 ){
        document.getElementById("results").innerHTML=error;
    }
    else{
        document.getElementById("results").innerHTML=measure;
    }
    if (bmi<=18.8){
        document.getElementById("hTips").innerHTML= underWeight;
    }
    else if(bmi >= 18.5 && bmi <=24.9){
        document.getElementById("hTips").innerHTML=normal;
    }
    else if (bmi >= 25 && bmi <=29.9){
        document.getElementById("hTips").innerHTML=overweight;
    }
    else if(bmi >= 30){
        document.getElementById("hTips").innerHTML=fat;
    }
}