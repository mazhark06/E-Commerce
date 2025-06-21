let password = document.querySelector('#password')
let cpassword = document.querySelector('#confirm_password')
let Email = document.querySelector('#Email')
let name = document.querySelector('#name')
let btn = document.querySelector('#Login')

btn.addEventListener('click', function(e){
    e.preventDefault()
    fetchdata()
})
async function fetchdata() {
    let message = document.querySelector('.message')

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
   if(credentials.success){
    window.location.href =  credentials.redirect
   }
    
        // message.innerHTML = `${credentials}`
        
        } catch (error) {
            console.error("fetch error in data sending" , error)
        }
          
}

}
