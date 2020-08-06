$(document).ready(function(){
    // Pointer mask
    /*
    let leftX = Math.round(0.82 * screen.width);
    let rightX = Math.round(0.93 * screen.width);
    let topY = Math.round(0.07 * screen.height);
    let bottomY = Math.round(0.21 * screen.height);
    */

    $('.hero').mousemove(function(e) {
        let x = e.clientX;
        let y = e.clientY;
      
        $('.masked').css('-webkit-mask-position-x', x - 642);
        $('.masked').css('-webkit-mask-position-y', y - 76);
        
        /*
        if (e.clientX > leftX && e.clientX < rightX
            &&
            e.clientY > topY && e.clientY < bottomY)
        {
            $('.easter-egg').css('display', 'inline-block');
            $('.masked').css('display', 'none');
        }
        else {
            $('.easter-egg').css('display', 'none');
            $('.masked').css('display', 'inline-block');
        }
        */
    });

    // Countdown
    let endOfCampaign = new Date("Aug 07, 2020 19:00:00").getTime();
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

    // Main title hover
    let mainTitleSpans = document.querySelectorAll('.main-title span');
    for (let i = 0; i < mainTitleSpans.length; i++) {
        mainTitleSpans[i].addEventListener('mouseover',
            function (e) {
                for (let j = 0; j < mainTitleSpans.length; j++) {
                    mainTitleSpans[j].style.color = '#C7161D';
                    mainTitleSpans[j].style.transition = '0.6s';
                }
            }
        );
        mainTitleSpans[i].addEventListener('mouseout',
            function (e) {
                for (let j = 0; j < mainTitleSpans.length; j++) {
                    mainTitleSpans[j].style.color = '#000';
                    mainTitleSpans[j].style.transition = '0.3s';
                }
            }
        );
    }

    // Bust hover -> hide pointer
    let masked = document.querySelector('.masked');
    let pointer = document.querySelector('.pointer');
    masked.addEventListener('mouseover',
        function (e) {
            pointer.style.display = "none";
        }
    );
    masked.addEventListener('mouseout',
        function (e) {
            pointer.style.display = "block";
            masked.style.opacity = 0;
        }
    );
});