
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuIcon = document.getElementById('menuIcon');
    
    navLinks.classList.toggle('active');
    
    // আইকন পরিবর্তন
    if (navLinks.classList.contains('active')) {
        menuIcon.innerHTML = '✕'; // ক্লোজ আইকন
    } else {
        menuIcon.innerHTML = '☰'; // ওপেন আইকন
    }
}