function fetchNode(url,data) {

    return fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
}
fetchNode('/search',{q:'game of thrones'})
.then(data=>data.json())
.then(data=>fun(data))
const fun =(data)=>{
    let body=document.querySelector('body');
    body.innerHTML=JSON.stringify(data);
}
