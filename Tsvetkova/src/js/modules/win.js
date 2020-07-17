const win = {
    data: {
        el: {
            window: 'window',
        },
        val: {
            height: null,
            width: null,
            scrollTop: null,
        },
    },
    init() {
        this.data.val.width = window.innerWidth;

        this.setToGlobal(this.data.val.width);
    },
    setToGlobal(w, h, st) {
        window.winWidth = w;
    },
};

module.exports = win;
