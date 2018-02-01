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
											<div class="input"><input id="name" type="text"></div>
										</div>
										<div class="field">
											<label for="position">*Должность</label>
											<div class="input"><input type="text" id="position"></div>
										</div>
									</div>
									<div class="fieldset">
										<div class="field">
											<label for="telephone">*Телефон</label>
											<div class="input"><input type="text" id="telephone"></div>
										</div>
										<div class="field">
											<label for="mail">*E-mail</label>
											<div class="input"><input type="text" id="mail"></div>
										</div>
									</div>
									<div class="fieldset">
										<div class="field">
											<label for="villaAddress">*Адрес виллы</label>
											<div class="input"><input id="villaAddress" type="text" ></div>
										</div>
									</div>
									<div class="fieldset">
										<div class="field">
											<label for="siteLink">*Сайт или ссылка на фотографии</label>
											<div class="input"><input id="siteLink" type="text" ></div>
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
@endsection