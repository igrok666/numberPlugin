/*
name project: number_plugin
version: 1.05
author: https://t.me/Progwtf

version: 1.04
'Устранён баг с двойным запуском плагина на одной странице'
version: 1.05
'Добавлено редактирование с помошью клавиатуры'
version: 1.06
'Теперь нельзя в поле вводить символы'
*/
(function( $ ) {
    $(document).on('click', '.plus_plugin_number', function () {
        var input_plugin_number = $(this).parent().find('.input_plugin_number');
        var value = parseInt(input_plugin_number.val());
        var numb = $(this).parent().prev();
        input_plugin_number.val(value+1);
        numb.val(value+1);
        input_plugin_number.attr('value', value+1);
        numb.val(value+1);
        numb.attr('value', value+1);
        console.log(numb.val());
        numb.click();
    });
    $(document).on('click', '.minus_plugin_number', function () {
        var input_plugin_number = $(this).parent().find('.input_plugin_number');
        var value = parseInt(input_plugin_number.val());
        var numb = $(this).parent().prev();
        if (value>1){
            input_plugin_number.val(value-1);
            input_plugin_number.attr('value', value-1);
            numb.val(value-1);
            numb.attr('value', value-1);
            numb.click();
        }else{
            input_plugin_number.val(value);
            input_plugin_number.attr('value', value);
            numb.val(value);
            numb.attr('value', value);
            numb.click();
        }
    });
    $(document).on('keypress', '.input_plugin_number', function () {
        var thi = $(this);
        setTimeout(function () {
            thi.val(thi.attr('value'));
            thi.val(thi.val().replace(/[a-zA-Z а-яА-Я]/,""));
            console.log(thi.attr('value'));
            console.log(thi.val());
        },100);
    });
     $(document).on('click', '.input_plugin_number', function () {
         $('.input_plugin_number').change(function(){
             $(this).val($(this).attr('value'));
             $(this).val($(this).val().replace(/[a-z A-Zа-яА-Я]/,""));
            var input = $(this).val();
             $(this).val(input);
             $(this).attr('value', input);
            var paren = $(this).parent().prev();
             paren.val(input);
             paren.attr('value', input);
    });
     });
    
    
    $.fn.number_plugin = function(options) {
            var settings = $.extend({
                'width': '65px',
                'height': '35px'
            }, options);
        return this.each(function() {
            $(this).css('display', 'none');
            if ($(this).siblings('.main_number_plugin').length == 0){
            var value = $(this).val();
            $(this).after("<div class='main_number_plugin' style='width: " + settings['width'] + "'><input type='text' value='" + value + "' class='input_plugin_number' style='width: " + settings['width'] + "; height: " + settings['height'] + "'><div class='plus_plugin_number'></div><div class='minus_plugin_number'></div></div>");
            }
            });
    };
})(jQuery);