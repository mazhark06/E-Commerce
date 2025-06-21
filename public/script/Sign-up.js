let password = document.querySelector('#password')
let cpassword = document.querySelector('#confirm_password')
let Email = document.querySelector('#Email')
let name = document.querySelector('#name')
let btn = document.querySelector('#Login')


async function fetchdata() {

    let check = password.value === cpassword.value
    if (!check) {
        let message = document.querySelector('.message')
        message.innerHTML =`Please check Password`
        alert("please enter same password")
    } else {
          let res = await fetch('/signup', {
            method: 'POST',
            headers:{
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({Username : name.value, Email : Email.value , Password : password.value })
        })
}

}
