import { animate, svg, stagger } from 'https://esm.sh/animejs';






animate(svg.createDrawable('.line'), {
 draw: ['0 0', '0 1'],
 ease: 'inOutQuad',
 duration: 1000,
 delay: 400,
 loop: false,
 onComplete: () => { const categoryFromURL = getCategoryFromURL();


if (categoryFromURL) {
 addNodes(categoryFromURL);
} else {
 addNodes("All"); // default
}
; }
});








async function addNodes(category) {
 await sleep(100);


 const visibleProjects = projects.filter(p => p.category.includes(category));
 const numberNodes = visibleProjects.length






const path = document.querySelector('#trackPath');
const svgElement = path.ownerSVGElement;


const length = path.getTotalLength();


for (let i = 0; i < numberNodes; i++) {
 const p = path.getPointAtLength((((i / numberNodes)) * length) + length/12);


 const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
 circle.setAttribute("cx", p.x);
 circle.setAttribute("cy", p.y);
 circle.setAttribute("r", 18);
 circle.setAttribute("fill", "#e1ceff");
 circle.setAttribute('stroke-width', '8');
 circle.setAttribute('stroke', "black");


 svgElement.appendChild(circle);


 circle.style.cursor = "pointer";


circle.addEventListener("click", () => {
 showProject(visibleProjects[i]);
});
 await sleep(100);


}
}


function showProject(project) {
 const panel = document.querySelector('#projectInfoPanel');
 if (!panel) return console.error("Project panel couldnt be queried");


 panel.innerHTML = `
   <p id="projectInfoTitle">${project.title}</p>
   <p class="projectInfoStat">LAP TIME: ${project.date}</p>
   <div class="projectSkills">
   <span class="projectInfoStat" style="margin-right: 0px;">RACE PACKAGE: </span>
       ${project.skills.map(skill => `<span class="skillChip">${skill}</span>`).join("")}
   </div>


   <p class="essay2">${project.description}</p>


   ${renderMedia(project.media)}


 `;
}




function sleep(ms) {
 return new Promise(resolve => setTimeout(resolve, ms));
}




function renderMedia(media = []) {
 if (!media.length) return "";


 return `
   <div class="mediaGallery">
     ${media.map(item => {
       if (item.type === "video") {
         return `
           <video class="mediaObject" controls>
             <source src="${item.src}">
           </video>
         `;
       }


       if (item.type === "image") {
         return `
           <img class="mediaObject" src="${item.src}">
         `;
       }


     
       return `
         <a href="${item.src}" target="_blank">Open media</a>
       `;
     }).join("")}
   </div>
 `;
}






function getCategoryFromURL() {
 const params = new URLSearchParams(window.location.search);
 return params.get("category"); // returns string or null
}








const projects = [
   {
   id: "2",
   title: "Computer Vision Basketball Tracker",
   date: "February 2024 - April 2024",
   category: ["Software", "AI", "All"],
   description: "SwiftUI app that uses live computer vision to track basketball makes, misses, and dribbles. Practice data stored in the cloud with Firebase; users can see the stats of their friends.",
   skills : ["Computer Vision", "CUDA", "PyTorch", "SwiftUI", "Firebase", "Image Processing"],
   link: "insert link here",
   media: [
     { type: "video", src:"/Pages/ProjectImages/SwishLab.mp4" }
   ]


 },


   {
   id: "6",
   title: "Live Mind Map Generator",
   date: "October 2025",
   category: ["Software", "AI", "All"],
   description: "React app that recorded speech, converted to text to send to an LLM, which processed it and output nodes and edges in a JSON which is rendered into live mind map of discussions that updated as the conversation went.",
   skills : ["LLMs", "React", "Speech Processing (Deepgram)", "REST APIs"],
   link: "insert link here",
   media: [
     { type: "video", src:"/Images/Projects/MindMap.mp4" }
   ]


 },


   {
   id: "3",
   title: "Gesture-based Media Controller",
   date: "January 2025",
   category: ["Embedded Systems", "All"],
   description: "A gesture recognition chip drives a Pi Zero using the BlueZ Python library to skip/rewind media playing on a phone, or pick up/decline incoming calls. Intended for use in a vehicle to reduce distracted accidents.",
   skills : ["I2C", "MicroPython", "Bluetooth Classic", "Bluetooth AVRCP/A2DP" ],
   link: "insert link here",
   media: [
     { type: "video", src:"/Images/Projects/Gesture.mp4" }
   ]


 },


   {
   id: "4",
   title: "FSAE Data Acquisition System Prototype",
   date: "January 2025 - June 2025",
   category: ["Embedded Systems", "All"],
   description: "Selected sensors for the DAQ, interfaced with a Pi Pico at each wheel, using a Pi CAN Cowbell to convert to CAN signal to send to ECU. Limited experience with STM32 before switching to Pi for prototyping. ",
   skills: ["CAN", "I2C", "UART", "SPI", "Analog sensors", "MicroPython"],
   link: "insert link here",
   media: []


 },


   {
   id: "5",
   title: "Running Tracker Wearable w/ Live Feedback",
   date: "November 2025",
   category: ["Embedded Systems", "AI", "All"],
   skills: ["C++", "I2C", "LLMs", "ESP32", "Analog sensors"],
   description: "Wearable with 3D-custom TPU shell. An ESP32 recorded body temperature, heart rate, and distance ran, which was periodically sent to an LLM aware of user goals and could recommend more or less intense exercise. ",
   link: "insert link here",
   media: [
     { type: "image", src:"/Images/Projects/Wearable.png" }
   ]


 },


   {
   id: "1",
   title: "Digital Portfolio",
   date: "August 2022 - Present",
   category: ["Software", "All"],
   skills: ["HTML", "CSS", "JavaScript", "Git"],
   description: "This website. Created with vanilla CSS/HTML, aside from animation libraries like Typed.js and animejs. Based on the UI for Ridge Racer Type 4 for the PlayStation 1.",
   link: "insert link here",
   media: []


 },
]




const tracks = [
 {
   svgString: "",
   trackName: "Circuit of the Americas, Austin, United States",
   filterByCategory: "All",
 },


 {
   svgString: "",
   trackName: "",
   filterByCategory: "",
 },


 {
   svgString: "",
   trackName: "",
   filterByCategory: "",
 },


 {
   svgString: "",
   trackName: "",
   filterByCategory: "",
 }
]


