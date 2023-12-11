const information = document.getElementById("info");
information.innerHTML = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;
const func =  () => {
  const response =  window.versions.ping();
  console.log(response);
};

func();

const saveUser =  () => {
  const response = window.versions.createUser({
    name: username.value,
    email: email.value,
  });
  
  const responseList =  window.versions.listUsers();
  let strList = "";
  responseList.forEach(element => {
    strList += `<li>Nome: ${element.name} E-mail: ${element.email}</li>`;
  });
  listUsers.innerHTML = `<ul> ${strList} </ul>`;	
}

document.getElementById("btnSave").addEventListener('click', () => {
  saveUser();
});