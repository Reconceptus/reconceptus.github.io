var
	formsFull = {
		initialize: function initialize(data) {
			this.conf = data || {};
		},

		submitForm: function(data, callback) {
			$.ajax
			 ({
				 type    : "post",
				 url     : "/_tools/submit_required",
				 data    : data,
				 cache   : false,
				 dataType: "JSON",

				 success: function(data) {
					 if(data.result === 'ok') {
						 if(_.isFunction(callback))
							 callback();
					 }
				 }
			 });
		},

		initSelectionRequest: function() {
			$('.form-request form').validate({
				onfocusout: false,
				ignore    : ".ignore",

				rules: {
					arrivalDate  : {required: true},
					departureDate: {required: true},
					adults       : {required: true},
					childUntil12 : {required: true},
					babies       : {required: true},
					way          : {required: true},
					budget       : {required: true},
					name         : {required: true},
					telephone    : {required: true},
					mail         : {required: true}
				},

				messages  : {
					arrivalDate  : {required: ""},
					departureDate: {required: ""},
					adults       : {required: ""},
					childUntil12 : {required: ""},
					babies       : {required: ""},
					way          : {required: ""},
					budget       : {required: ""},
					name         : {required: ""},
					telephone    : {required: ""},
					mail         : {required: ""}
				},
				errorClass: 'invalid',

				highlight: function(element, errorClass) {
					$(element).closest('.field').addClass(errorClass)
				},

				unhighlight: function(element, errorClass) {
					$(element).closest('.field').removeClass(errorClass)
				},

				errorPlacement: $.noop,

				submitHandler: function(form) {
					formsFull.submitForm(
						{
							data: $('.form-request form').serializeArray(),
							type: 'selection_request'
						},

						function() {
							$('.form-request').addClass('successful');
							document.getElementById("selection-request-form").reset();
						}
					);

					return false;
				}
			});
		},

		initRequestForAccommodation: function() {
			$('.form-request form').validate({
				onfocusout: false,
				ignore    : ".ignore",

				rules: {
					position    : {required: true},
					villaAddress: {required: true},
					siteLink    : {required: true},
					name        : {required: true},
					telephone   : {required: true},
					mail        : {required: true}
				},

				messages: {
					position    : {required: ""},
					villaAddress: {required: ""},
					siteLink    : {required: ""},
					name        : {required: ""},
					telephone   : {required: ""},
					mail        : {required: ""}
				},

				errorClass: 'invalid',

				highlight: function(element, errorClass) {
					$(element).closest('.field').addClass(errorClass)

				},

				unhighlight: function(element, errorClass) {
					$(element).closest('.field').removeClass(errorClass)
				},

				errorPlacement: $.noop,

				submitHandler: function(form) {
					formsFull.submitForm(
						{
							data: $('.request-for-accommodation-form').serializeArray(),
							type: 'request_for_accommodation'
						},

						function() {
							$('.form-request').addClass('successful');
							document.getElementById("request-for-accommodation-form").reset();
						}
					);

					return false;
				}
			})
		},

		initContactUs: function() {
			$('.contact-form form').validate({
				onfocusout: false,
				ignore    : ".ignore",

				rules: {
					name     : {required: true},
					mail     : {required: true},
					telephone: {required: true},
					message  : {required: true}
				},

				messages: {
					name        : {required: ""},
					mail        : {required: ""},
					telephone   : {required: ""},
					message_form: {required: ""}
				},

				errorClass: 'invalid',

				highlight: function(element, errorClass) {
					$(element).closest('.field').addClass(errorClass);

					if($(element).closest('.add-fieldset'))
						$(element).closest('.add-fieldset').addClass('disabled')
				},

				unhighlight: function(element, errorClass) {
					$(element).closest('.field').removeClass(errorClass);

					if($(element).closest('.add-fieldset'))
						$(element).closest('.add-fieldset').removeClass('disabled')
				},

				errorPlacement: $.noop,

				submitHandler: function(form) {
					formsFull.submitForm(
						{
							data: $('.contact-form form').serializeArray(),
							type: 'contact_us'
						},

						function() {
							$('.contact-form').addClass('successful');
							document.getElementById("contact-us-form").reset();
						}
					);

					return false;
				}
			})
		},

		initSubscription: function() {
			$('.subscription-form form').validate({
				onfocusout: false,
				ignore    : ".ignore",
				rules     : {subscribe_mail: {required: true}},
				messages  : {subscribe_mail: {required: ""}},
				errorClass: 'invalid',

				highlight: function(element, errorClass) {
					$(element).closest('.field').addClass(errorClass)
				},

				unhighlight: function(element, errorClass) {
					$(element).closest('.field').removeClass(errorClass)
				},

				errorPlacement: $.noop,

				submitHandler: function(form) {
					formsFull.submitForm(
						{
							data: $('.subscription-form form').serializeArray(),
							type: 'subscription'
						},

						function() {
							$('.subscription-form').addClass('successful');
							document.getElementById("subscription-form").reset();
						}
					);

					return false;
				}
			})
		}
	};
