Job Matching #1

Let's give this a try. We'll create a function match (job_matching in Python) which takes a candidate and a job, which will return a Boolean indicating whether the job is a valid match for the candidate.

function match(candidate, job) {  
  // If either the candidate's min salary or job's max salary is not present, throw an error.
  if(!candidate.minSalary || !job.maxSalary) throw new Error ('Missing parameter')
  // Valid Match: Candidates min salary must be <= job's max salary. 
  return candidate.minSalary * 0.9 <= job.maxSalary
}