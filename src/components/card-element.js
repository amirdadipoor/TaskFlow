import {stringify, v4 as uuidv4} from 'uuid';
import { initDropdowns } from 'flowbite'
import { EventBus } from './../utilities/event-bus';
class CardElement {
    liTagContainer ;
    cardParentElement;

    dropDownActionButtonId;
    dropDownContainerId;

    EditActionButton;
    DeleteActionButton

    currentDraggingElementData = null;

    constructor() {
        this.dropDownContainerId = uuidv4();
        this.dropDownActionButtonId = uuidv4();

        EventBus.addEventListener('draggingCardElement', (e) => {
            this.currentDraggingElementData = e.detail.targetElement;
        });
    }


    createNameL2Div = (CardName) => {
        let L2div = document.createElement("div");
        let L2divClassList = ["flex","justify-between","items-center"]
        L2div.classList.add(...L2divClassList);

        let L3divName = document.createElement("div");
        let L3divClassList = ["flex","justify-start"]
        L3divName.classList.add(...L3divClassList);

        let headerCardElement = document.createElement("h6");
        let headerCardClassList = ["text-base","font-bold","tracking-tight","text-gray-900","dark:text-white"];
        headerCardElement.classList.add(...headerCardClassList);
        headerCardElement.innerText = CardName;

        L3divName.appendChild(headerCardElement);


        let L3DivActions = document.createElement("div");
        let L3DivActionClassList = ["flex","justify-end","px-1","pt-1"];
        L3DivActions.classList.add(...L3DivActionClassList);

        let dropDownActionButton = document.createElement("button");
        let dropDownActionButtonClassList = ["inline-block","text-gray-500","dark:text-gray-400","hover:bg-gray-100","dark:hover:bg-gray-700","focus:ring-4","focus:outline-none","focus:ring-gray-200","dark:focus:ring-gray-700","rounded-lg","text-sm","p-1.5"]
        dropDownActionButton.id = this.dropDownActionButtonId;
        dropDownActionButton.type = "button";
        dropDownActionButton.setAttribute("data-dropdown-toggle", this.dropDownContainerId);
        dropDownActionButton.classList.add(...dropDownActionButtonClassList);
        dropDownActionButton.innerHTML += `
            <span class="sr-only">Open dropdown</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
        `;


        let L4DivDropDownMenu = document.createElement("div");
        let L4DivDropDownMenuClassList = ["z-10","hidden","text-base","list-none","bg-white","divide-y","divide-gray-100","rounded-lg","shadow-sm","w-44","dark:bg-gray-700"]
        L4DivDropDownMenu.id = this.dropDownContainerId;
        L4DivDropDownMenu.classList.add(...L4DivDropDownMenuClassList);

        let ulActions = document.createElement("ul");
        ulActions.classList.add("py-2");
        ulActions.classList.add("bg-white");
        ulActions.setAttribute("aria-labelledby", this.dropDownContainerId);

        let liEditAction = document.createElement("li");
        this.EditActionButton = document.createElement("button");
        let EditActionButtonClassList = ["block","px-4","py-2","text-sm","bg-white","text-gray-700","hover:bg-gray-100","dark:hover:bg-gray-600","dark:text-gray-200","dark:hover:text-white"];
        this.EditActionButton.href = "#"
        this.EditActionButton.classList.add(...EditActionButtonClassList);
        this.EditActionButton.innerHTML += `ویرایش`;
        liEditAction.appendChild(this.EditActionButton);

        let liDeleteAction = document.createElement("li");
        this.DeleteActionButton = document.createElement("button");
        let DeleteActionButtonClassList = ["block","px-4","py-2","text-sm","bg-white","text-gray-700","hover:bg-gray-100","dark:hover:bg-gray-600","dark:text-gray-200","dark:hover:text-white"];
        this.DeleteActionButton.href = "#"
        this.DeleteActionButton.classList.add(...DeleteActionButtonClassList);
        this.DeleteActionButton.innerHTML += 'حذف';
        liDeleteAction.appendChild(this.DeleteActionButton);

        ulActions.appendChild(liEditAction);
        ulActions.appendChild(liDeleteAction);

        L4DivDropDownMenu.appendChild(ulActions);


        L3DivActions.appendChild(dropDownActionButton);
        L3DivActions.appendChild(L4DivDropDownMenu);


        L2div.appendChild(L3divName);
        L2div.appendChild(L3DivActions);

        return L2div;

    }

