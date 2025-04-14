
class ListSection {

    ulTagContainerElement;

    createAddNewListButtonBuilder() {
        let button = document.createElement("button");
        button.classList.add("new-list-button");
        return button;
    }

    createDivMainContainerBuilder = () => {
        let div = document.createElement("div");
        div.classList.add("show-list");
        return div;
    }

    createUlTagContainerBuilder = () => {
        this.ulTagContainerElement = document.createElement("ul");
        this.ulTagContainerElement.classList.add("list");
        return this.ulTagContainerElement;
    }

    render = () =>{
        return `
            <button class="new-list-button">+ ایجاد لیست جدید</button> 
            <div class="show-list">
                <ul class="list" >
                    <li class="list-style" style="right: 2%; background-color: #7AB2B2;">
                        <h6 class="mb-2">عنوان لیست اول</h6>
                        <ul class="drag-zone dropzone my-8 min-h-32">
        
                        </ul>
                        <span class="mt-5">
                            <button type="button" class="text-gray bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <span class="ml-3">افزودن آیتم جدید</span>
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                                </svg>
                            </button>
                        </span>
                        <button class="close">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                            </svg>                                                  
                        </button>
                    </li>
                    <li class="list-style" style="right: 28%; background-color: #A4CAFE;">
                        <h6 class="mb-2">عنوان لیست دوم</h6>
                        <ul class="drag-zone dropzone my-8 min-h-32">
                            <li class="draggable my-2" draggable="true">
                                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-2">
                                    <div class="flex justify-between items-center ">
                                        <div class="flex justify-start ">
                                            <h6 class="text-base font-bold tracking-tight text-gray-900 dark:text-white">گزارش 1</h6>
                                        </div>
                                        <div class="flex justify-end px-1 pt-1">
                                            <button id="dropdownButton21" data-dropdown-toggle="dropdown21" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                                <span class="sr-only">Open dropdown</span>
                                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                </svg>
                                            </button>
                                            <!-- Dropdown menu -->
                                            <div id="dropdown21" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                                                <ul class="py-2" aria-labelledby="dropdownButton21">
                                                    <li>
                                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">ویرایش</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">حذف</a>
                                                    </li>
        
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-2">
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
                                    </div>
                                </div>
                            </li>
                            <li class="draggable my-2" draggable="true" >
                                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-2 ">
                                    <div class="flex justify-between items-center ">
                                        <div class="flex justify-start ">
                                            <h6 class="text-base font-bold tracking-tight text-gray-900 dark:text-white">گزارش 2</h6>
                                        </div>
                                        <div class="flex justify-end px-1 pt-1">
                                            <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                                <span class="sr-only">Open dropdown</span>
                                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                </svg>
                                            </button>
                                            <!-- Dropdown menu -->
                                            <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                                                <ul class="py-2" aria-labelledby="dropdownButton">
                                                    <li>
                                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">ویرایش</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">حذف</a>
                                                    </li>
        
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-2">
                                        <div class="flex justify-between items-center ">
                                            <div class="flex justify-start mb-3">
                                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                                </svg>
                                                <h2 class="ml-1 font-normal text-gray-700 dark:text-gray-400">24th Mar</h2>
                                            </div>
                                            <div class="flex justify-end mb-3 items-center ltr">
                                                <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ml-1.5">انجام شده</label>
                                                <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            </div>
                                        </div>
                                        <span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300 min-w-sm">Green</span>
                                        <span class="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">Yellow</span>
                                    </div>
                                </div>
                            </li>
                            <li class="draggable my-2" draggable="true" >
                                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-2 ">
                                    <div class="flex justify-between items-center ">
                                        <div class="flex justify-start ">
                                            <h6 class="text-base font-bold tracking-tight text-gray-900 dark:text-white">گزارش 3</h6>
                                        </div>
                                        <div class="flex justify-end px-1 pt-1">
                                            <button id="dropdownButton23" data-dropdown-toggle="dropdown23" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                                <span class="sr-only">Open dropdown</span>
                                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                </svg>
                                            </button>
                                            <!-- Dropdown menu -->
                                            <div id="dropdown23" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                                                <ul class="py-2" aria-labelledby="dropdownButton23">
                                                    <li>
                                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">ویرایش</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">حذف</a>
                                                    </li>
                                                
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-2">
                                        <div class="flex justify-between items-center ">
                                            <div class="flex justify-start mb-3">
                                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                                </svg>
                                                <h2 class="ml-1 font-normal text-gray-700 dark:text-gray-400">24th Mar</h2>
                                            </div>
                                            <div class="flex justify-end mb-3 items-center ltr">
                                                <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ml-1.5">انجام شده</label>
                                                <input checked id="checked-checkbox23" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            </div>
                                        </div>
                                        <span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300 min-w-sm">Green</span>
                                        <span class="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">Yellow</span>
                                    </div>
                                </div>
                        </li>
                        </ul>
                        <span class="mt-5">
                            <button type="button" class="text-gray bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <span class="ml-3">افزودن آیتم جدید</span>
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                                </svg>
        
        
                            </button>
                        </span>
                        <button class="close">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                            </svg>                          
                        </button>
                    </li>
                    <li class="list-style" style="right: 54%; background-color: #E1F7F5;;">
                        <h6 class="mb-2">عنوان لیست سوم</h6>
                        <ul class="drag-zone dropzone my-8 min-h-32">
        
                        </ul>
                        <span class="mt-5">
                            <button type="button" class="text-gray bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <span class="ml-3">افزودن آیتم جدید</span>
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                                </svg>
                            </button>
                        </span>
                        <button class="close">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
        `
    }
}

export default new ListSection()