function fetchNode(url, data) {

    return fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
}

{/* <div class="card">
            <p class="title"> <span>Lorem ipsum dolor</span></p>
            <p class="category"><span>Lorem ipsum dolor sit amet cvaa</span></p>
            <p class="location">location : <span>Lorem ipsum dol</span></p>
            <p class="min-sallary">min sallary : <span>2000$.</span></p>
            <p class="max-sallary"> max sallary : <span>2000$.</span></p>
            
            <a class="read">search more</a>
</div> */}

function generateJopCards(data, container) {
    container.textContent = ''
    if (data.results.length > 0) {
        data.results.forEach(job => {
            let div = createElement('div', 'card');
            let title = createElement('p', 'title');
            let location = createElement('p', 'location');
            location.textContent = "location : "
            let category = createElement('p', 'category');
            title.textContent = job.title;
            let locationSpan = createElement('span', '')
            locationSpan.textContent = job.location.display_name;
            location.appendChild(locationSpan)
            category.textContent = job.category.label;
            let min = createElement('p', 'min-sallary');
            min.textContent = "min sallary : "
            let max = createElement('p', 'max-sallary');
            max.textContent = "max sallary : "
            let minspan = createElement('span', '')
            minspan.textContent = job.salary_min;
            minspan.textContent += '$';
            let maxspan = createElement('span', '')
            maxspan.textContent = job.salary_max;
            maxspan.textContent += '$';
            let read = createElement('a', 'read');
            read.textContent = 'Apply';
            read.href = job.redirect_url;
            read.setAttribute('target', '_blank')
            min.appendChild(minspan)
            max.appendChild(maxspan)
            div.appendChild(title)
            div.appendChild(category)
            div.appendChild(location)
            div.appendChild(min)
            div.appendChild(max)
            div.appendChild(read)
            container.appendChild(div);
        });
        window.scroll(0, 500);
    }
    else {
        let emp = createElement('p', 'Empty')
        emp.textContent = "No Jobs Found 😶‍🌫️🤦‍♂️"
        container.appendChild(emp);
    }
}
function createElement(type, className) {

    let node = document.createElement(type);
    node.className = className;
    return node;

}