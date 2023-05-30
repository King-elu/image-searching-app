const accessKey = "RzTag-BNTbal3xO8CqxGVFd8GWRytgehxuphP0uOpC4"
const formEl =document.querySelector("form")
const input = document.getElementById("searcher")
const search = document.getElementById("btn")
const showMore = document.getElementById("more")
const results = document.querySelector(".results")
let inputDATA = ""
let page = 1

 async function searchImages(){
    inputDATA = input.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputDATA}&client_id=${accessKey}`
    console.log(url)
    const  response = await fetch(url);
    const data = await response.json()
    console.log(data)
    if(page === 1){
        results.innerHTML =""
    }

    const outcomes = data.results;
    outcomes.map((outcome)=>{
        const wrapper = document.createElement("div")
    wrapper.classList.add("card")
    const image = document.createElement("img")
    image.src = outcome.urls.small
    image.alt=outcome.alt_description
    const about = document.createElement("a")
    about.href=outcome.links.html
    about.target="_blank"
     about.textContent=outcome.alt_description

     wrapper.appendChild(image)
     wrapper.appendChild(about)
     results.appendChild(wrapper)
    })

    page++
    if(page>1){
        showMore.style.display="block"
    }
}

formEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    searchImages()
})

showMore.addEventListener("click",()=>{
    searchImages()
})