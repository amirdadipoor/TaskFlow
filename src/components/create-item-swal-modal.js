import {EventBus} from "../utilities/event-bus";
import Swal from 'sweetalert2'
class ItemSwalModal {

    constructor() {

        EventBus.addEventListener('addNewListEventTrigger' , event => this.prepareModalForAddNewList( event.detail.item ));
        EventBus.addEventListener('addNewCardEventTrigger' , event => this.prepareModalForAddNewCard( event.detail.index ));
    }

    async  prepareModalForAddNewList (event) {
        const {value : NewListName } = await Swal.fire({
            title: "نام لیست مورد نظر خود را وارد کنید",
            input: "text",
            inputAttributes: {
                autocapitalize: "off"
            },
            showCancelButton: true,
            cancelButtonText: "لغو",
            confirmButtonText: "ایجاد لیست",
            showLoaderOnConfirm: true,
            inputValidator: (value) => {
                if(!value || value.trim().length <  3) {
                    return "ورودی باید حداقل 3 کاراکتر باشد";
                }else {
                    return null;
                }
            }
        });

        if (NewListName) {
            this.createNewCardAfterListNameValidation(NewListName);
        }


    }

    async prepareModalForAddNewCard  (index )  {
        const {value : NewCardName } = await Swal.fire({
            title: "نام آیتم مورد نظر خود را وارد کنید",
            input: "text",
            inputAttributes: {
                autocapitalize: "off"
            },
            showCancelButton: true,
            cancelButtonText: "لغو",
            confirmButtonText: "ایجاد کارت جدید",
            showLoaderOnConfirm: true,
            inputValidator: (value) => {
                if(!value || value.trim().length <  3) {
                    return "ورودی باید حداقل 3 کاراکتر باشد";
                }else {
                    return null;
                }
            }
        });

        if (NewCardName) {
            this.createNewCardAfterCardNameValidation(NewCardName , index);
        }
    }

    createNewCardAfterListNameValidation(ListName) {
        EventBus.dispatchEvent(new CustomEvent('newListItemAdded' , { detail: { ListName } }))
    }

    createNewCardAfterCardNameValidation (CardName , index) {
        EventBus.dispatchEvent(new CustomEvent('newCardItemAdded' , { detail: { CardName , index} }))
    }
}

export default ItemSwalModal;