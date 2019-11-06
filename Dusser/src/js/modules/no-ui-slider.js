import 'nouislider';
import 'wnumb';
// import 'nouislider/distribute/nouislider.css';

const no_ui_slider = function() {
    let sliders = document.querySelectorAll('.range-slider');
    for (const slider of sliders) {
        const slider_box = slider.getElementsByClassName('no-ui-slider')[0],
            first_input = slider.getElementsByTagName('input')[0],
            second_input = slider.getElementsByTagName('input')[1],
            slider_inputs = [first_input, second_input],
            slider_min = +slider.dataset.rangeMin,
            slider_max = +slider.dataset.rangeMax,
            slider_step = +slider.dataset.rangeStep,
            slider_start = slider.dataset.rangeStart.split(',');

        noUiSlider.create(slider_box, {
            start: slider_start,
            step: slider_step,
            connect: true,
            tooltips: [true, true],
            range: {
                min: slider_min,
                max: slider_max,
            },
            format: wNumb({
                decimals: 0,
            }),
        });

        slider_box.noUiSlider.on('update', function(values, handle) {
            slider_inputs[handle].value = values[handle];
        });

        slider_inputs.forEach(function(input, handle) {
            input.addEventListener('change', function() {
                slider_box.noUiSlider.setHandle(handle, this.value);
            });

            input.addEventListener('keydown', function(e) {
                switch (e.which) {
                    case 13:
                        slider_box.noUiSlider.setHandle(handle, this.value);
                        break;
                }
            });
        });
    }
};

module.exports = no_ui_slider;
