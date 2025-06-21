let username = document.getElementById("name")
let password = document.getElementById('password')
let btn = document.getElementById('Login')

btn.addEventListener('click', function(e){
    e.preventDefault()
    fetchdata()
})
async function fetchdata() {

   
        try {
            let res = await fetch(`/login/${username.value}/${password.value}`)
        let credentials = await res.json()
        console.log(credentials);
        
        } catch (error) {
            console.error("fetch error in data sending" , error)
        }
          
}


