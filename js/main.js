
const accordionBtns = document.querySelectorAll(".panel");

accordionBtns.forEach((accordion) => {
    accordion.onclick = function () {
        this.classList.toggle('is-open');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        }
        else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
        hideAll(this);
    };
});

function hideAll(exceptThis) {
    for (let i = 0; i < accordionBtns.length; i++) {
        if (accordionBtns[i] !== exceptThis) {
            accordionBtns[i].classList.remove('is-open');
            let content = accordionBtns[i].nextElementSibling;
            content.style.maxHeight = null;
        }
    }
}