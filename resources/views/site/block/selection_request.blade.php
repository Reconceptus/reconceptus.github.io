<div class="form-request">
	<div class="form">
		<form action="#">
			<div class="form-box">
				<div class="fieldset pickerfields">
					<div class="field">
						<label for="arrivalDate">*Дата заезда</label>
						<div class="input"><input id="arrivalDate" name="arrivalDate" type="text" data-picker-full>
						</div>
					</div>
					<div class="field">
						<label for="departureDate">*Дата отъезда</label>
						<div class="input"><input type="text" id="departureDate" name="departureDate" data-picker-full>
						</div>
					</div>
					<div id="picker">
						<div class="calendar">
							<div class="annotation">
								<span class="closed">Занято</span>
								<span class="opened">Свободно</span>
							</div>
						</div>
					</div>
				</div>
				<div class="fieldset">
					<div class="field">
						<label for="adults">*Взрослые</label>
						<div class="select">
							<select name="adults" id="adults" style="display:none;">
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
							</select>
						</div>
					</div>
					<div class="field">
						<label for="childUntil12">*Дети до 12 лет</label>
						<div class="select">
							<select name="childUntil12" id="childUntil12" style="display:none;">
								<option value="Нет">Нет</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
							</select>
						</div>
					</div>
					<div class="field">
						<label for="babies">*Дети от 0 до 2 лет</label>
						<div class="select">
							<select name="babies" id="babies" style="display:none;">
								<option value="Нет">Нет</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
							</select>
						</div>
					</div>
				</div>
				<div class="fieldset">
					<div class="field">
						<label for="way">*Направление</label>
						<div class="select">
							<select name="way" id="way" style="display:none;">
								<option value="Все направления">Все направления</option>
								<option value="Афинское побережье">Афинское побережье</option>
								<option value="Закинтос">Закинтос</option>
								<option value="Крит">Крит</option>
								<option value="Материковая Греция">Материковая Греция</option>
							</select>
						</div>
					</div>
				</div>
				<div class="fieldset">
					<div class="field">
						<label for="budget">*Бюджет в неделю, евро</label>
						<div class="input"><input id="budget" name="budget" type="text"></div>
					</div>
				</div>
				<div class="fieldset">
					<div class="field">
						<label for="name">*Ваше имя</label>
						<div class="input"><input id="name" name="name" type="text"></div>
					</div>
					<div class="field">
						<label for="telephone">*Телефон</label>
						<div class="input"><input type="text" name="telephone" id="telephone"></div>
					</div>
					<div class="field">
						<label for="mail">*E-mail</label>
						<div class="input"><input type="text" name="mail" id="mail"></div>
					</div>
				</div>
				<div class="fieldset">
					<div class="field">
						<label for="wishes">Напишите пожелания</label>
						<div class="input"><input id="wishes" type="text"></div>
					</div>
				</div>
				<div class="fieldset">
					<div class="field">
						<label for="source">Откуда вы о нас узнали</label>
						<div class="input"><input id="source" type="text"></div>
					</div>
				</div>
				<p class="asterisk">*Обязательные поля</p>
				<button class="btn btn_subm" type="submit">Отправить запрос</button>
			</div>
		</form>

		<div class="form-success">
			<span class="close"><svg> <use xlink:href="/images/svg/sprite.svg#ico_close"></use> </svg></span>
			<div class="form-success--main">
				<div class="text">
					<h5 class="success-title">Запрос успешно отправлен!</h5>
					<p
					>Текст после отправки. Эта кнопка объясняет затраты на сайт: компания инвестировала в кнопку и в
						то, что люди будут её нажимать
					</p>

					<div class="btn_center">
						<a href="/blog" class="more">Читать наш блог</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>


@push('footer')
<!--validate-->
<script>

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
			$('.form-request').addClass('successful');
			//            if (form.valid()){
			//                form.submit();
			//            }
			return false;
		}
	});

	$('.fast-request form').validate({
		onfocusout: false,
		ignore    : ".ignore",

		rules: {
			location : {required: true},
			check_in : {required: true},
			check_out: {required: true},
			rooms    : {required: true}
		},

		messages: {
			location : {required: ""},
			check_in : {required: ""},
			check_out: {required: ""},
			rooms    : {required: ""}
		},

		errorClass: 'invalid',

		highlight : function(element, errorClass) {
			$(element).closest('.field').addClass(errorClass)
		},

		unhighlight: function(element, errorClass) {
			$(element).closest('.field').removeClass(errorClass)
		},

		errorPlacement: $.noop,

		submitHandler: function(form) {
//				$('#modal').find('.modal-thanks').addClass('active');
			if(form.valid()) {
				form.submit();
			}
//				return false;
		}
	});
</script>
@endpush
