class Event {
    constructor(jsonEvent){
        // parse the ddescription .. 
        this.title = jsonEvent.title 
        this.desc = jsonEvent.body
        this.start_date = jsonEvent.event_date.start_date
        this.end_date = jsonEvent.event_date.end_date
        this.city = jsonEvent.city.name
        this.imageLink = jsonEvent.image
    }

    printEvent(){
        console.log(this.title)
    }
}

//fetch data from the api
(async () => {
    const res = await fetch("https://faaliat.sa/ar/events_api/year-events")
    const data = await res.json()
    console.log(data)
    populateEvents(data.contents.events)
})();

function populateEvents(events){
    eventsElement = document.querySelector(".events")
    for (let jsonEvent of events){
        const event = new Event(jsonEvent)
        eventsElement.appendChild(createEvent(event))
    }
}

function createEvent(event){

    let eventString = 
    `
    <img src="${event.imageLink}" alt="">
    <div class="content">
        <div class="details">
            <span class="date">
                من ${event.start_date} الى ${event.end_date}
            </span>
            <span class="location">
                ${event.city}
            </span>
        </div>
        <h2>
            ${event.title}
        </h2>
        <p>${event.desc}</p>
    </div>
    `
    let div = document.createElement("div")
    div.classList.add("event")
    div.innerHTML = eventString
    return div
}