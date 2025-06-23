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
        window.location.href = credentials.redirect;
      }
  localStorage.setItem("accessKey", credentials.accesToken);
         } catch (error) {
      console.error("fetch error in data sending", error);
      message.innerHTML = `Something went wrong in Data send`;
    }
  }
}

  async function CheckAuth(){    
    
         let token = localStorage.getItem("accessKey")
      try {
        let auth = await fetch("/api/profile",{
          method:'GET',
          headers:{
            Authorization : `Bearer ${token}`
          }
        });
        console.log("Authorization :" ,  auth.status);
        
        if(auth.status == 402 || auth.status == 401){
          window.location.href = '/'
          return
        }

        
        
        let response = await auth.json();
console.log(response);

           window.location.href= '/'


      } catch (error) {
        console.error("fetch error in Auth", error);
      }
}
CheckAuth()