/*
name project: number_plugin
version: 1.07
author: https://t.me/Progwtf

version: 1.04
'Устранён баг с двойным запуском плагина на одной странице'
version: 1.05
'Добавлено редактирование с помошью клавиатуры'
version: 1.06
'Теперь нельзя в поле вводить символы'
version: 1.07
'Добавлена команда для включения отрицательных чисел'
'Добавлена команда установки шага'
'Исправлен баг для ввода числел с клавиатуры'
'В следующей версии будет добавлена команда для анимации и задержка анимации'
version 1.08
'Добавлена функция анимации'
'Добавлена функция задержки анимации'
*/
(function( $ ) {
    var negative;
    var step;
    var animate;
    var delay;
    $(document).on('click', '.plus_plugin_number', function () {
        var input_plugin_number = $(this).parent().find('.input_plugin_number');
        var value = parseInt(input_plugin_number.val());
        var numb = $(this).parent().prev();
        if (animate === false){
            input_plugin_number.val(value+step);
            numb.val(value+step);
            input_plugin_number.attr('value', value+step);
            numb.val(value+step);
            numb.attr('value', value+step);
            numb.click();
        }
        else if(animate === true){
            var valstep = value + step+1;
            var timeout = 0;
            if (delay === false){
                delay = 10;
            }
            for (var i=value; i< valstep; i++){
                setTimeout((function (m) {
                    return function(){
                        input_plugin_number.val(m);
                        numb.val(m);
                        input_plugin_number.attr('value', m);
                        numb.val(m);
                        numb.attr('value', m);
                        numb.click();
                    }
                })(i),timeout);
                timeout +=delay;
            }
        }
    });
    $(document).on('click', '.minus_plugin_number', function () {
        var input_plugin_number = $(this).parent().find('.input_plugin_number');
        var value = parseInt(input_plugin_number.val());
        console.log(value);
        var numb = $(this).parent().prev();
        if (negative === false) {
            if (value > 1 && value > step) {
                if (animate === false){
                    input_plugin_number.val(value - step);
                    input_plugin_number.attr('value', value - step);
                    numb.val(value - step);
                    numb.attr('value', value - step);
                    numb.click();
                }else if(animate === true){
                    var valstep = value - step-1;
                    var timeout = 0;
                    if (delay === false){
                        delay = 10;
                    }
                    for (var i=value; i > valstep; i--){
                        setTimeout((function (m) {
                            return function(){
                                input_plugin_number.val(m);
                                numb.val(m);
                                input_plugin_number.attr('value', m);
                                numb.val(m);
                                numb.attr('value', m);
                                numb.click();
                            }
                        })(i),timeout);
                        timeout +=delay;
                    }
                }
            } else {
                input_plugin_number.val(value);
                input_plugin_number.attr('value', value);
                numb.val(value);
                numb.attr('value', value);
                numb.click();
            }
        }else {
            if (animate === false){
                input_plugin_number.val(value - step);
                input_plugin_number.attr('value', value - step);
                numb.val(value - step);
                numb.attr('value', value - step);
                numb.click();
            }else if(animate === true){
                var valstep = value - step-1;
                var timeout = 0;
                if (delay === false){
                    delay = 10;
                }
                for (var i=value; i > valstep; i--){
                    setTimeout((function (m) {
                        return function(){
                            input_plugin_number.val(m);
                            numb.val(m);
                            input_plugin_number.attr('value', m);
                            numb.val(m);
                            numb.attr('value', m);
                            numb.click();
                        }
                    })(i),timeout);
                    timeout +=delay;
                }
            }
        }
    });
    $(document).on('keypress', '.input_plugin_number', function () {
        var thi = $(this);
        setTimeout(function () {
            thi.val(thi.val().replace(/[a-zA-Z а-яА-Я]/,""));
        },100);
        console.log(thi.val());
    });
     $(document).on('click', '.input_plugin_number', function () {
         $('.input_plugin_number').change(function(){
             $(this).val($(this).val().replace(/[a-zA-Z а-яА-Я]/,""));
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
                'height': '35px',
                'negative' : false,
                'step' : 1,
                'animate' : false,
                'delay' : false
            }, options);
        return this.each(function() {
            $(this).css('display', 'none');
            if ($(this).siblings('.main_number_plugin').length == 0){
            var value = $(this).val();
                negative = settings['negative'];
                step = settings['step'];
                animate = settings['animate'];
                delay = settings['delay'];
            $(this).after("<div class='main_number_plugin' style='width: " + settings['width'] + "'><input type='text' pattern='[0­9]*' value='" + value + "' class='input_plugin_number' style='width: " + settings['width'] + "; height: " + settings['height'] + "'><div class='plus_plugin_number'></div><div class='minus_plugin_number'></div></div>");
            }
            });
    };
})(jQuery);