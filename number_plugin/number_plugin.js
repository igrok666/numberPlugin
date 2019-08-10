/*
name project: number_plugin
version: 1.12
author: https://t.me/Progwtf
Присылайте свои предложения по доработке этого плагина и разработке других плагинов
*/

(function( $ ) {
    var negative;
    var step;
    var animate;
    var delay;
    var max;
    var min;
    $(document).on('click', '.plus_plugin_number', function () {
        var input_plugin_number = $(this).parent().find('.input_plugin_number');
        var value = parseInt(input_plugin_number.val());
        var numb = $(this).parent().prev();
        if (max){
            if (value+1 > max) {
                return;
            }
        }
        if (animate === false){
            input_plugin_number.val(value+step);
            numb.val(value+step);
            input_plugin_number.attr('value', value+step);
            numb.val(value+step);
            numb.attr('value', value+step);
            numb.click();
        }
        else if(animate === true){
            var valstep = value + step;
            var timeout = 0;
            if(max){
                if(valstep > max){
                    valstep = max;
                }
            }
            if (delay === false){
                delay = 10;
            }
            for (var i=value; i<= valstep; i++){
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
        var numb = $(this).parent().prev();
        if (min){
            if (value-1 < min) {
                return;
            }
        }
        if (negative === false) {
            if (value > 1 && value > step) {
                if (animate === false){
                    input_plugin_number.val(value - step);
                    input_plugin_number.attr('value', value - step);
                    numb.val(value - step);
                    numb.attr('value', value - step);
                    numb.click();
                }else if(animate === true){
                    var valstep = value - step;
                    var timeout = 0;
                    if(min){
                        if(valstep < min){
                            valstep = min;
                        }
                    }
                    if (delay === false){
                        delay = 10;
                    }
                    for (var i=value; i >= valstep; i--){
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
            }else if(animate === true){
                var valstep = value - step;
                var timeout = 0;
                if(valstep < min){
                    valstep = min;
                }
                if (delay === false){
                    delay = 10;
                }
                for (var i=value; i >= valstep; i--){
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
                'delay' : false,
                'max': false,
                'min': false,
                'class' : false,
				'style' : 'classic'
            }, options);
        return this.each(function() {
            $(this).wrap('<div></div>')
            $(this).css('display', 'none');
            if ($(this).siblings('.main_number_plugin').length == 0){
            var value = $(this).val();
                negative = settings['negative'];
                step = settings['step'];
                animate = settings['animate'];
                delay = settings['delay'];
                max = settings['max'];
                min = settings['min'];
                custom_class = settings['class'];
                if(value < min){
                    value = min;
                    $(this).val(min);
                }
                if(custom_class === false){
                    $(this).after("<div class='main_number_plugin " + settings['style'] + "' style='width: " + settings['width'] + "'><input type='text' pattern='[0­9]*' value='" + value + "' class='input_plugin_number' style='width: " + settings['width'] + "; height: " + settings['height'] + "'><div class='plus_plugin_number'></div><div class='minus_plugin_number'></div></div>");
                }else{
                    $(this).after("<div class='main_number_plugin " + settings['style'] + "' style='width: " + settings['width'] + "'><input type='text' pattern='[0­9]*' value='" + value + "' class='input_plugin_number " + custom_class + "' style='width: " + settings['width'] + "; height: " + settings['height'] + "'><div class='plus_plugin_number'></div><div class='minus_plugin_number'></div></div>");
                }

            }
            });
    };
})(jQuery);
