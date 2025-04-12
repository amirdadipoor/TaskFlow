
class Navbar {
    constructor() {}

    createAppNameA = () => {
        let A = document.createElement("a");
        let AClassList = ["flex","items-center","space-x-3","rtl:space-x-reverse"];
        A.classList.add(...AClassList);
        A.href = "https://github.com/amirdadipoor/TaskFlow";

        let ASpan = document.createElement("span");
        let ASpanClassList = ["self-center","text-2xl","font-semibold","whitespace-nowrap","text-white","dark:text-white"];
        ASpan.classList.add(...ASpanClassList);
        ASpan.innerText = "TaskFlow";

        A.appendChild(ASpan);
        return A;
    }

    createInputSectionDiv = () => {
        let mainDiv = document.createElement("div");
        let L1Div = document.createElement("div");
        let L2Div = document.createElement("div");
        let svgTag = document.createElement("svg");
        let pathTag = document.createElement("path");
        let inputTag = document.createElement("input");

        let mainDivClassList = ["flex","md:order-2"];
        let L1DivClassList = ["relative","hidden","md:block"];
        let L2DivClassList = ["absolute","inset-y-0","start-0","flex","items-center","ps-3","pointer-events-none"];
        let svgTagClassList = ["w-4","h-4","text-gray-500","dark:text-gray-400"];
        let inputClassList = ["block","w-full","p-2","ps-10","text-sm","text-gray-900","border","border-gray-300","rounded-lg","bg-gray-50","focus:ring-blue-500","focus:border-blue-500","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"];

        mainDiv.classList.add(...mainDivClassList);
        L1Div.classList.add(...L1DivClassList);
        L2Div.classList.add(...L2DivClassList);
        svgTag.classList.add(...svgTagClassList);
        inputTag.classList.add(...inputClassList);

        svgTag.ariaHidden = true;
        svgTag.xmlns = "http://www.w3.org/2000/svg";
        svgTag.fill = "none";
        svgTag.viewBox = "0 0 20 20";

        pathTag.stroke = "currentColor";
        pathTag.strokeLinejoin = "round";
        pathTag.strokeLinecap = "round";
        pathTag.strokeWidth = "2";
        pathTag.d = "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z";

        inputTag.type = "text";
        inputTag.id = "search-navbar";
        inputTag.placeholder = "جستوجو ...";


        mainDiv.appendChild(L1Div);
        L1Div.appendChild(L2Div);
        L2Div.appendChild(svgTag);
        svgTag.appendChild(pathTag);
        L1Div.appendChild(inputTag);

        //return mainDiv;

        return `
            <div class="flex md:order-2">
                
                <div class="relative hidden md:block">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="جستوجو ...">
                </div>
            </div>
        `;
    }

    createMainDiv = () => {
        let div = document.createElement("div");
        let elementClassList = ["max-w-screen-xl","flex","flex-wrap","items-center","justify-between","mx-auto","p-4"];
        div.classList.add(...elementClassList);

        div.appendChild(this.createAppNameA());
        div.innerHTML += this.createInputSectionDiv();

        return div;
    }

    render() {
        let navbarElement = document.createElement("nav");
        let navbarClassList = ["bg-white","fixed","top-0","left-0","w-full","border-gray-200","dark:bg-gray-900","z-50"];
        navbarElement.classList.add(...navbarClassList);
        navbarElement.id = "nav-style";

        navbarElement.appendChild(this.createMainDiv())


        return navbarElement;
    }
}

export default new Navbar();