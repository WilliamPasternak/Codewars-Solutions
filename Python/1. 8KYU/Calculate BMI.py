Calculate BMI

Write function bmi that calculates body mass index (bmi = weight / height2).
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"

def bmi(weight, height):
    calculated_bmi = (weight / height**2)
    if calculated_bmi <= 18.5:
        return 'Underweight'    
    elif calculated_bmi <= 25:
        return 'Normal'
    elif calculated_bmi <= 30:
        return 'Overweight'
    else:
        return 'Obese'