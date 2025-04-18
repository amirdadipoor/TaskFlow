import navbar from "./components/navbar"
import sidebar from "./components/sidebar"
import list from "./components/list-section"
import ListButton from "./components/add-list-button"
//import ItemModel from "./components/create-item-modal"
import ItemSwalModel from "./components/create-item-swal-modal"
import "./style.css"
import "./TaskFlow.css"

document.documentElement.classList.add('light');
let bodyClassList = ["p-5" ,"bg-white","dark:bg-gray-900","antialiased"]
document.body.classList.add(...bodyClassList);
document.body.appendChild(navbar.render());
//document.body.innerHTML += sidebar.render();
document.body.appendChild(ListButton.render());
document.body.appendChild(list.render());
//document.body.innerHTML += list.oldrender();
//document.body.innerHTML += ItemModel.oldrender();

//document.body.appendChild(ItemModel.render());
let mySwalModals = new ItemSwalModel();


//console.log("123")