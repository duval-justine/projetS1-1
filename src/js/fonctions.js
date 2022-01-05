/* Carousel de l'article 1 */

function carrousel1() {
    
	var images1 = document.querySelectorAll('.image1');
    let d = 2000;
    let delta = 1000;

    images1.forEach(function(img,indice) {
        img.style.zIndex = images1.length - indice;
    });

    let anim1 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim1.add({
        targets: images1,
        translateX: [{value: '197', duration: d},
                     {value: '-197', duration: 0, delay: function(img,ind) {
                         if (ind == 0) return (3*delta)+(2*d);
                         if (ind == 1) return (2*delta)+d;
                         if (ind == 2) return delta;
                         return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 3) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            if (ind == 2) return (3*delta)+(2*d);
            return (4*delta)+(3*d);
        }
    });
}

/* Carousel de l'article 2 */

function carrousel2() {
	var images2 = document.querySelectorAll('.image2');
    let d = 2000;
    let delta = 500;

    images2.forEach(function(img,indice) {
        img.style.zIndex = images2.length - indice;
    });

    let anim2 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim2.add({
        targets: images2,
        translateX: [{value: '500', duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
                        if (ind == 0) return (8*delta)+(7*d);
                        if (ind == 1) return (7*delta)+(6*d);
                        if (ind == 2) return (6*delta)+(5*d);
                        if (ind == 3) return (5*delta)+(4*d);
                        if (ind == 4) return (4*delta)+(3*d);
                        if (ind == 5) return (3*delta)+(2*d);
                        if (ind == 6) return (2*delta)+d;
                        if (ind == 7) return delta;
                        return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 8) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            if (ind == 2) return (3*delta)+(2*d);
            if (ind == 3) return (4*delta)+(3*d);
            if (ind == 4) return (5*delta)+(4*d);
            if (ind == 5) return (6*delta)+(5*d);
            if (ind == 6) return (7*delta)+(6*d);
            if (ind == 7) return (8*delta)+(7*d);
            return (10*delta)+(9*d);
        }
    });
}

/* Légende */

function monterLegende(c) {
    document.querySelector('.'+c).style.display = 'block';
    return anime({
        targets: '.'+c,
        translateY: '-3em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function descendreLegende() {
    document.querySelector('.legendetexte').style.display = 'block';
    return anime({
        targets: '.legendetexte',
        translateY: '0em',
        autoplay: true,
        easing: 'linear',
        duration: 1000
    }).play;
}