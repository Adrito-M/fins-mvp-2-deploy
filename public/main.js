
function popupSignin () {
    const bodyChildren = document.querySelector('body').children
    for (const child of bodyChildren) {
        if (child.id != 'modal') child.style.filter = "blur(8px)"
    }
    document.querySelector('#modal').style.display = 'block'
}

// popupSignin()