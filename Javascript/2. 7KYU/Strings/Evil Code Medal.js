Simple Fun #270: Evil Code Medal

EvilCode is a game similar to Codewars. You have to solve programming tasks as quickly as possible. However, unlike Codewars, EvilCode awards you with a medal, depending on the time you took to solve the task.

To get a medal, your time must be (strictly) inferior to the time corresponding to the medal. You can be awarded "Gold", "Silver" or "Bronze" medal, or "None" medal at all. Only one medal (the best achieved) is awarded.

You are given the time achieved for the task and the time corresponding to each medal. Your task is to return the awarded medal.

Each time is given in the format HH:MM:SS.

function evilCodeMedal(userTime, gold, silver, bronze) {
  if(userTime < gold) return "Gold";
  if(userTime < silver) return "Silver";
  if(userTime < bronze) return "Bronze";
  return "None";
}