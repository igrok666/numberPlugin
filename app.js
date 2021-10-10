$(document).ready(function () {
    $('.numb').number_plugin({
        width: '65px',
        height: '35px',
        negative: true,
        step: 1,
        min: 1,
        max: 100,
        animate: true,
        delay: 100,
        class: 'custom',
    });
});