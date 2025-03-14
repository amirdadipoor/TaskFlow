class Board {

    list;

    constructor(options) {
        //this.options = options;
        this.showList(options);
        this.list = options.list || [];
    }


    showList = (options) => {
        let {container , list , template} = options;
        if (!container) { throw new Error("No container Exists provided!"); }
        if (!list) { throw new Error("No list Exists provided!"); }
        if (!Array.isArray(list)) { throw new Error("No list Exists provided!"); }
        if (!template) { throw new Error("No template Exists provided!"); }

        list.forEach(item => container.innerHTML += template(item));

    }

}