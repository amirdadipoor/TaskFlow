import {EventBus} from "../utilities/event-bus";
import Swal from 'sweetalert2'
class ItemSwalModal {

    constructor() {

        EventBus.addEventListener('addNewListEventTrigger' , event => this.prepareModalForAddNewList( event.detail.item ));
    }

    async prepareModalForAddNewList (event) {
        const {value : NewCardName } = await Swal.fire({
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

        if (NewCardName) {
            this.createNewCardAfterCardNameValidation(NewCardName);
        }


    }
    createNewCardAfterCardNameValidation(CardName) {
        EventBus.dispatchEvent(new CustomEvent('newListItemAdded' , { detail: { CardName } }))
    }
}

export default ItemSwalModal;