import navbar from "./components/navbar"
import sidebar from "./components/sidebar"
import list from "./components/list-section"
import "./style.css"
import "./TaskFlow.css"


let bodyClassList = ["p-5" ,"bg-white","dark:bg-gray-900","antialiased"]
document.body.classList.add(...bodyClassList);
document.body.appendChild(navbar.render());
document.body.innerHTML += sidebar.render();
document.body.innerHTML += list.render();

console.log("123")