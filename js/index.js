const soundCloud = document.querySelector('.sound-cloud');
const off = document.querySelector('#off');
const on = document.querySelector('#on');
const myAudio = document.querySelector('#myAudio');

off.addEventListener('click', () => soundTrack('off'));
on.addEventListener('click', () => soundTrack('on'));

const soundTrack = (soundState) => {
    if(soundState === 'off'){
        on.style.display = 'block';
        off.style.display = 'none';
        soundCloud.style.color = "#08fdd8";
        myAudio.play();
    }
    else if(soundState === 'on'){
        on.style.display = 'none';
        off.style.display = 'block';
        soundCloud.style.color = "#f50057";
        myAudio.pause();
    }
}

// Play Music

const btnBars = document.querySelector('.bars');
const btnTimes = document.querySelector('.times');
const SideNav = document.querySelector('.aside');


btnBars.addEventListener('click', () => myFunc('open'));
btnTimes.addEventListener('click', () => myFunc('close'));

const myFunc = (navCondition) => {
    if(navCondition === 'open'){
        SideNav.classList.add('show-nav');
        btnTimes.style.display = "block";
        btnBars.style.display = "none";
    }
    else if(navCondition === 'close'){
            SideNav.classList.remove('show-nav');
            btnTimes.style.display = "none";
            btnBars.style.display = "block";
    }
}
(function() {
    function C() {
        e.globalCompositeOperation = "source-over";
        e.fillStyle = "rgba(8,8,12,0.65)";
        e.fillRect(0, 0, f, p);
        e.globalCompositeOperation = "lighter";
        x = q - u;
        y = r - v;
        u = q;
        v = r;
        for (var d = 0.86 * f, l = 0.125 * f, m = 0.5 * f, t = Math.random, n = Math.abs, o = z; o--;) {
            var h = A[o],
                i = h.x,
                j = h.y,
                a = h.a,
                b = h.b,
                c = i - q,
                k = j - r,
                g = Math.sqrt(c * c + k * k) || 0.001,
                c = c / g,
                k = k / g;
            if (w && g < m) var s = 14 * (1 - g / m),
                a = a + (c * s + 0.5 - t()),
                b = b + (k * s + 0.5 - t());
            g < d && (s = 0.0014 * (1 - g / d) * f, a -= c * s, b -= k * s);
            g < l && (c = 2.6E-4 * (1 - g / l) * f, a += x * c, b += y * c);
            a *= B;
            b *= B;
            c = n(a);
            k = n(b);
            g =
                0.5 * (c + k);
            0.1 > c && (a *= 3 * t());
            0.1 > k && (b *= 3 * t());
            c = 0.45 * g;
            c = Math.max(Math.min(c, 3.5), 0.4);
            i += a;
            j += b;
            i > f ? (i = f, a *= -1) : 0 > i && (i = 0, a *= -1);
            j > p ? (j = p, b *= -1) : 0 > j && (j = 0, b *= -1);
            h.a = a;
            h.b = b;
            h.x = i;
            h.y = j;
            e.fillStyle = h.color;
            e.beginPath();
            e.arc(i, j, c, 0, D, !0);
            e.closePath();
            e.fill()
        }
    }

    function E(d) {
        d = d ? d : window.event;
        q = d.clientX - m.offsetLeft - n.offsetLeft;
        r = d.clientY - m.offsetTop - n.offsetTop
    }

    function F() {
        w = !0;
        return !1
    }

    function G() {
        return w = !1
    }

    function H() {
        this.color = "rgb(" + Math.floor(255 * Math.random()) + "," + Math.floor(255 *
            Math.random()) + "," + Math.floor(255 * Math.random()) + ")";
        this.b = this.a = this.x = this.y = 0;
        this.size = 1
    }
    var D = 2 * Math.PI,
        f = 1E3,
        p = 560,
        z = 600,
        B = 0.96,
        A = [],
        o, e, n, m, q, r, x, y, u, v, w;
    window.onload = function() {
        try {
            var nlng = navigator.language || navigator.userLanguage;
            var lng = nlng.substr(0, 2).toLowerCase();
            if (lng == "ru" || lng == "uk" || lng == "be") document.getElementById("flw").innerHTML = ': <a href="https://www.twitter.com/spielzeugz" target="_blank">Twitter</a> / <a href="https://plus.google.com/116743952899287181520" target="_blank">G+</a> / <a href="https://vk.com/id266298870">VK</a>';
        } catch (e) {}
        o = document.getElementById("mainCanvas");
        if (o.getContext) {
            m = document.getElementById("outer");
            n = document.getElementById("canvasContainer");
            e = o.getContext("2d");
            for (var d = z; d--;) {
                var l = new H;
                l.x = 0.5 * f;
                l.y = 0.5 * p;
                l.a = 34 * Math.cos(d) * Math.random();
                l.b = 34 * Math.sin(d) * Math.random();
                A[d] = l
            }
            q = u = 0.5 * f;
            r = v = 0.5 * p;
            document.onmousedown =
                F;
            document.onmouseup = G;
            document.onmousemove = E;
            setInterval(C, 33);
        } else document.getElementById("output").innerHTML = "Sorry, needs a recent version of Chrome, Firefox, Opera, Safari, or Internet Explorer 9."
    }
})();


// Part 1 javascript functionality ends here
$(document).ready(function (){
    if(!$("#myCanvas").tagcanvas({
        textColour: "#08fdd8",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
    }, "tags")){
        // something went wrong hide the canvas container,
        $("#myCanvasContainer");
    }
})