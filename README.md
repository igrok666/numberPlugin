# numberPlugin
Плагин для стилизации input type=number


    для подключения плагина добавьте в head
    ```<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="number_plugin/number_plugin.js" type="text/javascript"></script>
    <link href="number_plugin/number_plugin.css" type="text/css" rel="stylesheet">```
    
    Создайте элемент типа input type="number"
    ```<input type="number" class="numb" id="1" value="1">```
    
    В файле с JavaScript 
    ```$(document).ready(function () {
        $('.numb').number_plugin();
    });```
