// Task 1: Personal Info Object
const userProfile = {
  name: "Isatay",
  birthYear: 2008,
  isDeveloper: true,
  hobbies: ["Coding", "Gaming", "Gym"]
};

// DOM Elements
const profileDisplay = document.getElementById("profile-display");
const profileForm = document.getElementById("profile-form");
const usernameInput = document.getElementById("username");
const birthYearInput = document.getElementById("birth-year");

const itemsList = document.getElementById("items-list");
const itemInput = document.getElementById("item-input");
const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");

// Task 2: Arithmetic Calculations
function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

function calculateAgeInMonths(age) {
  return age * 12;
}

// Display Profile on the page
function renderProfile() {
  const age = calculateAge(userProfile.birthYear);
  const months = calculateAgeInMonths(age);

  profileDisplay.innerHTML = `
    <p><strong>Name:</strong> ${userProfile.name}</p>
    <p><strong>Birth Year:</strong> ${userProfile.birthYear} (Age: ${age} years / ~${months} months)</p>
    <p><strong>Status:</strong> ${userProfile.isDeveloper ? "Developer" : "Student"}</p>
    <p><strong>Total Hobbies:</strong> ${userProfile.hobbies.length}</p>
  `;

  // Pre-fill input fields with current profile data
  usernameInput.value = userProfile.name;
  birthYearInput.value = userProfile.birthYear;
}

// Render initial hobbies list
function renderList() {
  itemsList.innerHTML = "";
  userProfile.hobbies.forEach(hobby => {
    const li = document.createElement("li");
    li.textContent = hobby;
    itemsList.appendChild(li);
  });
}

// Task 4: Form Submit Event Listener
profileForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newName = usernameInput.value.trim();
  const newBirthYear = parseInt(birthYearInput.value, 10);

  if (newName && !isNaN(newBirthYear)) {
    userProfile.name = newName;
    userProfile.birthYear = newBirthYear;

    renderProfile();
    console.log("Updated userProfile:", userProfile);
  }
});

// Task 5: Add New Item to List
addBtn.addEventListener("click", () => {
  const newItemText = itemInput.value.trim();

  if (newItemText !== "") {
    // Update state object
    userProfile.hobbies.push(newItemText);

    // Create and append DOM element
    const li = document.createElement("li");
    li.textContent = newItemText;
    itemsList.appendChild(li);

    // Reset input field and update profile counter
    itemInput.value = "";
    renderProfile();
    console.log("Added item. Current hobbies:", userProfile.hobbies);
  }
});

// Task 5: Remove Last Item from List
removeBtn.addEventListener("click", () => {
  const lastChild = itemsList.lastElementChild;

  if (lastChild) {
    itemsList.removeChild(lastChild);
    userProfile.hobbies.pop();

    renderProfile();
    console.log("Removed last item. Current hobbies:", userProfile.hobbies);
  }
});

// Initial Setup
renderProfile();
renderList();