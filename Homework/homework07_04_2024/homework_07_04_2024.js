console.log(
  "================================= homework 07.04.2024 ==============================="
);
function init() {
  const tableBody = document.getElementById("usersTable");
  draw(users, tableBody);

  const addNewUserButton = document.getElementById("addNewUser");
  addNewUserButton.addEventListener("click", function () {
    let firstNameInput = document.getElementById("firstName");
    let lastNameInput = document.getElementById("lastName");
    let emailInput = document.getElementById("email");
    let phoneInput = document.getElementById("phone");
    let ageInput = document.getElementById("age");
    let imgInput = document.getElementById("img");
    let genderInput = document.getElementById("gender");
    let countryInput = document.getElementById("country");

    const user = {
      name: { first: firstNameInput.value, last: lastNameInput.value },
      email: emailInput.value,
      phone: phoneInput.value,
      dob: { age: ageInput.value },
      login: {
        username: `${firstNameInput.value}${Math.ceil(Math.random() * 9999)}`,
      },
      picture: { large: imgInput.value },
      gender: genderInput.value,
      location: { country: countryInput.value },
    };
    users.push(user);
    draw(users, tableBody);
  });
}

function search() {
  const userTableBody = document.getElementById("usersTable");
  const input = document.getElementById("searchInput"); //[input = ELEMENT INPUT FROM DOM]
  const searchValue = input.value;
  const newusersArray = users.filter((user) =>
    user.name.first.toLowerCase().includes(searchValue.toLowerCase())
  );
  draw(newusersArray, userTableBody);
}

function clearusers() {
  document.getElementById("usersTable").innerHTML = "";
}

function draw(arrayOfUsers, tableBody) {
  tableBody.innerHTML = "";
  for (let index = 0; index < arrayOfUsers.length; index++) {
    tableBody.append(getUserRowUI(arrayOfUsers[index]));
  }
}

function getUserRowUI(user) {
  const tdId = document.createElement("td");
  tdId.innerText = user?.login?.username;

  const tdFirstName = document.createElement("td");
  tdFirstName.innerText = user?.name?.first;

  const tdLastName = document.createElement("td");
  tdLastName.innerText = user?.name?.last;

  const tdEmail = document.createElement("td");
  tdEmail.innerText = user?.email;

  const tdPhone = document.createElement("td");
  tdPhone.innerText = user?.phone;

  const tdAge = document.createElement("td");
  tdAge.innerText = user?.dob?.age;

  const tdGender = document.createElement("td");
  tdGender.innerText = user?.gender;

  const tdCountry = document.createElement("td");
  tdCountry.innerText = user?.location?.country;

  const tdImage = document.createElement("td");
  const imgUser = document.createElement("img");
  imgUser.classList.add("user-image");
  imgUser.src = user?.picture?.large;
  tdImage.append(imgUser);

  const trUser = document.createElement("tr");
  trUser.append(
    tdId,
    tdFirstName,
    tdLastName,
    tdEmail,
    tdPhone,
    tdCountry,
    tdAge,
    tdGender,
    tdImage
  );

  return trUser;
}

init();
