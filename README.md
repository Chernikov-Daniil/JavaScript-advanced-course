# Program-burger
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <form action="#" id='hamburger-form'>
    <fieldset id='hamburger-fieldset'>
      <h3 id='hamburger-top'>Составь свой бургер</h3>
      <fieldset class='hamburger-fieldset-inside'>
        <h4>Выбери размер бургера:</h4>
        <input type="radio" name='size' id='bigburger' value='Big' class='hamburger-input' data-price='100' data-calories='40' checked>
        <label for="bigburger">Большой (100 рублей, 40 калорий)</label><br>
        <input type="radio" name='size' id='smallburger' value='Small' class='hamburger-input' data-price='50' data-calories='20'>
        <label for="smallburger">Маленький (50 рублей, 20 калорий)</label>
      </fieldset>
      
      <fieldset class='hamburger-fieldset-inside'>
        <h4>Выбери начинку бургера:</h4>
        <input type="radio" name='add' id='cheese' value='Cheese' class='hamburger-input' data-price='10' data-calories='20' checked>
        <label for="cheese">Сыр(10 рублей, 20 калорий)</label><br>
        <input type="radio" name='add' id='salad' value='Salad' class='hamburger-input' data-price='20' data-calories='5'>
        <label for="salad">Салат(20 рублей, 5 калорий)</label><br>
        <input type="radio" name='add' id='potato' value='Potato' class='hamburger-input' data-price='15' data-calories='10'>
        <label for="potato">Картофель(15 рублей, 10 калорий)</label>
      </fieldset>
      
      <fieldset class='hamburger-fieldset-inside'>
        <h4>Выбери доп. опцию:</h4>
        <input type="checkbox" name='topings' id='seasoning' value='Spices' class='hamburger-input' data-price='15' data-calories='0'>
        <label for="seasoning" checked>Посыпать приправой (15 рублей, 0 калорий)</label><br>
        <input type="checkbox" name='topings' id='mayonnaise' value='Mayonnaise' class='hamburger-input' data-price='20' data-calories='5'>
        <label for="mayonnaise" checked>Полить майонезом (20 рублей, 5 калорий)</label>
      </fieldset><br>
      
      <div id='check'>Собрать бургер</div>
      
      <p id="result">Итоговая стоимость: <span id="price">0</span><br>
          Кол-во калорий: <span id="calories">0</span>
      </p>
    </fieldset>
  </form>
</body>
</html>
