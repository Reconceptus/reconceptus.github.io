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
		},

		initFriendForm: function() {
			$('.friend-form form').validate({
				onfocusout: false,
				ignore    : ".ignore",

				rules: {
					'friendMail[]': {required: true},
					yourName      : {required: true},
					yourEmail     : {required: true},
					message       : {required: true}
				},

				messages: {
					'friendMail[]': {required: ""},
					yourEmail     : {required: ""},
					message       : {required: ""}
				},

				errorClass: 'invalid',

				highlight: function(element, errorClass) {
					$(element).closest('.field').addClass(errorClass);

					if($(element).closest('.add-fieldset')) {
						$(element).closest('.add-fieldset').addClass('disabled')
					}
				},

				unhighlight: function(element, errorClass) {
					$(element).closest('.field').removeClass(errorClass);

					if($(element).closest('.add-fieldset')) {
						$(element).closest('.add-fieldset').removeClass('disabled')
					}
				},

				errorPlacement: $.noop,

				submitHandler: function(form) {
					formsFull.submitForm(
						{
							data : $('.friend-form form').serializeArray(),
							data2: formsFull.gatherMultipleValues($('.friend-form form')),
							type : 'friend_form'
						},

						function() {
							$('.friend-form').addClass('successful');
							document.getElementById("friend-form").reset();
							$('.friend-form .added-input').remove();
						}
					);

					return false;
				}
			});

			$('[name="send-me"]').click(function() {
				if($('[name="send-me"]').prop('checked')) {
					$('[name="yourEmail"]').removeAttr('disabled');
					$('.your-name-cont').css('display', 'block');
				} else {
					$('[name="yourEmail"]').attr('disabled', 'disabled');
					$('.your-name-cont').css('display', 'none');
				}
			});
		},

		gatherMultipleValues: function(that) {
			var
				final_array = [];

			$.each(that.serializeArray(), function(key, field) {
				// Copy normal fields to final array without changes
				if(field.name.indexOf('[]') < 0) {
					final_array.push(field);

					return true; // That's it, jump to next iteration
				}

				// Remove "[]" from the field name
				var
					field_name = field.name.split('[]')[0];

				// Add the field value in its array of values
				var has_value = false;
				$.each(final_array, function(final_key, final_field) {
					if(final_field.name === field_name) {
						has_value = true;
						final_array[final_key]['value'].push(field.value);
					}
				});

				// If it doesn't exist yet, create the field's array of values
				if(!has_value) {
					final_array.push({'name': field_name, 'value': [field.value]});
				}
			});

			return final_array;
		},

		initResumeForm: function(fileEmpty) {
			$('.resume-form form').validate({
				ignore: ".ignore",

				rules: {
					file     : {required: false},
					name     : {required: true},
					mail     : {required: true},
					telephone: {required: true},
					message  : {required: false}
				},

				messages: {
					file     : {required: ""},
					name     : {required: ""},
					mail     : {required: ""},
					telephone: {required: ""},
					message  : {required: ""}
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
					var
						formData = new FormData(),
						request = new XMLHttpRequest(),
						file = document.getElementById('file-upload').files[0];

					if(file)
						formData.append('file_cv', file);

					formData.append('data[name]', $('#name-form-resume').val());
					formData.append('data[mail]', $('#mail-form-resume').val());
					formData.append('data[telephone]', $('#telephone-form-resume').val());
					formData.append('data[message]', $('#message-form-resume').val());
					formData.append('type', 'resume_form');
					request.open("POST", "/_tools/submit_required");
					request.send(formData);

					request.onload = request.onerror = function() {
						var
							data = JSON.parse(request.response);

						if(this.status == 200) {
							if(data.result === 'ok') {
								document.getElementById('file-name').textContent = fileEmpty;
								$('.resume-form').addClass('successful');
								document.getElementById("resume-form").reset();
							}
						} else {
							log("error " + this.status);
						}
					};

					return false;
				}
			});
		},

		initVillaRequestForm: function(id) {
			$('.villa-request form').validate({
				onfocusout: false,
				ignore    : ".ignore",

				rules: {
					arrivalDate  : {required: true},
					departureDate: {required: true},
					guests       : {required: true},
					children     : {required: true},
					mail         : {required: true},
					wishes       : {required: true}
				},

				messages: {
					arrivalDate  : {required: ""},
					departureDate: {required: ""},
					guests       : {required: ""},
					children     : {required: ""},
					mail         : {required: ""},
					wishes       : {required: ""}
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
							data: $('#villa-request-form').serializeArray(),
							id  : id,
							type: 'villa_request'
						},

						function() {
							$('.villa-request').addClass('successful');
							document.getElementById("villa-request-form").reset();
						}
					);

					return false;
				}
			});
		}
	};
