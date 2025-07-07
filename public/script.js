

let accountIcon = document.querySelector('.account')
let data = document.getElementById('name')

CheckAuth()


async function CheckAuth(){    
  let token = localStorage.getItem("accessToken")
      if (!token) return window.location.href='/login'
      try {
        let auth = await fetch("/api/profile",{
          method:'GET',
          headers:{
            Authorization : `Bearer ${token}`,
          }
        });
        console.log("Authorization :" ,  auth.status );

        if(auth.status == 402 || auth.status == 401){
          window.location.href = '/login'
          return
        }
        let response = await auth.json();
console.log(response);



      } catch (error) {
        console.error("fetch error in Auth", error);
      }

}
 async function Logout(){
  console.log("Running");
  let token = localStorage.getItem('accessToken')
  let res = await fetch('/logout',{
    method:'GET',
    headers : {
      Authorization : `Bearer ${token}`
    }
  })
  let response = await res.json()
  console.log(response);
  
  localStorage.clear('accessToken')
  if (response.success) return window.location.href = response.redirect
}



