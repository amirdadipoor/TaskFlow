import { EventBus } from './../utilities/event-bus';
class ItemModel {

    modalHeaderNameTag;
    modalInputTag ;
    itemCreatingType; // 0 : default ; 1 : board ; 2 : list ; 3 : card

    constructor() {
        this.modalInputTag = 0
        EventBus.addEventListener('addNewListEventTrigger' , event => this.prepareModalForAddNewList( event.detail.item ));
    }

    render () {
        let mainDiv = document.createElement("div");
        let mainDivClassList = ["hidden","overflow-y-auto","overflow-x-hidden","fixed","top-0","right-0","left-0","z-50","justify-center","items-center","w-full","md:inset-0","h-[calc(100%-1rem)]","max-h-full"]
        mainDiv.classList.add(...mainDivClassList);
        mainDiv.id = "create-item-modal";
        mainDiv.tabIndex = -1;
        mainDiv.setAttribute("aria-hidden", "true");

        let l1ModalDiv = document.createElement("div");
        let l2ModalDivClassList = ["relative","p-4","w-full","max-w-md","max-h-full"]
        l1ModalDiv.classList.add(...l2ModalDivClassList);
        mainDiv.appendChild(l1ModalDiv);

        let modalContentDiv = document.createElement("div");
        let modalContentDivClassList = ["relative","bg-white","rounded-lg","shadow-sm","dark:bg-gray-700"]
        modalContentDiv.classList.add(...modalContentDivClassList);
        l1ModalDiv.appendChild(modalContentDiv);

        let modalHeaderDiv = document.createElement("div");
        let modalHeaderDivClassList = ["flex","items-center","justify-between","p-4","md:p-5","border-b","rounded-t","dark:border-gray-600","border-gray-200"]
        modalHeaderDiv.classList.add(...modalHeaderDivClassList);
        modalContentDiv.appendChild(modalHeaderDiv);

        let modalHeaderTag = document.createElement("h3");
        let modalHeaderTagClassList = ["text-lg","font-semibold","text-gray-900","dark:text-white"];
        modalHeaderTag.classList.add(...modalHeaderTagClassList);
        modalHeaderTag.innerText = "ایجاد لیست جدید"
        modalHeaderDiv.appendChild(modalHeaderTag);

        this.modalHeaderNameTag = modalHeaderTag;

        modalHeaderDiv.innerHTML +=
            `<button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="create-item-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>`;

        let modalBodyForm = document.createElement("form");
        let modalBodyFormClassList = ["p-4","md:p-5"]
        modalBodyForm.classList.add(...modalBodyFormClassList);
        modalContentDiv.appendChild(modalBodyForm);

        let modalFormL1NameDiv = document.createElement("div");
        let modalFormL1NameDivClassList = ["grid","gap-4","mb-4","grid-cols-2"]
        modalFormL1NameDiv.classList.add(...modalFormL1NameDivClassList);
        modalBodyForm.appendChild(modalFormL1NameDiv);

        let modalFormL2NameDiv = document.createElement("div");
        modalFormL2NameDiv.classList.add("col-span-2");
        modalFormL1NameDiv.appendChild(modalFormL2NameDiv);

        modalFormL2NameDiv.innerHTML += `<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">عنوان</label>`;

        let input = document.createElement("input");
        let inputClassList = ["bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-600","dark:border-gray-500","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"];
        input.type = "text";
        input.name = "name";
        input.id = "add-new-item-input";
        input.required = true;
        input.placeholder = "نام آیتم مورد نظر خود را وارد کنید";
        input.classList.add(...inputClassList);
        modalFormL2NameDiv.appendChild(input);

        this.modalInputTag = input;

        let addButton = document.createElement("button");
        let addButtonClassList = ["text-white","inline-flex","items-center","bg-blue-700","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:bg-blue-600","dark:hover:bg-blue-700","dark:focus:ring-blue-800"]
        addButton.type = "submit";
        addButton.classList.add(...addButtonClassList);
        modalBodyForm.appendChild(addButton);

        addButton.innerHTML += `
            <span id="add-new-item-button-text" class="me-1 -ms-1">اضافه کردن ایتم جدید</span>
            <svg class=" w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
        `;


        addButton.addEventListener("click", (e) => {this.addNewItemHandler(e)})



        return mainDiv;
    }

    prepareModalForAddNewList = (item) => {
        this.modalHeaderNameTag.innerHTML = "ایجاد لیست جدید"
        this.modalInputTag = "نام لیست مورد نظر خود را وارد کنید"
        document.getElementById("add-new-item-button-text").innerHTML = "اضافه کردن لیست جدید";
        this.itemCreatingType = 2;
        //document.getElementById("add-new-item-button").addEventListener('click', event => {this.addNewItemList(event)})
    }

    addNewItemHandler = (event) => {
        if (this.itemCreatingType === 2) {
            this.addNewCardHandler(event);
        }

    }

    addNewCardHandler = (event) => {
        console.log("2");
    }


    oldrender () {
        return `
            <!-- Main modal -->
            <div id="create-item-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-md max-h-full">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                        <!-- Modal header -->
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                ایجاد لیست جدید
                            </h3>
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="create-item-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <!-- Modal body -->
                        <form class="p-4 md:p-5">
                            <div class="grid gap-4 mb-4 grid-cols-2">
                                <div class="col-span-2">
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام</label>
                                    <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="نام آیتم مورد نظر خود را وارد کنید" required="">
                                </div>
                                
                            </div>
                            <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <span class="me-1 -ms-1">اضافه کردن لیست جدید</span>
                                <svg class=" w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                
                            </button>
                        </form>
                    </div>
                </div>
            </div> `
    }
}

export default new ItemModel();