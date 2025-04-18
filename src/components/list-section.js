import ListContainer from "./list-container"
import { EventBus } from './../utilities/event-bus';
class ListSection {

    ulTagContainerElement;
    elementsObjList;
    listIndexVector;

    constructor() {
        this.elementsObjList = new Array();
        this.listIndexVector = 0;
        EventBus.addEventListener('newListItemAdded' , event => this.createAndAddNewListElement(event.detail.ListName));
        EventBus.addEventListener('newCardItemAdded' , event => this.createAndAddNewCardElement(event.detail.CardName , event.detail.index));
    }


    createDivMainContainerBuilder = () => {
        let div = document.createElement("div");
        div.classList.add("show-list");
        return div;
    }

    createUlTagContainerBuilder = () => {
        this.ulTagContainerElement = document.createElement("ul");
        this.ulTagContainerElement.classList.add("list");
        this.ulTagContainerElement.classList.add("main-list-section");
        return this.ulTagContainerElement;
    }

    render = () => {
        //let empty = document.createElement("");


        let mainDiv = this.createDivMainContainerBuilder();
        let ulTagContainer = this.createUlTagContainerBuilder();

        mainDiv.appendChild(ulTagContainer);

        let l1 = new ListContainer(this.listIndexVector++)
        let l2 = new ListContainer(this.listIndexVector++)
        //let l3 = new ListContainer()
        //let l4 = new ListContainer()

        this.elementsObjList.push(l1)
        this.elementsObjList.push(l2)

        ulTagContainer.appendChild(l1.render("عنوان لیست اول"));
        ulTagContainer.appendChild(l2.render("عنوان لیست دوم"));
        //ulTagContainer.appendChild(l3.render("عنوان لیست سوم"));
        //ulTagContainer.appendChild(l4.render("عنوان لیست چهارم"));

        l2.createNewCardElement("عنوان کارت 1")
        l2.createNewCardElement("عنوان کارت 2")
        l2.createNewCardElement("عنوان کارت 3")
        l2.createNewCardElement("عنوان کارت 4")



        return mainDiv;
    }

    createAndAddNewListElement = (elementName) => {

        let myNewList = new ListContainer(this.listIndexVector++);
        this.elementsObjList.push(myNewList)
        this.ulTagContainerElement.appendChild(myNewList.render(elementName));
    }

    createAndAddNewCardElement = (elementName , index) => {
        let myNewCard = this.elementsObjList[index].createNewCardElement(elementName);
    }


}

export default new ListSection()