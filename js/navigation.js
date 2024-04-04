export default  function navigation() {
    const links = document.querySelectorAll('[data-link]');
    links.forEach(link => {
        const anchorClickHandler = (e) => {
            const anchorRect = document.querySelector(`[data-anchor="${e.target.dataset.link}"]`).getBoundingClientRect()

            const moveToY = window.scrollY - window.innerHeight / 2 + anchorRect.y + anchorRect.height / 2;
            window.scrollTo({
                top: moveToY,
                behavior: "smooth",
            })
        }

        link.addEventListener('click', anchorClickHandler);
    })
}
