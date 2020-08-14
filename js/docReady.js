$(document).ready(function(){
    // Pointer mask
    $('.hero').mousemove(function(e) {
        let screenProportions = Math.round(1920/941);
        let x = e.clientX;
        let y = e.clientY;
        if (Math.round(window.innerWidth/window.innerHeight) == screenProportions) {
            $('.masked').css('-webkit-mask-position-x', x - (window.innerWidth/3));
            $('.masked').css('-webkit-mask-position-y', y - (window.innerHeight * 0.05));
        }
        else {
            $('.masked').addClass('hidden');
        }
        //$('.pointer').addClass('hidden');
    });
    /*
    $('.hero').mouseout(function(e) {
        $('.pointer').removeClass('hidden');
    });
    $('.title-text').mousemove(function(e) {
    });
    */
    /*$
    (window).scroll(function() {
        let y = $('.masked').position().top;
        console.log(y);
        $('.masked').css('-webkit-mask-position-y', y + $(window).scrollTop()); 
    });
    */

    // Main title hover
    let mainTitleSpans = document.querySelectorAll('.title-text span');
    for (let i = 0; i < mainTitleSpans.length; i++) {
        mainTitleSpans[i].addEventListener('mouseover',
            function (e) {
                for (let j = 0; j < mainTitleSpans.length; j++) {
                    mainTitleSpans[j].style.color = '#C7161D';
                    mainTitleSpans[j].style.transition = '0.4s';
                }
            }
        );
        mainTitleSpans[i].addEventListener('mouseout',
            function (e) {
                for (let j = 0; j < mainTitleSpans.length; j++) {
                    mainTitleSpans[j].style.color = '#000';
                    mainTitleSpans[j].style.transition = '0.2s';
                }
            }
        );
    }
    
    // Countdown
    let endOfCampaign = new Date("Aug 16, 2020 23:59:00").getTime();
    let x = setInterval(function() {
        let now = new Date().getTime();

        let distance = endOfCampaign - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let timeMeasures = [days,hours,minutes,seconds];
        for (let i = 0; i < timeMeasures.length; i++) {
            timeMeasures[i] = ('0' + timeMeasures[i]).slice(-2);
        }

        document.querySelector(".days").innerHTML = timeMeasures[0];
        document.querySelector(".hours").innerHTML = timeMeasures[1];
        document.querySelector(".minutes").innerHTML = timeMeasures[2];
        document.querySelector(".seconds").innerHTML = timeMeasures[3];
    }, 1000);
});