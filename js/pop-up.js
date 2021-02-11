var magnify_area = document.getElementById('magnify_area')
var magnify_image = document.getElementById('magnify_image')

magnify_area.addEventListener('mousemove', function(event) {
    clientX = event.clientX - magnify_area.offsetLeft
    clientY = event.clientY - magnify_area.offsetTop

    mWidth = magnify_area.offsetWidth
    mHeight = magnify_area.offsetHeight

    clientX = (clientX / mWidth) * 100
    clientY = (clientY / mHeight) * 100

    magnify_image.style.transform =
        'translate(-' + clientX + '%, -' + clientY + '% ) scale(2)'
        // magnify_image.style.transform = 'translate(-50%, -50%) scale(2)';
})
magnify_area.addEventListener('mouseleave', function() {
    magnify_image.style.transform = 'translate(-50%, -50%) scale(1)'
})