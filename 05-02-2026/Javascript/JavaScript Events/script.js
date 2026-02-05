const form = document.getElementById("form");
const tableBody = document.querySelector("#dataTable tbody");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const language = document.getElementById("lang").value;

  if (!gender) {
    alert("Please select gender");
    return;
  }
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${gender.value}</td>
    <td>${language}</td>
  `;
  tableBody.appendChild(newRow);
  form.reset();
});
