// =======================
// Bridie Maugham Dibora JS Assignment
// =======================

// ----- PART 1: VARIABLES, INPUT & CONDITIONALS -----
const greetBtn = document.getElementById('greetBtn');
const nameInput = document.getElementById('nameInput');
const greeting = document.getElementById('greeting');

greetBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name) {
    greeting.textContent = `Hello, ${name}! Welcome to Bridie’s JavaScript demo page.`;
  } else {
    greeting.textContent = "Please type your name first!";
  }
});

// ----- PART 2: FUNCTIONS -----
function createListItem(content) {
  const li = document.createElement('li');
  li.textContent = content;
  return li;
}

function toggleElementVisibility(element) {
  element.style.display = element.style.display === 'none' ? 'block' : 'none';
}

// ----- PART 3: LOOPS -----
const generateListBtn = document.getElementById('generateListBtn');
const skillsList = document.getElementById('skillsList');
const skills = ["Marketing Strategy", "Content Creation", "Brand Design", "UI/UX", "JavaScript Coding"];

generateListBtn.addEventListener('click', () => {
  skillsList.innerHTML = ''; // Clear previous list
  for (let skill of skills) {
    skillsList.appendChild(createListItem(skill));
  }
});

// ----- PART 4: DOM INTERACTIONS -----
const toggleBtn = document.getElementById('toggleBtn');
const toggleMessage = document.getElementById('toggleMessage');

toggleBtn.addEventListener('click', () => {
  toggleElementVisibility(toggleMessage);
});
