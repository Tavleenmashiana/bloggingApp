
const xhr = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/posts'

xhr.open('GET', url)

xhr.onreadystatechange =() => {
    if(xhr.status === 200 && xhr.readyState === 4) {
        const response = JSON.parse(xhr.responseText)
        console.log(response)

     
    let template = '';
    for(let i=0; i<response.length; i++) {
         template +=`        
         <div class="content">
            <h2 class="card-header">${response[i].title}</h2>
            <div class="card-body">
               
                <p class="card-text">${response[i].body}</p>
            </div>
        </div>`
    }
    document.querySelector('#mycontainer').innerHTML = template;
}
};
xhr.send()

document.getElementById("submits").addEventListener("click",(e)=>{
    e.preventDefault()
    const val=`
    <div class="content">
    <h2 class="card-header">${document.getElementById("email").value}</h2>
    <div class="card-body">
        <p class="card-text">${document.getElementById("messages").value}</p>
    </div>
</div>
    `
    document.querySelector('#mycontainer').innerHTML += val
})
