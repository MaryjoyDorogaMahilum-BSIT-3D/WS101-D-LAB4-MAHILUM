const API_URL = 'http://localhost:8080/api/users';

const form = document.getElementById('itemForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const idInput = document.getElementById('itemId');
const dataBody = document.getElementById('dataBody');

async function fetchData() {
  const res = await fetch(API_URL);
  const data = await res.json();
  renderTable(data);
}

function renderTable(data) {
  dataBody.innerHTML = '';
  data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.age}</td>
      <td class="actions">
        <button onclick="editItem(${item.id}, '${item.name}', ${item.age})">Edit</button>
        <button onclick="deleteItem(${item.id})">Delete</button>
      </td>
    `;
    dataBody.appendChild(row);
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = idInput.value;
  const user = {
    name: nameInput.value,
    age: parseInt(ageInput.value)
  };

  if (id) {
    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
  } else {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
  }

  form.reset();
  idInput.value = '';
  fetchData();
});

function editItem(id, name, age) {
  idInput.value = id;
  nameInput.value = name;
  ageInput.value = age;
}

async function deleteItem(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  fetchData();
}

fetchData();