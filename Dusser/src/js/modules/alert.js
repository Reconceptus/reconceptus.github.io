const alert = {
    data: {
        attr: {
            type: 'data-alert-type'
        },
        icon: 'info',
        type: 'success',
        timer(){}
    },
    open(text, type, icon) {
        window.clearTimeout(this.data.timer);
        const _alert = $('.alert'),
            _section = _alert.find('.alert-section'),
            _text = _alert.find('.alert-text'),
            _icon = _alert.find('.alert-icon');

        this.clearAlert(_alert,_section,_text,_icon);

        !!text ? _text.html(text) : '';

        const _type = !!type ? type : this.data.type;
        _section.attr(this.data.attr.type,_type);

        const _iconID = !!icon ? icon : this.data.icon;
        _icon.html(this.createSvg(_iconID));

        _alert.addClass('active');

        this.data.timer = setTimeout(() => this.clearAlert(_alert,_section,_text,_icon),5000);

    },
    createSvg(id){
        let svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
            useElem = document.createElementNS('http://www.w3.org/2000/svg', 'use');

        useElem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#icon-' + id);

        svgElem.appendChild(useElem);

        return svgElem;
    },
    check(al,sec,tx,i){

    },
    clearAlert(al,sec,tx,i){
        al.removeClass('active');
        sec.attr(this.data.attr.type,'');
        tx.html('');
        i.html('');
    },
};

module.exports = alert;
