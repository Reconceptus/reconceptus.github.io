const spinner = function() {
    let spinners = document.querySelectorAll('.spinner');

    function changeCount(el, increase) {
        let spinner_result = +el.dataset.total;
        if (spinner_result == 1) {
            increase ? spinner_result++ : '';
        } else if (spinner_result > 1) {
            increase ? spinner_result++ : spinner_result--;
        }
        el.dataset.total = spinner_result;
    }

    for (const spinner of spinners) {
        const spinner_minus = spinner.getElementsByClassName('minus')[0],
            spinner_plus = spinner.getElementsByClassName('plus')[0],
            spinner_result_box = spinner.getElementsByClassName('total')[0];

        spinner_minus.addEventListener('click', function() {
            changeCount(spinner_result_box, false);
        });
        spinner_plus.addEventListener('click', function() {
            changeCount(spinner_result_box, true);
        });
    }
};

module.exports = spinner;
