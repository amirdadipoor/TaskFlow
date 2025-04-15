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

// Use a Shared Singleton Object to save drag & drop state