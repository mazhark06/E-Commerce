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
      localStorage.setItem("accessKey", credentials.accesToken);
      message.innerHTML = `${credentials.message}`;
      if (credentials.success) {
        
        window.location.href = credentials.redirect;
      }
         } catch (error) {
      console.error("fetch error in data sending", error);
      message.innerHTML = `Something went wrong in Data send`;
    }
  }
}

  async function CheckAuth(){    
    
         let token = localStorage.getItem("accessKey")
         if (!token) return console.log('Token Not Provided');
         
          
         
      try {
        let auth = await fetch("/api/profile",{
          method:'GET',
          headers:{
            Authorization : `Bearer ${token}`
          }
        });
        console.log("Authorization :" ,  auth.status );
        let response = await auth.json();
        
        if(auth.status == 402 || auth.status == 401){ 
 if (window.location.pathname !== '/login') return window.location.href = '/login'
        }else if (response.message === "Authorized"){
    return window.location.href= '/'
        }

        
        
console.log(response);

         


      } catch (error) {
        console.error("fetch error in Auth", error);
      }
}
CheckAuth()