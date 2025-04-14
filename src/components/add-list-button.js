
class ListButton {

    listButton;

    render() {
        this.listButton = document.createElement("button");
        this.listButton.classList.add("new-list-button");
        this.listButton.innerHTML = "ایجاد لیست جدید +";
        return this.listButton;
    }
}

export default new ListButton();