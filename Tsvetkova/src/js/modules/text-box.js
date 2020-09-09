const textBox = {
    data: {
        el: {
            textBox: 'text-box',
        },
    },
    init() {
        const textBoxes = document.getElementsByClassName(this.data.el.textBox);

        for (let t = 0; t < textBoxes.length; t++) {
            this.parseTextBox(textBoxes[t]);
        }
    },
    parseTextBox(box) {
        const pasteSpans = box.getElementsByClassName('redactor-invisible-space');
        // console.log('begin:', pasteSpans)
        if (pasteSpans) {
            for (let i = 0; i < pasteSpans.length; i++) {
                let brs = pasteSpans[i].getElementsByTagName('br');
                while (brs.length) {
                    brs[0].parentNode.removeChild(brs[0]);
                }

                pasteSpans[i].innerHTML = pasteSpans[i].innerHTML.trim();
            }

            for (let n = 0; n < 10; n++) {
                for (let i = 0; i < pasteSpans.length; i++) {
                    this.emptySpan(pasteSpans[i]);
                }
                for (let i = 0; i < pasteSpans.length; i++) {
                    this.unwrap(pasteSpans[i]);
                }
            }
            // console.log('result:', pasteSpans)
        }

        const images = box.getElementsByTagName('img');
        if (images) {
            for (let i = 0; i < images.length; i++) {
                this.removeExcess(images[i], box, 'img');
                this.replaceImage(images[i], box);
            }
        }

        const iframes = box.getElementsByTagName('iframe');
        if (iframes) {
            for (let i = 0; i < iframes.length; i++) {
                this.removeExcess(iframes[i], box, 'iframe');
                this.replaceIframe(iframes[i], box);
            }
        }
    },
    removeExcess(box, parent, tag) {
        if (tag == 'img') {
            box.style.margin = '';
        }
        if (tag == 'iframe') {
            box.removeAttribute('style');
        }

        let boxParent = box.parentNode;
        if (boxParent.tagName === 'P') {
            parent.insertBefore(box, boxParent);
            boxParent.remove();
        }
    },
    replaceImage(img, parent) {
        if (img.style.float) {
            let float = img.style.float,
                figure = document.createElement('figure');

            parent.insertBefore(figure, img);
            figure.appendChild(img);
            figure.classList.add(`align-${float}`);
        }
    },
    replaceIframe(img, parent) {
        const video = document.createElement('div');

        parent.insertBefore(video, img);
        video.appendChild(img);
        video.classList.add('video');
    },
    unwrap(wrapper) {
        let docFragment = document.createDocumentFragment();
        if (wrapper.firstChild) {
            let child = wrapper.removeChild(wrapper.firstChild);
            docFragment.appendChild(child);

            wrapper.parentNode.replaceChild(docFragment, wrapper);
        }
    },
    emptySpan(wrapper) {
        if (wrapper.firstChild == null) {
            wrapper.remove();
        }
    },
};

module.exports = textBox;
