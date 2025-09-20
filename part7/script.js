document.getElementById("changeTextButton")
.addEventListener('click', function(){
   let paragraph =  document.getElementById
   ('myParagraph');
    paragraph.textContent = "this peragraph is changed"
});

// Example 2
document.getElementById('highlighFirstCity').addEventListener('click', function(){
   let Cities =  document.getElementById('citieslist')
   (citieslist.firstElementChild.classList.add('highlight'))
});
// Example 3
document.getElementById('changeOrder').addEventListener('click', function(){
    document.getElementById('coffeType')
    coffeType.textContent = "Espresso";
});

// example 4

document.getElementById('addNewElement').addEventListener('click', function(){
   let newItem = document.createElement('li')
    newItem.textContent = 'eggs'
    document.getElementById('shoppingList').appendChild(newItem);
});

// Example 5 Removing DOM element
document.getElementById('removeLastTask').addEventListener('click',
    function(){
      let taskList =   document.getElementById('taskList');
      taskList.lastElementChild.remove();
    });