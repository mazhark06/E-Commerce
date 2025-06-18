let data = document.getElementById('name')

async function submit(event) {
    let test = { product: data.value };
    try {
        const res = await fetch('http://localhost:4000/api', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(test)
        });
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log("Something Went Wrong!!");
    }
}
