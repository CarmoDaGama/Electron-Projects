const information = document.getElementById("info");
information.innerHTML = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;
const func =  () => {
  const response =  window.versions.ping().then((val) => {    
    console.log(val);
  });
};


const saveUser =  async () => {
  window.versions
    .createUser({
      name: username.value,
      email: email.value,
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("ERROR: ");
      console.log(error);
    });
  
  await loadList();
}
async function loadList(){
  
  window.versions
    .listUsers()
    .then((data) => {
      let strList = "";
      console.log(data);
      data.forEach((element) => {
        strList += `<li>Nome: ${element.name} E-mail: ${element.email}</li>`;
      });
      listUsers.innerHTML = `<ul> ${strList} </ul>`;	
    })
    .catch((error) => {
      console.log("ERROR: ");
      console.log(error);
    })
}
document.getElementById("btnSave").addEventListener('click', async () => {
  await saveUser();
});
loadList();