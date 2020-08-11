const ovh = {
    init() {
        window.fn.ovh.enable = () => this.add();
        window.fn.ovh.disable = () => this.remove();
    },
    add() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        setTimeout(() => {
            document.documentElement.classList.add('ovh');
            document.body.style.marginTop = `${-1 * scrollTop}px`;
            document.body.dataset.scroll = scrollTop;
            document.getElementById('header').style.marginTop = `${scrollTop}px`;
        }, 10);
    },
    remove() {
        const scrollTop = document.body.dataset.scroll;

        document.documentElement.classList.remove('ovh');
        document.body.style.marginTop = '';
        document.body.dataset.scroll = '';
        document.getElementById('header').style.marginTop = '';

        window.scrollTo({top: scrollTop});
    },
};

module.exports = ovh;
