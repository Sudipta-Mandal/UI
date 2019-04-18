// Triangle One
var textBoxOne = document.querySelector('#triangleOne');
var displayTextOne = document.querySelector('#triangleOneText');
textBoxOne.addEventListener('keyup',function() {
    var textEntered = textBoxOne.value;
    displayTextOne.textContent = triangleOne(textEntered);
});
