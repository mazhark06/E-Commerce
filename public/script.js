let data = document.getElementById('name')

CheckAuth()


async function CheckAuth(){    
    
         let token = localStorage.getItem("accessKey")
      try {
        let auth = await fetch("/api/profile",{
          method:'GET',
          headers:{
            Authorization : `Bearer ${token}`
          }
        });
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