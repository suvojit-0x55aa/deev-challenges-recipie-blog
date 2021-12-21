$(document).ready(() => {
    $('.ingredients-point').click( (event) => {
        const clickedElement = $(event.target);
        if (clickedElement[0].className === 'checkmark'){
            return;
        };
        const targetElement = clickedElement.closest('.ingredients-point');

        let checkButton =  targetElement.find('.checkmark');
        if(checkButton.prop('checked')) {
            checkButton.prop('checked', false);
        } else {
            checkButton.prop('checked', true);
        }
    });
});