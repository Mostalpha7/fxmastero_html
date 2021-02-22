var magnify_area = document.getElementById('magnify_area')
var magnify_image = document.getElementById('magnify_image')
var isClicked = true

magnify_area.addEventListener('click', function(event) {
    if (isClicked) {
        isClicked = false
        clientX = event.clientX - magnify_area.offsetLeft
        clientY = event.clientY - magnify_area.offsetTop

        mWidth = magnify_area.offsetWidth
        mHeight = magnify_area.offsetHeight

        clientX = (clientX / mWidth) * 100
        clientY = (clientY / mHeight) * 100

        magnify_image.style.transform =
            'translate(-' + clientX + '%, -' + clientY + '% ) scale(2)'
    } else {
        isClicked = true
        magnify_image.style.transform = 'translate(-50%, -50%) scale(1)'
    }
})

magnify_area.addEventListener('mouseleave', function() {
    if (isClicked) {
        magnify_image.style.transform = 'translate(-50%, -50%) scale(1)'
    }
})

// Open screen
function createPopupWin(pageURL, pageTitle, popupWinWidth, popupWinHeight) {
    var left = (screen.width - popupWinWidth) / 2
    var top = (screen.height - popupWinHeight) / 4

    // var myWindow = window.open(
    //     pageURL,
    //     pageTitle,
    //     'resizable=yes, width=' +
    //     popupWinWidth +
    //     ', height=' +
    //     popupWinHeight +
    //     ', top=' +
    //     top +
    //     ', left=' +
    //     left
    // )
    window.open(pageURL, '_blank')
}