let username = document.getElementById("name");
let password = document.getElementById("password");
let btn = document.querySelector("#Login");
let message = document.querySelector(".message");

async function fetchdata() {
  if (username.value === "" || password.value === "") {
    message.innerHTML = `Please Enter your Credentials`;
  } else {
    try {
      let res = await fetch(`/login/${username.value}/${password.value}`);
      let credentials = await res.json();
      console.log(credentials);
      message.innerHTML = `${credentials.message}`;
      if (credentials.success) {
        localStorage.setItem("accessToken", credentials.accessToken);
        window.location.href = credentials.redirect;
      }
    } catch (error) {
      console.error("fetch error in data sending", error);
      message.innerHTML = `Something went wrong in Data send`;
    }
  }
}

async function CheckAuth() {
  let token = localStorage.getItem("accessToken");
  if (!token) return ;

  try {
    let auth = await fetch("/api/profile");
    console.log("Authorization :", auth.status);
    let response = await auth.json();

    if (auth.status == 402 || auth.status == 401) {
      if (window.location.pathname !== "/login")
        return (window.location.href = "/login");
    } else if (response.message === "Authorized") {
      return (window.location.href = "/");
    }

    console.log(response);
  } catch (error) {
    console.error("fetch error in Auth", error);
  }
}
CheckAuth();
