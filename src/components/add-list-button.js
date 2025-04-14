import { EventBus } from './../utilities/event-bus';
class ListButton {

    listButton;

    render() {
        this.listButton = document.createElement("button");
        this.listButton.classList.add("new-list-button");
        this.listButton.innerHTML = "ایجاد لیست جدید +";
        this.listButton.setAttribute("data-modal-target", "create-item-modal");
        this.listButton.setAttribute("data-modal-toggle", "create-item-modal");

        this.listButton.addEventListener("click", (event) => this.handleButtonEventListener(event));

        return this.listButton;
    }

    handleButtonEventListener(event) {
        EventBus.dispatchEvent(new CustomEvent('addNewListEventTrigger' , { detail: { item : "list" } }));
    }
}

export default new ListButton();