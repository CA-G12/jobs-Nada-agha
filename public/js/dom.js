let btn =document.querySelector('button');
let input = document.querySelector('input')
btn.addEventListener('click',(e)=>{
    fetchNode('/search',{q:input.value}).then((data)=>{
        if(data.status==500){
            window.location.href='../errors/500.html'
        }
        else{
            data.json().then(console.log)
        }
    });
})