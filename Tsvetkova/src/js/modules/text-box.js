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
        const images = box.getElementsByTagName('img');
        if (images) {
            for (let i = 0; i < images.length; i++) {
                this.removeExcess(images[i], box);
                this.replaceImage(images[i], box);
            }
        }

        const iframes = box.getElementsByTagName('iframe');
        if (iframes) {
            for (let i = 0; i < iframes.length; i++) {
                this.replaceIframe(iframes[i], box);
            }
        }

        const pasteSpans = box.getElementsByClassName('redactor-invisible-space');
        if (pasteSpans) {
            for (let i = 0; i < pasteSpans.length; i++) {
                this.unwrap(pasteSpans[i]);
            }
        }
    },
    removeExcess(box, parent) {
        box.style.margin = '';

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
            if (wrapper.firstChild.nodeName == 'BR') {
                wrapper.remove();
            } else {
                let child = wrapper.removeChild(wrapper.firstChild);
                docFragment.appendChild(child);

                wrapper.parentNode.replaceChild(docFragment, wrapper);
            }
        }
    },
};

module.exports = textBox;
