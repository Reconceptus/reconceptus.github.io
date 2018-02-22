@extends('site.layouts.default')

@section('content')
	<div class="section intro">
		<div class="intro-figure">
			<figure style="background-image: url('/images/bg/intro-bg.png')"></figure>
			<video muted autoplay loop>
				<source src="/images/media/Navagio-Beach.mp4" type="video/mp4">
			</video>
		</div>

		<div class="intro--main">
			@include('site.block.main_filter')
		</div>

		<div class="intro-values">
			<div class="content content_md">
				<ul>
					<li>
						<i>
							<svg>
								<use xlink:href="/images/svg/sprite.svg#ico_advantage-cup"></use>
							</svg>
						</i>
						<div class="text">более 500 довольных клиентов</div>
					</li>
					<li>
						<i>
							<svg>
								<use xlink:href="/images/svg/sprite.svg#ico_advantage-column"></use>
							</svg>
						</i>
						<div class="text">9 лет на рынке и еще немного текста</div>
					</li>
					<li>
						<i>
							<svg>
								<use xlink:href="/images/svg/sprite.svg#ico_advantage-flag"></use>
							</svg>
						</i>
						<div class="text">лицензированные объекты по всей Греции</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="section offers">
		<div class="content">
			<div class="offers--wrap">
				<div class="item">
					<a href="#">
						<figure style="background-image: url('/images/bg/offer01.jpg')"></figure>
						<h3 class="title">Шикарные резиденции в нескольких шагах от пляжа</h3>
					</a>
				</div>
				<div class="item">
					<a href="#">
						<figure style="background-image: url('/images/bg/offer02.jpg')"></figure>
						<h3 class="title">Отдых вдвоем <br>ваш медовый месяц в греции</h3>
					</a>
				</div>
				<div class="item">
					<a href="#">
						<figure style="background-image: url('/images/bg/offer03.jpg')"></figure>
						<h3 class="title">виллы с отдельным обслуживанием</h3>
					</a>
				</div>
			</div>
		</div>
	</div>
	<section class="section qualities">
		<div class="content">
			<header>
				<h2 class="headline_main">Booking is easy as 1, 2, 3..</h2>
				<h4 class="headline_submain">The cream of the crop of London's accommodation</h4>
			</header>
			<div class="qualities--main">
				<div class="content content_md">
					<ul>
						<li>
							<div class="num">1</div>
							<h5 class="title">Надежность</h5>
							<p>Бронирование у греческого оператора без посредников</p>
						</li>
						<li>
							<div class="num">2</div>
							<h5 class="title">ИНДИВИДУАЛЬНЫЙ СЕРВИС 24/7</h5>
							<p>Мы всегда на связи!</p>
						</li>
						<li>
							<div class="num">3</div>
							<h5 class="title">ГАРАНТИЯ КАЧЕСТВА</h5>
							<p>Только лицензированные объекты, отвечающие всем требуемым стандартам</p>
						</li>
					</ul>
					<div class="btns_center">
						<a href="#" class="btn btn_subm">Получить подборку вилл</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="section best-offers">
		<div class="content">
			<header>
				<h3 class="headline_main">@lang('main.our_best_offers')</h3>
				<h4 class="headline_submain">The cream of the crop of London's accommodation</h4>
			</header>

			<div class="grid">
				@include('site.block.villas_main_list_grid')

				<div class="btns_center">
					<a href="/villas" class="more">@lang('main.more_offers')</a>
				</div>
			</div>
		</div>
	</section>

	<section class="section blog-section">
		<div class="content">
			<header>
				<h3 class="headline_main">@lang('main.blog')</h3>
				<h4 class="headline_submain">@lang('main.blog_title')</h4>
			</header>
		</div>
		<div class="blog-box">
			<div class="content">
				<div class="blog-box--wrap">
					@include('site.block.blog_main_list')

					<div class="btns_center">
						<a href="/blog" class="more">@lang('main.more_articles')</a>
					</div>
				</div>
			</div>
		</div>
	</section>
@endsection
