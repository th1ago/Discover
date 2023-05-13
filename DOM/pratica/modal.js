const buttonModal = document.getElementById('openModal')
const modalWrapper = document.querySelector('modal-wrapper')

buttonModal.onclick = function () {
    modalWrapper
        .classList
        .remove('invisible')
}
    
