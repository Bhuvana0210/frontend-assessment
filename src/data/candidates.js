// Simple mock data without faker
// Creates 300–500 candidates with realistic structure

const stages = ["Applied", "Screening", "Interview", "Offer", "Hired"];
const companies = ["Google", "Microsoft", "Amazon", "StartupX", "Infosys"];
const jobs = ["Frontend Developer", "Backend Developer", "QA Engineer", "Designer", "PM"];

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const candidates = Array.from({ length: 300 }).map((_, i) => ({
  id: i + 1,
  name: `Candidate ${i + 1}`,
  email: `candidate${i + 1}@mail.com`,
  phone: `98765${randomNumber(10000, 99999)}`,
  jobs: [randomItem(jobs), ...(Math.random() > 0.7 ? [randomItem(jobs)] : [])],
  education: [
    `${randomItem(["B.Tech", "B.Sc", "MCA", "MBA"])} — ${randomItem(["2021", "2022", "2023"])}`
  ],
  company: randomItem(companies),
  stage: randomItem(stages),
  appliedDate: `2025-0${randomNumber(1, 9)}-${randomNumber(10, 28)}`,
  expectedSalary: randomNumber(3, 20) * 100000,
}));

