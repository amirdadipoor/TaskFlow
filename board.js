class Board {

    list;

    constructor(options) {
        //this.options = options;
        this.showList(options);
        this.list = options.list || [];
        this.addBasicBoardEventAction(options.container);
        for (let boardItem in options.container.children) {
            this.addBasicBoardEventAction(boardItem);
        }
    }


    showList = (options) => {
        let {container , list , template} = options;
        if (!container) { throw new Error("No container Exists provided!"); }
        if (!list) { throw new Error("No list Exists provided!"); }
        if (!Array.isArray(list)) { throw new Error("No list Exists provided!"); }
        if (!template) { throw new Error("No template Exists provided!"); }

        list.forEach(item => container.innerHTML += template(item));

    }

    addBasicBoardEventAction(BoardElement) {
        document.querySelectorAll(".edit-board-button").forEach((button) => {
            button.addEventListener("click", (e) => {
                console.log(button)
            })
        })

        document.querySelectorAll(".delete-board-button").forEach((button) => {
            button.addEventListener("click", (e) => {
                console.log(button)
            })
        })
    }

    handleEditBoardName (e) {
        console.log(this.list)
    }

    handleDeleteBoard (e) {
        console.log(this.list)
    }

}