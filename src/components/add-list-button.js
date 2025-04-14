
class ListButton {

    listButton;

    render() {
        this.listButton = document.createElement("button");
        this.listButton.classList.add("new-list-button");
        this.listButton.innerHTML = "ایجاد لیست جدید +";
        this.listButton.setAttribute("data-modal-target", "create-item-modal");
        this.listButton.setAttribute("data-modal-toggle", "create-item-modal");

        return this.listButton;
    }
}

export default new ListButton();