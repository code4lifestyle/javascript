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

    // Example 6 
    document.getElementById('clickMeButton').addEventListener
    ('click', function(){
        alert('hey i am event handler');
    });

    // Example 7
    document.getElementById('teaList').addEventListener('click',function(e){
        if(e.target && e.target.matches('.teaItem') ){
            alert('you selected :' + e.target.textContent);
        }
    });
    // Example 8
    document.getElementById('feedbackForm').addEventListener('submit', function(e){
        e.preventDefault();
       let feedBack =  document.getElementById('feedbackInput').value;
       document.getElementById('feedbackDisplay').textContent = `feedback is: ${feedBack}`
    });
    // Example 9
    document.addEventListener('DOMContentLoaded', function(){
        document.getElementById('domStatus').textContent = "Dom fully loaded"
    })