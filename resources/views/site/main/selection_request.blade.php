@extends('site.layouts.default')

@section('content')
	<section class="simple-page--bg">
		<div class="intro-figure">
			<figure style="background-image: url('/images/bg/Navagio-beach-featured.jpg')"></figure>
		</div>

		<div class="selection-request">
			<div class="content">
				<header class="light-style">
					<h3 class="headline_main">@lang('main.selection_request')</h3>
				</header>
				<div class="form-request">
					<div class="form">
						<form action="#">
							<div class="form-box">
								<div class="fieldset pickerfields">
									<div class="field">
										<label for="arrivalDate">*Дата заезда</label>
										<div class="input"><input id="arrivalDate" type="text" data-picker-full></div>
									</div>
									<div class="field">
										<label for="departureDate">*Дата отъезда</label>
										<div class="input"><input type="text" id="departureDate" data-picker-full></div>
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
											<select name="adults" id="adults">
												<option value=""></option>
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
											<select name="childUntil12" id="childUntil12">
												<option value=""></option>
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
											<select name="babies" id="babies">
												<option value=""></option>
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
											<select name="way" id="way">
												<option value=""></option>
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
										<div class="input"><input id="budget" type="text" ></div>
									</div>
								</div>
								<div class="fieldset">
									<div class="field">
										<label for="name">*Ваше имя</label>
										<div class="input"><input id="name" type="text" ></div>
									</div>
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
										<label for="wishes">Напишите пожелания</label>
										<div class="input"><input id="wishes" type="text" ></div>
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
			</div>
		</div>
	</section>
@endsection