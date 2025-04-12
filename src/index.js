import navbar from "./components/navbar"
import sidebar from "./components/sidebar"
import "./style.css"


let bodyClassList = ["p-5" ,"bg-white","dark:bg-gray-900","antialiased"]
document.body.classList.add(...bodyClassList);
document.body.appendChild(navbar.render());
document.body.innerHTML += sidebar.render();

console.log("123")