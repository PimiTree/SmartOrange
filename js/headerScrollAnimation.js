export default function headerScrollAnimation() {
    const header = document.querySelector('.sct-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 50) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    })
}
