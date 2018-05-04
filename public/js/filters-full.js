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
					arrivalDate   : {required: true},
					departureDate : {required: true},
					adults        : {required: true},
					childUntil12  : {required: true},
					babies        : {required: true},
					way           : {required: true},
					budget        : {required: true},
					name          : {required: true},
					telephone     : {required: true, phone: true},
					mail          : {required: true, email: true},
					securityPolicy: {required: true}
				},

				messages: {
					arrivalDate   : {required: ""},
					departureDate : {required: ""},
					adults        : {required: ""},
					childUntil12  : {required: ""},
					babies        : {required: ""},
					way           : {required: ""},
					budget        : {required: ""},
					name          : {required: ""},
					telephone     : {required: ""},
					mail          : {required: ""},
					securityPolicy: {required: ""}
				},

				errorClass: 'invalid',

				highlight: function(element, errorClass) {
					$(element).closest('.field, .check_field').addClass(errorClass);
					$(element).closest('.field, .check_field').addClass(errorClass);
				},

				unhighlight: function(element, errorClass) {
					$(element).closest('.field, .check_field').removeClass(errorClass);
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

			jQuery.validator.addMethod("phone", function(phone_number, element) {
				phone_number = phone_number.replace(/\s+/g, "");
				return this.optional(element) || phone_number.length > 9 &&
					phone_number.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);
			}, "Invalid phone number");
		},

		initRequestForAccommodation: function() {
			$('.form-request form').validate({
				onfocusout: false,
				ignore    : ".ignore",

				rules: {
					position      : {required: false},
					villaAddress  : {required: true},
					siteLink      : {required: false},
					name          : {required: true},
					telephone     : {required: true},
					mail          : {required: true, email: true},
					securityPolicy: {required: true},
				},

				messages: {
					position      : {required: ""},
					villaAddress  : {required: ""},
					siteLink      : {required: ""},
					name          : {required: ""},
					telephone     : {required: ""},
					mail          : {required: ""},
					securityPolicy: {required: ""},
				},

				errorClass: 'invalid',

				highlight: function(element, errorClass) {
					$(element).closest('.field, .check_field').addClass(errorClass)

				},

				unhighlight: function(element, errorClass) {
					$(element).closest('.field, .check_field').removeClass(errorClass)
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
					name          : {required: true},
					mail          : {required: true, email: true},
					telephone     : {required: true},
					//					message  : {required: true}
					securityPolicy: {required: true}
				},

				messages: {
					name          : {required: ""},
					mail          : {required: ""},
					telephone     : {required: ""},
					//					message  : {required: ""}
					securityPolicy: {required: ""}
				},

				errorClass: 'invalid',

				highlight: function(element, errorClass) {
					$(element).closest('.field, .check_field').addClass(errorClass);

					if($(element).closest('.add-fieldset'))
						$(element).closest('.add-fieldset, .check_field').addClass('disabled')
				},

				unhighlight: function(element, errorClass) {
					$(element).closest('.field, .check_field').removeClass(errorClass);

					if($(element).closest('.add-fieldset'))
						$(element).closest('.add-fieldset, .check_field').removeClass('disabled')
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
				rules     : {subscribe_mail: {required: true, email: true}},
				messages  : {subscribe_mail: {required: ""}},
				errorClass: 'invalid',

				highlight: function(element, errorClass) {
					$(element).closest('.field, .check_field').addClass(errorClass)
				},

				unhighlight: function(element, errorClass) {
					$(element).closest('.field, .check_field').removeClass(errorClass)
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
					yourEmail     : {required: true, email: true},
					//message       : {required: true}
					securityPolicy: {required: true},
				},

				messages: {
					'friendMail[]': {required: ""},
					yourEmail     : {required: ""},
					//	message       : {required: ""}
					securityPolicy: {required: ""},
				},

				errorClass: 'invalid',

				highlight: function(element, errorClass) {
					$(element).closest('.field, .check_field').addClass(errorClass);

					if($(element).closest('.add-fieldset')) {
						$(element).closest('.add-fieldset, .check_field').addClass('disabled')
					}
				},

				unhighlight: function(element, errorClass) {
					$(element).closest('.field, .check_field').removeClass(errorClass);

					if($(element).closest('.add-fieldset')) {
						$(element).closest('.add-fieldset, .check_field').removeClass('disabled')
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
					file          : {required: false},
					name          : {required: true},
					mail          : {required: true, email: true},
					telephone     : {required: true},
					message       : {required: false},
					securityPolicy: {required: true},
				},

				messages: {
					file          : {required: ""},
					name          : {required: ""},
					mail          : {required: ""},
					telephone     : {required: ""},
					message       : {required: ""},
					securityPolicy: {required: ""},
				},

				errorClass: 'invalid',

				highlight: function(element, errorClass) {
					$(element).closest('.field, .check_field').addClass(errorClass)
				},

				unhighlight: function(element, errorClass) {
					$(element).closest('.field, .check_field').removeClass(errorClass)
				},

				errorPlacement: $.noop,

				submitHandler: function(form) {
					var
						formData = new FormData(),
						request  = new XMLHttpRequest(),
						file     = document.getElementById('file-upload').files[0];

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
					arrivalDate   : {required: true},
					departureDate : {required: true},
					guests        : {required: true},
					children      : {required: true},
					mail          : {required: true, email: true},
					wishes        : {required: true},
					securityPolicy: {required: true}
				},

				messages: {
					arrivalDate   : {required: ""},
					departureDate : {required: ""},
					guests        : {required: ""},
					children      : {required: ""},
					mail          : {required: ""},
					wishes        : {required: ""},
					securityPolicy: {required: ""}
				},

				errorClass: 'invalid',

				highlight: function(element, errorClass) {
					$(element).closest('.field, .check_field').addClass(errorClass)
				},

				unhighlight: function(element, errorClass) {
					$(element).closest('.field, .check_field').removeClass(errorClass)
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
