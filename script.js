console.log('Javascript is ON')

// Javascript to do:
// Change colour to the buttons, maybe add a box so the user can choose different colours. (Hint: QuerySelectorAll will gather all the elements, AddClass will create a new class (name it red-color which will make the colour red) (maybe add a return on the function)

// Line below is where the color changes happen
function changeColor() {
    console.log(colorChangeButton.classList)
    if (
        colorChangeButton.classList.contains('color-change-start')
    ) {
        colorChangeButton.classList.remove('color-change-start')
        colorChangeButton.classList.add('color-change-end')
    }
    else {
        colorChangeButton.classList.remove('color-change-end')
        colorChangeButton.classList.add('color-change-start')
    }
}

const colorChangeButton = document.getElementById('color-change')
colorChangeButton.addEventListener('click', changeColor)
