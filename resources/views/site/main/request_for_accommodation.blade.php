@extends('site.layouts.default')

@section('content')
	<section class="simple-page--head placing--request" style="background-image: url('/images/bg/account-bg.jpeg')">
		<div class="content">
			<header class="light-style">
				<h1 class="headline_main">Запрос на размещение</h1>
			</header>
		</div>
	</section>

	<div class="vacancy">
		<div class="content">
			<div class="vacancy-box">
				<div class="content content_md">
					<div class="form-request placing-form">
						<div class="form">
							<form action="#">
								<div class="form-box">
									<div class="fieldset">
										<div class="field">
											<label for="name">*Имя</label>
											<div class="input"><input id="name" name="name" type="text"></div>
										</div>
										<div class="field">
											<label for="position">*Должность</label>
											<div class="input"><input type="text" name="position" id="position"></div>
										</div>
									</div>
									<div class="fieldset">
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
											<label for="villaAddress">*Адрес виллы</label>
											<div class="input"><input id="villaAddress" name="villaAddress" type="text" ></div>
										</div>
									</div>
									<div class="fieldset">
										<div class="field">
											<label for="siteLink">*Сайт или ссылка на фотографии</label>
											<div class="input"><input id="siteLink" name="siteLink" type="text" ></div>
										</div>
									</div>
									<div class="fieldset">
										<div class="field">
											<label for="source">Откуда вы о нас узнали</label>
											<div class="input"><input id="source" type="text" ></div>
										</div>
									</div>
									<p class="asterisk">*Обязательные поля</p>
									<button class="btn btn_subm" type="submit">Отправить запрос</button>
								</div>
							</form>
						</div>
					</div>
					<header>
						<h2 class="headline_main">ПРЕИМУЩЕСТВА</h2>
						<h4 class="headline_submain">The cream of the crop of London's accommodation</h4>
					</header>
					<div class="vacancy-advances">
						<ul>
							<li>
								<i><img src="/images/defaulf-icon.png" alt="img"></i>
								<div class="text">
									<h5 class="title">Заголовок</h5>
									<p>Мы всегда на связи! В любое время дня и ночи наши сотрудники готовы ответить на все вопросы.</p>
								</div>
							</li>
							<li>
								<i><img src="/images/defaulf-icon.png" alt="img"></i>
								<div class="text">
									<h5 class="title">Заголовок</h5>
									<p>Только лицензированные обьекты, отвечающие всем требуемым стандартам. Честные и разумные цены! </p>
								</div>
							</li>
							<li>
								<i><img src="/images/defaulf-icon.png" alt="img"></i>
								<div class="text">
									<h5 class="title">Заголовок</h5>
									<p>Все объекты мы видели вживую и они прошли наш контроль. Наша компания основана и работает в Греции уже 8 лет.</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>

	@push('footer')
	<script>
		$('.form-request form').validate({
			onfocusout: false,
			ignore: ".ignore",

			rules: {
				position: {required: true},
				villaAddress: {required: true},
				siteLink: {required: true},
				name: {required: true},
				telephone: {required: true},
				mail: {required: true}
			},

			messages: {
				position: {required: ""},
				villaAddress: {required: ""},
				siteLink: {required: ""},
				name: {required: ""},
				telephone: {required: ""},
				mail: {required: ""}
			},

			errorClass: 'invalid',

			highlight: function(element, errorClass) {
				$(element).closest('.field').addClass(errorClass)

			},

			unhighlight: function(element, errorClass) {
				$(element).closest('.field').removeClass(errorClass)
			},

			errorPlacement: $.noop,

			submitHandler:function (form) {
				if (form.valid()){
					form.submit();
				}
			}
		})
	</script>
	@endpush
@endsection