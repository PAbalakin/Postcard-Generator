let states = document.getElementById('states');
states.onchange = function () {
// Anonymous function
console.log ('states index:' + states.selectedIndex)
// joins string state index and adds it to the text value of the dropdown
console.log ('states index:' + states.options[states.selectedIndex].text)
console.log ('img/' + states.value + '@2x.jpg')
document.getElementById('postcard').style.backgroundImage = 'url(img/' + states.value + '@2x.jpg)';
}
