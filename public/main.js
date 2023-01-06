
let hamBtn = document.getElementById('button-icon');
window.addEventListener("resize", function(e) {
    let bottomLinks = document.getElementById("bottom-links");
    if(window.innerWidth > 768) bottomLinks.style.display = 'none';
});
hamBtn.addEventListener('click', function (e) {
    let bottomLinks = document.getElementById("bottom-links");
    if(bottomLinks.style.display == 'none'){
        bottomLinks.style.display = "flex";
    }else{
        bottomLinks.style.display = "none";
    }
})

function popupSignin () {
    const bodyChildren = document.querySelector('body').children
    for (const child of bodyChildren) {
        if (child.id != 'modal') child.style.filter = "blur(8px)"
    }
    document.querySelector('#modal').style.display = 'block'
}

// popupSignin()