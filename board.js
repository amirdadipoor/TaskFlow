class Board {

    list;
    container;
    inputBox;

    constructor(options) {
        this.container = options.container;
        this.inputBox = options.inputBox;
        this.showList(options);
        this.list = options.list || [];
        this.addBasicBoardEventAction();
        /*for (let boardItem in options.container.children) {
            this.addBasicBoardEventAction(boardItem);
        }*/
    }


    showList = (options) => {
        let {container , list , template} = options;
        if (!container) { throw new Error("No container Exists provided!"); }
        if (!list) { throw new Error("No list Exists provided!"); }
        if (!Array.isArray(list)) { throw new Error("No list Exists provided!"); }
        if (!template) { throw new Error("No template Exists provided!"); }

        list.forEach(item => container.innerHTML += template(item));

    }

    addBasicBoardEventAction() {
        this.container.addEventListener('click', (event) => {
            try {
                let target = event.target ;
                //console.log();
                if (target.closest('button').classList.contains('edit-board-button')) {
                    let index = this.getElementIndexFromEvent(event);

                    let newBoardName = prompt("لطفا مورد جدید را برای بورد وارد کنید  : " , this.list[index].board_name).trim();
                    //console.log(newBoardName)

                    event.target.closest('a').querySelector('.board-name-label').innerText = newBoardName;
                    this.list[index].board_name = newBoardName;

                    //console.log(this.list);
                    //console.log(index);

                    //console.log('edit btn clicked!');
                    //console.log(this.list);
                }

                if (target.closest('button').classList.contains('delete-board-button')) {
                    //console.log('AAAA')

                    if (confirm("Are you sure you want to delete this item?")) {
                        //parentLi.remove();
                        let index = this.getElementIndexFromEvent(event);
                        event.target.closest('li').remove();
                        this.list.splice(index, 1);
                        console.log(this.list);console.log(this.list);
                    }





                    //console.log('delete btn clicked!');
                    //console.log(this.list);
                }
            } catch (error)  {
                console.error(error);
            }

        })



    }

    handleEditBoardName (e) {
        console.log(this.list)
    }

    handleDeleteBoard (e) {
        console.log(this.list)
    }

    getElementIndexFromEvent (event) {
        let li = event.target.closest('li');
        let ul = li.parentElement;
        return Array.from(ul.children).indexOf(li);
        //return index;
    }

}