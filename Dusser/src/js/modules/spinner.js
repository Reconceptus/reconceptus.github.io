const spinner = {
    changeCount(el, inp, increase){
        let spinner_result = +inp.val();
        if (spinner_result == 1) {
            increase ? spinner_result++ : '';
        } else if (spinner_result == 9999) {
            !increase ? spinner_result-- : '';
        } else if (spinner_result > 1) {
            increase ? spinner_result++ : spinner_result--;
        }
        inp.val(spinner_result);
        el.text(spinner_result);
    },
    apply(el){
        const _this = el,
            spinner_minus = _this.find('.minus'),
            spinner_plus = _this.find('.plus'),
            spinner_result_box = _this.find('.total'),
            spinner_result_value = _this.find('.total-value');

        spinner_minus.click(() => {
            this.changeCount(spinner_result_box, spinner_result_value, false);
        });
        spinner_plus.click(() => {
            this.changeCount(spinner_result_box, spinner_result_value, true);
        });
        spinner_result_value.keyup(() => {
            if(spinner_result_value.val() == ''){
                spinner_result_value.val(1)
            }
            if(spinner_result_value.val() > 9999){
                spinner_result_value.val(9999)
            }
            spinner_result_box.text(spinner_result_value.val())
        })
    },
    init(){
        let spinners = $('.spinner'),
            that = this;

        spinners.each(function () {
            that.apply($(this));
        })
    },

};

module.exports = spinner;
