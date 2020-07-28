const expander = {
    data: {
        el: {
            expander: 'expander',
            toggle: 'expander-toggle',
            box: 'expander-box',
            boxInner: 'expander-box_inner',
        },
        val: {},
    },
    init() {
        const expanders = document.getElementsByClassName(this.data.el.expander);

        for (let e = 0; e < expanders.length; e++) {
            this.expanderHandler(expanders[e]);
        }
    },
    expanderHandler(exp) {
        let toggler = exp.getElementsByClassName(this.data.el.toggle)[0],
            box = exp.getElementsByClassName(this.data.el.box)[0],
            boxInner = exp.getElementsByClassName(this.data.el.boxInner)[0];

        box.style.maxHeight = boxInner.offsetHeight + 'px';

        window.addEventListener('resize', function(event) {
            box.style.maxHeight = boxInner.offsetHeight + 'px';
        });

        toggler.addEventListener('click', () => {
            exp.classList.toggle('expanded');
        });
    },
};

module.exports = expander;
