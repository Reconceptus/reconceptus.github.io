@extends('site.layouts.default')

@section('content')
	<section class="simple-page--bg">
		<div class="intro-figure dynamic">
			<figure style="background-image: url('/images/bg/vacancy.jpg')"></figure>
		</div>
		<div class="content">
			<header class="light-style">
				<h1 class="headline_main">@lang('main.vacancies')</h1>
			</header>
		</div>
	</section>

	<div class="vacancy">
		<div class="content">
			<div class="vacancy-box inside-mob">
				<div class="content content_md">
					<ul class="vacancy-list">
						@foreach($vacancies as $val)
							<li>
								<a href="/vacancies/{{ $val['id'] }}">
									<h3 class="title">{{ $langSt($val['name']) }}</h3>
									<span class="price">&euro; {{ $val['price_money'] }}</span>

									<span class="place">
										<i><svg> <use xlink:href="/images/svg/sprite.svg#ico_mark"></use> </svg></i>
										<span>{{ $langSt($val['location_name']) }}</span>
									</span>

									<span class="arrow">
										<svg> <use xlink:href="/images/svg/sprite.svg#ico_arrow-right-small"></use> </svg>
									</span>
								</a>
							</li>
						@endforeach
					</ul>

					<header>
						<h2 class="headline_main">@lang('main.advantages')</h2>
						<h4 class="headline_submain">{{ $langSt($params['advantages_vacancy_h3']['key']) }}</h4>
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

			<div class="vacancy-quotes">
				<div class="figure dynamic">
					<figure style="background-image: url('/images/items/10911829_78_z.jpg')"></figure>
				</div>

				<div class="text">
					<blockquote>Здесь что-то воодушевляющее. Вы любите Грецию как и мы и знаете все о туристическом бизнесе?- мы ждем вас в нашу команду, присылайте резюме.</blockquote>
					<div class="contacts">
						<ul>
							<li>
								<i class="ico-tel"><svg><use xlink:href="/images/svg/sprite.svg#ico_contact-tel"></use></svg></i>

								<a href="tel:{{ $langSt($params['phone_footer']['key']) }}">
									{{ $langSt($params['phone_footer']['key']) }}
								</a>
							</li>
							<li>
								<i class="ico-fly">
									<svg>
										<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/svg/sprite.svg#ico_contact-fly"></use>
									</svg>
								</i>

								<a href="mailto:{{ $langSt($params['email']['key']) }}">{{ $langSt($params['email']['key']) }}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="vacancy-box inside-mob">
				<div class="content content_md">
					<header>
						<h2 class="headline_main">@lang('main.working_conditions')</h2>
						<h4 class="headline_submain">{{ $langSt($params['working_conditions_vacancy_h3']['key']) }}</h4>
					</header>
					<div class="vacancy-terms">
						<ul>
							<li>
								<i><img src="/images/defaulf-img-sm.png" alt="img"></i>
								<div class="text">
									<h5 class="title">Учимся</h5>
									<p>Посетители ищут на сайте нужную информацию и ждут удобной навигации. Понятная навигация помогает найти нужное.</p>
								</div>
							</li>
							<li>
								<i><img src="/images/defaulf-img-sm.png" alt="img"></i>
								<div class="text">
									<h5 class="title">Учим</h5>
									<p>Неудобный сайт заставляет думать. Чем больше посетитель думает, тем меньше шансов, что он найдет нужную информацию.</p>
								</div>
							</li>
							<li>
								<i><img src="/images/defaulf-img-sm.png" alt="img"></i>
								<div class="text">
									<h5 class="title">ПОМОГАЕМ</h5>
									<p>Посетители ищут на сайте нужную информацию и ждут удобной навигации. Понятная навигация помогает найти нужное.</p>
								</div>
							</li>
							<li>
								<i><img src="/images/defaulf-img-sm.png" alt="img"></i>
								<div class="text">
									<h5 class="title">Делимся</h5>
									<p>Неудобный сайт заставляет думать. Чем больше посетитель думает, тем меньше шансов, что он найдет нужную информацию.</p>
								</div>
							</li>
							<li>
								<i><img src="/images/defaulf-img-sm.png" alt="img"></i>
								<div class="text">
									<h5 class="title">Снабжаем</h5>
									<p>Посетители ищут на сайте нужную информацию и ждут удобной навигации. Понятная навигация помогает найти нужное.</p>
								</div>
							</li>
							<li>
								<i><img src="/images/defaulf-img-sm.png" alt="img"></i>
								<div class="text">
									<h5 class="title">Угощаем</h5>
									<p>
										Посетители ищут на сайте нужную информацию и ждут удобной навигации. Понятная навигация помогает найти нужное.</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection