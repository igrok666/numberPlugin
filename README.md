# numberPlugin
Плагин для стилизации input type=number

Preview link https://igrok666.github.io/

для подключения плагина добавьте в head
```html
//html code
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="number_plugin/number_plugin.js" type="text/javascript"></script>
<link href="number_plugin/number_plugin.css" type="text/css" rel="stylesheet">
```
    
Создайте элемент типа input type="number"
```html
//html code
<div>
<input type="number" class="numb" id="1" value="1">
</div>
```
Обратите внимание на то что input-ы должны быть в **разных блоках**!

В файле с JavaScript 
```js
//js code
$(document).ready(function () {
    $('.numb').number_plugin();
});
```

Функции **Number plugin**

```
$('.numb').number_plugin({
               width: '65px', //ширина инпута на выводе (по умолчанию 65px редактируется как тут так и через css)
               height: '35px', //высота инпута на выходе (по умолчанию 35px редактируется как тут так и через css)
               negative: true, //включение поддержки отрицательных чисел (по умолчанию false)
               step: 20, //шаг прибавления и убавления (по умолчанию 1)
               animate: true, //включение анимации прибавления и вычитания (по умолчанию false)
               delay: 100, //задержка анимации между прибавлениями (по умолчанию 10ms)
               max: 100, //максимальное значение(по умолчанию false)
               min: 20, //минимальное значение(по умолчанию false)
           });
```
