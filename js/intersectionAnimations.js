export default function intersectionAnimations() {
    const anchors = document.querySelectorAll('[data-anchor]');
    let curElem = null;
    let prevElem = null;
    let linksMap = {};
    const observerHandler = (e) => {
        e.forEach((entry) => {
            if (entry.isIntersecting) {
                prevElem = curElem;
                curElem = entry.target;

                if (prevElem) {
                    linksMap[prevElem.dataset.anchor].classList.remove('active');
                }
                curElem.classList.add('move-in');
                linksMap[curElem.dataset.anchor].classList.add('active');
            }
        })

    }
    anchors.forEach(anchor => {
        linksMap[anchor.dataset.anchor] = document.querySelector(`[data-link="${anchor.dataset.anchor}"]`)
        const observer = new IntersectionObserver(observerHandler, {
            rootMargin: "0px",
            threshold: 0.6,
        })
        observer.observe(anchor);
    })
}
