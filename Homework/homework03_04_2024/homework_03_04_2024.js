console.log("============================Homework april 03");

function init() {
  const usersListDiv = document.getElementById("usersList"); // create the users list container
  usersListDiv.style.border = "1px solid black";
  usersListDiv.style.background = "pink";
  usersListDiv.style.textAlign = "center";
  draw(users);
}
function search() {
  const input = document.getElementById("searchInput"); //[input = ELEMENT INPUT FROM DOM]
  const searchValue = input.value;
  const newusersArray = users.filter(
    (user) => user.name.first.toLowerCase().includes(searchValue.toLowerCase())
    // user.name.title.first.last.toLowerCase().includes(searchValue.toLowerCase())
  );
  draw(newusersArray);
}
function clearusers() {
  //  reminder make it work
  // const htmlCollectionusers = document.getElementById("usersList").children
  // document.getElementById("usersList").children.for
  // for (let index = 0; index < htmlCollectionusers.length; index++) {
  //     htmlCollectionusers[index].remove()
  // }
  document.getElementById("usersList").innerHTML = "";
}
function draw(usersData) {
  clearusers();
  const uiusers = usersData.map((user) => getSingleuserUI(user));
  document.getElementById("usersList").append(...uiusers);
  // for (let index = 0; index < usersData.length; index++) {
  //     const currentuserUI = getSingleuserUI(usersData[index])
  //     document.getElementById("usersList").append(currentuserUI)
  // }
  updateSelectedusers(usersData.filter((user) => user.isSelected === true));
  updateTotalResult(usersData.length);
}
function updateTotalResult(lengthOfusers) {
  document.getElementById(
    "totalResult"
  ).innerHTML = `${lengthOfusers}/${users.length}`;
}
function updateSelectedusers(arrayOfSelectedusers) {
  const selectedusersContainer = document.getElementById("selectedusersNumber");
  selectedusersContainer.innerText = arrayOfSelectedusers.length;
}
function getSingleuserUI(userData) {
  if (typeof userData !== "object") return;
  const userContainerDiv = document.createElement("div"); // create the single user container
  const id = `${userData.name.first.toLowerCase().replaceAll(" ", "-")}`;
  userContainerDiv.id = id;
  userContainerDiv.className = "user-card";
  // const userTitleH3 = document.createElement("h3"); // create header for title
  // userTitleH3.innerText = `${userData.name.firs}-${userData.name.last}; // insert the name from the Data into UI

  const userTitleH4 = document.createElement("h4"); // create header for name
  userTitleH4.innerText =
    "Name of user: " +
    userData.name.first +
    " " +
    userData.name.last +
    " , email: " +
    userData.email +
    " " +
    userData.picture +
    " , age: " +
    userData.dob.age +
    " , gender : " +
    userData.gender;
  userTitleH4.style.background = "green";

  // in the draw section, create a userCard- user name, email, image, age, gender,
  // advanced: search users

  // name: { title: "Mr", first: "سهیل", last: "کوتی" },
  //   location: {
  //     street: { number: 2478, name: "برادران سلیمانی" },
  //     city: "شیراز",
  //     state: "مرکزی",
  //     country: "Iran",
  //     postcode: 36284,
  //     coordinates: { latitude: "13.9190", longitude: "-131.3354" },
  //     timezone: { offset: "+7:00", description: "Bangkok, Hanoi, Jakarta" },
  //   },
  //   email: "shyl.khwty@example.com",
  //   login: {
  //     uuid: "7ed329a4-7485-469e-a9d1-89b650c3be41",
  //     username: "smallbird589",
  //     password: "message",
  //     salt: "DrIvzL3l",
  //     md5: "dc4b5f54261b63d2918b77b4d36f202a",
  //     sha1: "1d3076d09f856ba118bd25abe144035f306c2c4c",
  //     sha256:
  //       "1ea8be106847c0b8380278c7ded46313962243060c5361ee7224369005dfe9e5",
  //   },
  //   dob: { date: "1977-04-10T23:25:12.818Z", age: 46 },
  //   registered: { date: "2016-11-24T01:29:18.650Z", age: 7 },
  //   phone: "030-72793002",
  //   cell: "0934-839-9910",
  //   id: { name: "", value: null },
  //   picture: {
  //     large: "https://randomuser.me/api/portraits/men/40.jpg",
  //     medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  //     thumbnail: "https://randomuser.me/api/portraits/thumb/men/40.jpg",
  //   },
  //   nat: "IR",
  // },
  // {

  const button = document.createElement("button");
  button.classList.add("btn", "btn-primary");
  if (userData.isSelected === true) {
    button.innerText = "UnSelect";
    userContainerDiv.style.background = "yellow";
  } else {
    button.innerText = "Select";
    userContainerDiv.style.background = "pink";
  }
  button.addEventListener("click", function () {
    if (userData.isSelected === true) {
      userData.isSelected = false;
    } else {
      userData.isSelected = true;
    }
    draw(users);
  });

  const buttonDelete = document.createElement("button");
  buttonDelete.classList.add("btn", "btn-danger");
  buttonDelete.innerText = "🗑️";
  buttonDelete.addEventListener("click", function () {
    const foundIndex = users.findIndex(
      (user) => user.name.first.last.toLowerCase().replaceAll(" ", "-") === id
    );
    if (foundIndex > -1) {
      users.splice(foundIndex, 1);
    }
    draw(users);
  });

  userContainerDiv.append(
    // userTitleH3,
    userTitleH4,
    button,
    buttonDelete
  );
  return userContainerDiv;
}

init();
