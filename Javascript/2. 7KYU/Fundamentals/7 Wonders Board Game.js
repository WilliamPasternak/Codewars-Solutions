Count up the points for the 7 Wonders board game!

Write a function that returns a users total score based on the following rules:
Each distinct set of three different glyphs is worth 7 points:
The amount of each glyph you own is squared and then summed up:
The total science points is equal to the sum of the two steps:


function solve(compasses, gears, tablets) {
  //  Give a 7pt bonus for each unique set
  const maxNumBonus = Math.min(compasses, gears, tablets);
  let points = maxNumBonus * 7;

  // Give points for each glyph found (squared)
  const [compassPoints, gearPoints, tabletPoints] = [compasses ** 2, gears ** 2, tablets ** 2];
  points += compassPoints + gearPoints + tabletPoints;

  return points;
}
