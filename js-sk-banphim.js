
function upArrowPressed(){
    var element = document.getElementById('doreamon');
    element.style.top=parseInt(element.style.top) - 20 + 'px';
}
function downArrowPressed(){
    var element= document.getElementById('doreamon');
    element.style.top=parseInt(element.style.top) + 20 + 'px';
}
function  leftArrowPressed(){
    var  element = document.getElementById('doreamon');
    element.style.left=parseInt(element.style.left) - 20 + 'px';
}
function rightArrowPressed(){
    var element = document.getElementById('doreamon');
    element.style.left = parseInt(element.style.left) + 20 + 'px';
}
function moveSelection(evt){
    switch (evt.keyCode){
        case 37:
        case 100:
        case 65:
            leftArrowPressed();
            break;
        case 39:
        case 102:
        case 68:
            rightArrowPressed();
            break;
        case 38:
        case 87:
        case 104:
            upArrowPressed();
            break;
        case 40:
        case 83:
        case 98:
            downArrowPressed();
            break;
    }
}
function docReady(){
    window.addEventListener('keydown',moveSelection);
}