let data = document.getElementById('name')

async function submit(){    
    try {
        let res =await fetch('/check')
        let authenticate = await res.json()

    } catch (error) {
        console.error('ERROR in Checking');
        
    }

}