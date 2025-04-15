export const dropCardShareState = {
    data: null,
    update(newData) {
        this.data = newData;
    },
    get() {
        let mydata = this.data;
        //this.data = null
        return mydata;
    },
    clear() {
        this.data = null
    }
};