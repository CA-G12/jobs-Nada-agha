let btn =document.querySelector('button');
let input = document.querySelector('input')
btn.addEventListener('click',(e)=>{
    fetchNode('/search',{q:input.value}).then(data=>data.json()).then(console.log);
})