    createCardActionContainer = () => {
        let L2div = document.createElement("div");
        L2div.classList.add("mt-2");
        L2div.innerHTML += `
            <div class="flex justify-between items-center ">
                <div class="flex justify-start mb-3">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    <h2 class="ml-1 font-normal text-gray-700 dark:text-gray-400">24th Mar</h2>
                </div>
                <div class="flex justify-end mb-3 items-center ltr">
                    <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ml-1.5">انجام شده</label>
                    <input checked id="checked-checkbox21" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                </div>
            </div>
            <span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300 min-w-sm">Green</span>
            <span class="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">Yellow</span>
        `;

        return L2div;
    }

    createMainDivElement = (CardName) => {
        let div = document.createElement("div");
        let divClassList = ["max-w-sm","p-6","bg-white","border","border-gray-200","rounded-lg","shadow-sm","dark:bg-gray-800","dark:border-gray-700","mb-2"]
        div.classList.add(...divClassList);

        let L2DivCardName = this.createNameL2Div(CardName);
        let L2DivCardActions = this.createCardActionContainer();

        div.appendChild(L2DivCardName);
        div.appendChild(L2DivCardActions);

        return div;
    }

    createLiTagElement =(CardName) => {
        this.liTagContainer = document.createElement("li");
        let elementClassList = ["draggable","my-2"];
        this.liTagContainer.classList.add(...elementClassList);
        this.liTagContainer.draggable = true;

        this.liTagContainer.appendChild(this.createMainDivElement(CardName))
        initDropdowns();
        this.addDragAndDropEventsListenerToCard(this.liTagContainer)
        //initTooltips();

        return this.liTagContainer;
    }

    addDragAndDropEventsListenerToCard = (element) => {
        element.addEventListener('dragstart', (event) => {
            console.log('drag start card' , event.target);
            let targetElement = event.target;
            EventBus.dispatchEvent(new CustomEvent('draggingCardElement' , { detail: {  targetElement } } ));
            event.dataTransfer.setData('text/html', event.target.outerHTML);
            event.dataTransfer.dropEffect = 'move';
            event.target.classList.add("dragging-element");
        })
        element.addEventListener('dragenter', (event) => {
            console.log('drag enter card' , event.target);
        })
        element.addEventListener('dragover', (event) => {
            console.log('drag over card' , event.target);
            event.preventDefault();
        })
        element.addEventListener('dragleave', (event) => {
            console.log('drag leave card' , event.target);
        })
        element.addEventListener('dragend', (event) => {
            console.log('drag end card' , event.target);
            event.target.classList.remove("dragging-element");
            initDropdowns()
        })
        element.addEventListener('drop', (event) => {
            console.log('drop card' , event.target , this.currentDraggingElementData);
            event.preventDefault();
            if (this.currentDraggingElementData == null) { return false; }
            let target = event.target.closest('.draggable');

            if (target !=  this.currentDraggingElementData) {
                let dropHTML = event.dataTransfer.getData('text/html');
                target.parentNode.removeChild(this.currentDraggingElementData);
                target.insertAdjacentHTML('beforebegin' , dropHTML);
                this.addDragAndDropEventsListenerToCard(target.previousSibling);
            }

            this.currentDraggingElementData = null;

            //console.log('drop card' , event.target);
            //let draggingCardElement =

        })
    }

    render = (CardName) => {
        return this.createLiTagElement(CardName)
    }

}

export default CardElement;