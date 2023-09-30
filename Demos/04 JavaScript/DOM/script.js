posts = 
[
    {
        src:"https://picsum.photos/seed/2/320/200",
        date:new Date("2023-10-02:00:00.000Z"), // YYYY-MM-DDTHH:mm:ss.sssZ is the ISO 8601 format
        title:"How to design a usable landing page",
        brief:"This article provides valuable insights and tips on creating an engaging and effective landing page that keeps visitors hooked and encourages them to take desired actions.",
        link:"#",
        tags:["Design","Coding","HTML"]
    },
    {
        src:"https://picsum.photos/seed/3/320/200",
        date:new Date("2023-10-05:00:00.000Z"),
        title:"The Art of Color Theory in Web Design",
        brief:"Learn how understanding color theory can significantly impact the visual appeal and user experience of your web designs. Discover tips for selecting and combining colors effectively.",
        link:"#",
        tags:["Design","Web Development","Color Theory"]
    },
    {
        src:"https://picsum.photos/seed/4/320/200",
        date:new Date("2023-10-10:00:00.000Z"),
        title:"Optimizing Website Performance for Speed",
        brief:"Explore techniques and strategies to enhance your website's performance, ensuring faster loading times and a smoother user experience. Speed matters in today's digital landscape.",
        link:"#",
        tags:["Web Development","Performance Optimization"]
    },
    {
        src:"https://picsum.photos/seed/5/320/200",
        date:new Date("2023-10-15:00:00.000Z"),
        title:"Creating Engaging User Interfaces: Best Practices",
        brief:"Delve into the principles and best practices of designing captivating user interfaces that keep users engaged and enhance overall usability. Discover key design elements and strategies.",
        link:"#",
        tags:["Design","User Interface","UI/UX"]
    },
    {
        src:"https://picsum.photos/seed/6/320/200",
        date:new Date("2023-10-20:00:00.000Z"),
        title:"Mastering Responsive Web Design",
        brief:"Uncover the essential techniques and tools needed to design websites that look great and function seamlessly across various devices and screen sizes. Responsive design is crucial in today's multi-device world.",
        link:"#",
        tags:["Design","Web Development","Responsive Design"]
    }
]

// GENERATE Posts 

let postsHTML = ``

for (post of posts){

    // generate tags 
    tagsElement = `<ul class="tags">`
    for (tag of post.tags) {
        tagsElement += `<li><a>${tag}</a></li>`
    }
    tagsElement += `</ul>` 

    // Generate the post
    elementString = 
    `<div class="blog-post">
            <img src="${post.src}" alt="Sample Image">
            <div class="date">${post.date.toDateString()}</div>
            <h3>${post.title}</h3>
            <p>${post.brief}</p>
            <a href="${post.link}">Read More</a>
            ${tagsElement}
        </div>
    `
    //concat with postsHTML
    postsHTML += elementString
}

//append the child to posts
document.querySelector("#posts").innerHTML = postsHTML 