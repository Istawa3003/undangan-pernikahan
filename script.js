// Inisialisasi AOS
AOS.init({
    duration: 1500,
    once: true
});

// Fitur Nama Tamu
const urlParams = new URLSearchParams(window.location.search);
const to = urlParams.get('to');
if (to) {
    document.getElementById('guest-name').innerText = to;
}

// Buka Undangan
function openInvitation() {
    const welcome = document.getElementById('welcome-screen');
    const main = document.getElementById('main-content');
    
    welcome.style.transform = 'translateY(-100%)';
    main.style.display = 'block';
    
    setTimeout(() => {
        welcome.style.display = 'none';
        window.scrollTo(0, 0);
    }, 1500);
}

// Countdown Pernikahan (17 Des 2025)
const target = new Date("Dec 17, 2025 08:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = target - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
}, 1000);
