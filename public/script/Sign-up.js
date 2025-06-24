let password = document.querySelector('#password')
let cpassword = document.querySelector('#confirm_password')
let Email = document.querySelector('#Email')
let name = document.querySelector('#name')
let btn = document.querySelector('#Login')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


async function fetchdata() {
    let Emailtrue = emailRegex.test(Email.value)
    // console.log(Emailtrue);
    
    let message = document.querySelector('.message')
if (name.value==="" || password.value ==="" || !Emailtrue) {
    message.innerHTML = "PLease Enter your Credentials!"
}
  else{
    let check = password.value === cpassword.value
    if (!check) {
        message.innerHTML =`Please check Password`
    } else {
        try {
            let res = await fetch('/signup', {
            method: 'POST',
            headers:{
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({Username : name.value, Email : Email.value , Password : password.value })
        })
        
        let credentials = await res.json()
        console.log(credentials );
        
        if(credentials.success){
            localStorage.setItem('accessKey' , credentials.AccessToken)
        window.location.href =  credentials.redirect
        }else{
        message.innerHTML = `${credentials.message}`
        }
        
        
        } catch (error) {
            console.error("fetch error in data sending" , error)
            message.innerHTML = `${credentials}`
        }
          
    }

}


}
