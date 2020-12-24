var position = 'left';

var overlay = $('.overlay');
var first = $('first');
var second = $('second');
var third = $('third');

document.getElementById('clickid').addEventListener('click', function () {
    if (position === 'left') {
        var slideProp = { left: '-100%' };
        overlay.css({
            left: '100%',
            opacity: 1
        })
        position = 'right';
    } else {
        var slideProp = { right: '-100%' };
        overlay.css({
            right: '100%',
            opacity: 1
        })
        position = 'left';
    }

    TweenMax.to('.first', 1.5, {
        delay: .2,
        repeat: 1,
        ...slideProp,
        ease: Expo.easeInOut,
        onComplete: function(){
            TweenLite.set('.first', {clearProps:"all"});
        }
    });

    TweenMax.to('.second', 1.5, {
        delay: .4,
        repeat: 1,
        ...slideProp,
        ease: Expo.easeInOut,
        onComplete: function(){
            TweenLite.set('.second', {clearProps:"all"});
        }
    });

    TweenMax.to('.third', 1.5, {
        delay: .6,
        repeat: 1,
        ...slideProp,
        ease: Expo.easeInOut,
        onComplete: function(){
            TweenLite.set('.third', {clearProps:"all"});
        }
    });
});


















