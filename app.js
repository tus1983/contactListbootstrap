//day3 -- Todo list
var nameArray = ['Lena Do', 'Dan Do'];
var phoneArray = ['206-407-5790', '206-234-2342'];
var emailArray = ['tus1983@gmail.com', 'dhdo19@gmail.com'];
var groupArray = ['Family', 'Family'];
var nametray = document.getElementById("nameBox");
var phonetray = document.getElementById("phoneBox");
var emailtray = document.getElementById("emailBox");
var grouptray = document.getElementById("groupBox");

phonetray.addEventListener('keypress', enterPress);
emailtray.addEventListener('keypress', enterPress);
grouptray.addEventListener('keypress', enterPress);

function enterPress(e){
  if(e.keyCode == 13) {
    addContact();
  }
}

//Create
function addContact(){
  var newNameAdd = nametray.value
  var newPhoneAdd = phonetray.value;
  var newEmailAdd = emailtray.value;
  var newGroupAdd = grouptray.value;
  nameArray.push(newNameAdd);
  phoneArray.push(newPhoneAdd);
  emailArray.push(newEmailAdd);
  groupArray.push(newGroupAdd);
  display();
  clearBox();
}

//Read
function display() {
  //h will act as a temporary string holder
  var h = '';
  //Loop throuth array to create table row and table column dynamically
  for (var i = 0; i < nameArray.length; i++) {
    h += `<tr>`;
    h += `<td>${nameArray[i]}</td>`;
    h += `<td>${phoneArray[i]}</td>`;
    h += `<td>${emailArray[i]}</td>`;
    h += `<td>${groupArray[i]}</td>`;
    h += `<td><button class="btn btn-success btn-xs" onclick="updateTask(${i})">Edit</button><button class="btn btn-danger btn-xs" onclick="deleteTask(${i})">Delete</button></td>`;
    h += `</tr>`;
  }
  document.getElementById('contactList').innerHTML = h;
}
//Update
function updateTask(i){
  var nameUpdate = nametray.value;
  var phoneUpdate = phonetray.value;
  var emailUpdate = emailtray.value;
  var groupUpdate = grouptray.value;
  nameArray[i] = nameUpdate;
  phoneArray[i] = phoneUpdate;
  emailArray[i] = emailUpdate;
  groupArray[i] = groupUpdate;
  display();
  clearBox();
}

//Delete
function deleteTask(i){
  nameArray.splice(i, 1);
  phoneArray.splice(i, 1);
  emailArray.splice(i, 1);
  groupArray.splice(i, 1);
  display();
}

//other functions
function clearBox(){
  nametray.value = '';
  phonetray.value = '';
  emailtray.value = '';
  grouptray.value = '';
}
//Execute
display();

//homework = contact list with full 크러드??
