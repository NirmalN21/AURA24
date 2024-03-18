import {events as data,category_img} from "./data.js"

console.log(data)


let container = document.querySelectorAll(".coading_events_grid")[0]
let cat_img = document.querySelectorAll(".coading_img")[0]
const urlParams = new URL(window.location.href).searchParams;
const eventcat = urlParams.get('eventcat');
console.log(eventcat);

cat_img.innerHTML=`<img class="category_img" src="${category_img[eventcat]}" alt="Coading" />`;

for(let i=0;i<data[eventcat].length;i++){
    let div=`
    <div class="img_parent">
        <div class="coading_event" >
            <img src=${data[eventcat][i][1]} alt="">
        </div>
            <div class="coading_event_text">
                <button class="coading_event_button" onclick="window.location='./eventRegistration/index.html?eventcat=${eventcat}&eventid=${i}'">Register</button>
                <span class="coading_event_name">${data[eventcat][i][0]}</span>
            </div>
    </div>`
            container.innerHTML+=div;
        }
        // <a onclick="window.location='./eventRegistration/index.html?eventcat=${eventcat}&eventid=${i}'">Register</a>
// ${data[eventcat][i]}
console.log(container)