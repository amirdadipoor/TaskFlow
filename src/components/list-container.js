
class ListContainer {
    ulTagContainerElement;

    createListItemMainElement = (color) => {
        // "#7AB2B2"
        // we get background color in input

        let li = document.createElement("li");
        li.classList.add("list-style");
        //li.style.right = "2%";
        //li.style.backgroundColor = color;

        return li;

    }

    createElementHeaderTag = ( name ) => {
        let header = document.createElement("h6");
        header.classList.add("mb-2");
        header.innerHTML = name;
        return header;
    }

    createUlTagContainerElement = () => {
        this.ulTagContainerElement = document.createElement("ul");
        let elementClassList = ["drag-zone","dropzone","my-8","min-h-32"]
        this.ulTagContainerElement.classList.add(...elementClassList);

        return this.ulTagContainerElement;
    }

    createAddNewItemButton = () => {
        let button = document.createElement("button");
        let elementClassList = ["text-gray","bg-white","hover:bg-gray-100","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","inline-flex","items-center","dark:bg-blue-600","dark:hover:bg-blue-700","dark:focus:ring-blue-800"];
        button.type = "button";
        button.classList.add(...elementClassList);

        let span = document.createElement("span");
        span.classList.add("ml-3");
        span.innerHTML = "افزودن آیتم جدید";

        button.appendChild(span);
        button.innerHTML += `
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
            </svg>
        `;
        return button;

    }

    createDeleteListButton = () => {
        let button = document.createElement("button");
        button.classList.add("close");
        button.innerHTML += `
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
            </svg>
        `;
        return button;
    }

    createSpanElement = () => {
        let span = document.createElement("span");
        span.classList.add("mt-5");
        span.appendChild(this.createAddNewItemButton());
        return span;
    }



    render = (listName) => {
        let mainLI = this.createListItemMainElement("#7AB2B2");
        let header = this.createElementHeaderTag(listName);
        this.createUlTagContainerElement();
        let addNewItemSpan = this.createSpanElement();
        let deleteListButton = this.createDeleteListButton();



        mainLI.appendChild(header);
        mainLI.appendChild(this.ulTagContainerElement);
        mainLI.appendChild(addNewItemSpan);
        mainLI.appendChild(deleteListButton);


        return mainLI;
    }
}

export default  ListContainer;