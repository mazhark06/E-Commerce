let username = document.getElementById("name");
let password = document.getElementById("password");
let btn = document.querySelector("#Login");
let message = document.querySelector(".message");

async function fetchdata() {
if (username.value === "" || password.value === "") {

  message.innerHTML = `Please Enter your Credentials`

}else{

  try {
    let res = await fetch(`/login/${username.value}/${password.value}`);
    let credentials = await res.json();
    console.log(credentials);
    message.innerHTML = `${credentials.message}`;
    if (credentials.success) {
      window.location.href = credentials.redirect;
    }

  } catch (error) {
    console.error("fetch error in data sending", error);
    message.innerHTML = `Something went wrong in Data send`
  }
}
}

