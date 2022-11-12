window.addEventListener('DOMContentLoaded', function() {

    let video = document.querySelector('.video');
    let back = document.querySelector('.back');

    video.addEventListener('click', function() {

        if(video.classList.contains('ready')){
            return;
        }

        video.classList.add('ready');
        back.parentElement.removeChild(back);

        video.insertAdjacentHTML('afterbegin', '<iframe src="https://www.youtube.com/embed/JqhLqBPwjvo?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');





    });

});

