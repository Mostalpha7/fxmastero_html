swapButton.addEventListener('click', () => {
    var x = document.getElementById('profile_content')
    var y = document.getElementById('profile_form')

    if (x.style.display === 'none') {
        x.style.display = 'block'
        y.style.display = 'none '
    } else {
        x.style.display = 'none'
        y.style.display = 'block '
    }
})

function changeDisplay() {}