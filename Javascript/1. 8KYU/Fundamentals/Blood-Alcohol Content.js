Blood-Alcohol Content

Alcohol consumed will be passed as a drinks object with two properties: ounces (the total volume of beverage consumed in ounces), and abv (the % of alcohol by volume of the beverage as a floating point number--such as 0.05 for 5% abv beer or 0.4 for 40% abv whisky). For simplicity, Bob assures us that he drinks the same kind of beverage each time he drinks.

function bloodAlcoholContent(drinks, weight, sex, time) {
  const r = sex === 'male' ? 0.73 : 0.66
  const bac = drinks.ounces * drinks.abv * 5.14 / weight * r - 0.015 * time;
  return Number(bac.toFixed(4));
}