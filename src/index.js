document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript loaded.DOM is ready");
  // Select elements from the DOM
  const form = document.getElementById('guest-form');
  const input = document.getElementById('guest-name');
  const guestList = document.getElementById('guest-list');

  // Handle form submission
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page from reloading (required for full marks)
    console.log("Form submitted");

    const name = input.value.trim(); // Get and trim input
    console.log("user entered", name);

    if (name === '') {
        console.log("No name entered. Skip");
        return;
    }
     // Check the number of guests already in the list
    console.log("Current number of guests:", guestList.children.length);


    // Limit guest list to 10
    if (guestList.children.length >= 10) {
      alert('Maximum 10 guests allowed!');
      console.log('Maximum number of guests exceeded');
      return;
    }

    // Create list item for new guest
    const li = document.createElement('li');
    console.log(`${name} was added to the list.`);


    // Create a <span> to hold the guest name
    const nameSpan = document.createElement('span');
    nameSpan.textContent = name;
    li.appendChild(nameSpan);

    //Create a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      guestList.removeChild(li); // Remove guest from list
      console.log(`${name} was removed from the list.`);
    });
    li.appendChild(removeBtn);

    // RSVP TOGGLE BUTTON 
    const rsvpBtn = document.createElement('button');
    rsvpBtn.textContent = 'RSVP: Not Attending';
    rsvpBtn.addEventListener('click', () => {
      if (rsvpBtn.textContent.includes('Not')) {
        rsvpBtn.textContent = 'RSVP: Attending';
        rsvpBtn.style.color = 'green';
      } else {
        rsvpBtn.textContent = 'RSVP: Not Attending';
        rsvpBtn.style.color = 'red';
      }
      console.log(`${name}'s RSVP status changed to: ${rsvpBtn.textContent}`);
    });
    li.appendChild(rsvpBtn);


    // Add <li> to the guest list
    guestList.appendChild(li);
    console.log(`${name} was added to the list.`);

    // Clear input for the next guest
    input.value = '';
  });
});
