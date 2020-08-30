const contactPageScroll = {
    data: {
        el: {
            addressBox: '.contact-page_address',
            linkSelector: '.header-contact_link[href*="#form"]',
        },
    },
    init() {
        const addressBox = document.querySelector(this.data.el.addressBox);

        if (addressBox) {
            this.checkForAnchor(addressBox);
            this.clickEvent(addressBox);
        }
    },
    checkForAnchor(addr) {
        const urlHash = window.location.hash;
        if (urlHash === '#form') {
            let offset = this.getElementOffsetTop(addr),
                height = addr.clientHeight,
                scrollTop = offset + height;
            setTimeout(() => {
                window.scrollTo(0, scrollTop);
            }, 500);
        }
    },
    getElementOffsetTop(el) {
        const rect = el.getBoundingClientRect();
        this.data.scrollTop = window.pageYOffset;

        return rect.top + window.pageYOffset;
    },
    clickEvent(addr) {
        const link = document.querySelector(this.data.el.linkSelector);
        link.addEventListener('click', e => {
            e.preventDefault();
            let offset = this.getElementOffsetTop(addr),
                height = addr.clientHeight,
                scrollTop = offset + height;

            window.scrollTo(0, scrollTop);
        });
    },
};

module.exports = contactPageScroll;
