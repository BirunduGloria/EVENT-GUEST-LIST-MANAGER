document.addEventListener('DOMContentLoaded', () => {
  console.log(" DOM is fully loaded");

  //input elements
  const form = document.getElementById('guest-form');
  const input = document.getElementById('guest-name');
  const categorySelect = document.getElementById('guest-category');
  const guestList = document.getElementById('guest-list');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    console.log("Form submitted");

    const name = input.value.trim();
    const category = categorySelect.value;

    if (!name) {
      alert("Please enter a guest name.");
      console.log("Guest Name missing!.");
      return;
    }

    if (!category) {
      alert("Please select a guest category.");
      console.log("Category not selected.");
      return;
    }

    if (guestList.children.length >= 10) {
      alert("Limit exceeded! Only 10 guests allowed.");
      console.log("Guest limit reached.");
      return;
    }

    // Create list item for guest
    const li = document.createElement('li');

    // Guest name
    const nameSpan = document.createElement('span');
    nameSpan.textContent = name;
    li.appendChild(nameSpan);

    // Category tag
    const categoryTag = document.createElement('span');
    categoryTag.textContent = ` (${category})`;
    categoryTag.className = `category ${category.toLowerCase()}`;
    li.appendChild(categoryTag);

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      const newName = prompt("Edit guest name:", nameSpan.textContent);
      if (newName && newName.trim()) {
        nameSpan.textContent = newName.trim();
        console.log(`Name changed to: ${newName}`);
      } else {
        console.log(" Edit cancelled.");
      }
    });
    li.appendChild(editBtn);

    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      guestList.removeChild(li);
      console.log(`Guest removed: ${name}`);
    });
    li.appendChild(removeBtn);

    // RSVP button
    const rsvpBtn = document.createElement('button');
    rsvpBtn.textContent = 'RSVP: Not Attending';
    rsvpBtn.style.color = 'red';
    rsvpBtn.addEventListener('click', () => {
      const isAttending = rsvpBtn.textContent.includes('Not');
      rsvpBtn.textContent = isAttending ? 'RSVP: Attending' : 'RSVP: Not Attending';
      rsvpBtn.style.color = isAttending ? 'green' : 'red';
      console.log(`${name}'s RSVP updated: ${rsvpBtn.textContent}`);
    });
    li.appendChild(rsvpBtn);

    // Add guest to list
    guestList.appendChild(li);
    console.log(`Guest added: ${name} (${category})`);

    // Reset form
    input.value = '';
    categorySelect.selectedIndex = 0;
  });
});
