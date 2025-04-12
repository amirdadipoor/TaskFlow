class Sidebar {


    render = () => {

        return `
            <div class="w-full px-4 mx-auto max-w-8xl pt-8 mt-4">
                <aside id="" class="fixed left-0 top-16 h-screen w-64 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800" id="sidebar-style">
                        <ul class="space-y-2 font-medium">
                            <li>
                                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"></path>
                                    </svg>
                                    <span class="ms-3">برد ها</span>
                                </a>
                            </li>
                        
                        </ul>
                        <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                            <li>
                                <a href="javascript:;" id="create-new-board" class="flex items-center justify-between p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                    
                                    <span class="mr-5">برد جدید</span>
                                    
                                    <svg  stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-800 dark:text-white " id="new-board">
                                        <path d="M12 4v16m8-8H4" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                                    </svg>
                                
                                </a>
                            </li>
                        </ul>
                        <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700" id="board-container">
        
                        </ul>
                        <div class="drawer hidden" id="create-new-item-box"> <!-- item : board , list , card ,  -->
                            <h2 class="menu-title" id="create-new-item-tag">ایجاد لیست جدید</h2>
                            <input type="text" class="mb-3" id="create-new-item-input" placeholder="عنوان لیست">
                            <br class="m-4">
                            <button id="create-new-item-button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">ایجاد</button>
                            <button id="cancel-creation-button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:focus:ring-yellow-900">انصراف</button>
                        </div>
                    </div>
                </aside>
            </div>
        `
    }
}

export default new Sidebar();