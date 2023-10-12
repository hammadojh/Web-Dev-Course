//fetch data from the api
async function getEvents() {
    const res = await fetch("https://faaliat.sa/ar/events_api/year-events")
    const data = await res.json()
    populateEvents(data.contents.events)
}

function populateEvents(events){
    eventsElement = document.querySelector(".events")
    for (let event of events){
        eventsElement.appendChild(createEvent(event))
    }
}

function createEvent(event){

    //process link
    let bodyElement = document.createElement("div")
    bodyElement.innerHTML = event.body
    let desc = bodyElement.querySelectorAll("p")[0].innerText
    let link = bodyElement.querySelectorAll("a")[0].href

    let eventString = 
    `
    <img src="${event.image}" alt="">
    <div class="content">
        <div class="details">
            <span class="date">
                من ${event.event_date.start_date} الى ${event.event_date.end_date}
            </span>
            <span class="location">
                ${event.city.name}
            </span>
        </div>
        <h2>
            ${event.title}
        </h2>
        <p>${desc}</p>
    </div>
    `
    let div = document.createElement("div")
    div.classList.add("event")
    div.innerHTML = eventString
    return div
}

getEvents()