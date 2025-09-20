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

})