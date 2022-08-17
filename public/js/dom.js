let btn =document.querySelector('button');
let input = document.querySelector('input')
let jobsContainer=document.querySelector('.static-jobs')
btn.addEventListener('click',(e)=>{
    fetchNode('/search',{q:input.value}).then((data)=>{
        if(data.status==500){
            window.location.href='../errors/500.html'
        }
        else{
            data.json().then(data=>generateJopCards(data,jobsContainer))
        }
    });
})