const readline = require('readline-sync');

const BMI_MAX_AND_MIN = {
    'Underweight': {
      minBMI: 0,
      maxBMI: 18.4,
    },
    'Normal Weight': {
      minBMI: 18.5,
      maxBMI: 24.9,
    },
    'Overweight': {
      minBMI: 25,
      maxBMI: 29.9,
    },
    'Obese Class I': {
      minBMI: 30.0,
      maxBMI: 34.9,
    },
    'Obese Class II': {
      minBMI: 35,
      maxBMI: 39.9,
    },
    'Obese Class III': {
      minBMI: 40,
      maxBMI: 100,
    },
  };

  function handleBMIResult(bmi) {
    const statuses = Object.keys(BMI_MAX_AND_MIN); 
  
    const resultFind = statuses.find((status) => {
      const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status]; 
  
    
      return bmi >= minBMI && bmi <= maxBMI;
    });
  
    return resultFind;
  }

function handleBMI(weight, height) {
  console.log(`Weight: ${weight}, Height: ${height}`);

  const heightInMeters = height / 100;
  const heightSquared = heightInMeters ** 2;

  const bmi = weight / heightSquared;

  return bmi;
}

function main() {
    const weight = readline.questionFloat('What\'s your weight? (kg) ');
    const height = readline.questionInt('What\'s your height? (cm) ');
 
    const bmi = handleBMI(weight, height);
    const bmiResult = handleBMIResult(bmi);

  console.log(bmiResult);
}

main();