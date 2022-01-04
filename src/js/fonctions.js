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
        translateX: [{value: '500', duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
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