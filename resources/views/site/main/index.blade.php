@extends('site.layouts.default')

@section('content')
	<div class="section intro">
		<div class="intro-figure">
			<figure style="background-image: url('/images/bg/intro-bg.png')"></figure>
			<video muted autoplay loop>
				<source src="/images/media/grecobooking.mp4" type="video/mp4">
				<source src="/images/media/grecobooking.webm" type="video/webm">
			</video>
		</div>

		<div class="intro--main">
			@include('site.block.main_filter')
		</div>

		<div class="intro-values">
			<div class="content content_mx">
				<div class="intro-text">Мы более 9 лет предоставляем услуги по подбору премиальных  лицензированных вилл для вашего отдыха. Хороший вкус, высочайший сервис  24/7, новаторство — это то, за что нас выбрали более 300 семей.</div>
				<span class="scroll-down"><svg xmlns="http://www.w3.org/2000/svg" width="137" height="137" viewBox="0 0 13700 13700" shape-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><circle cx="6850" cy="6850" r="6683" fill="none" stroke="#fff" stroke-width="334"/><path d="m4799 6179c-130-130-130-343 0-473 131-130 343-130 473 0l1578 1578 1578-1578c130-130 342-130 473 0 130 130 130 343 0 473l-1815 1814c-130 131-342 131-472 0l-1815-1814" fill="#fff" fill-rule="nonzero"/></svg></span>
			</div>
		</div>
	</div>
	<div class="section offers">
		<div class="content">
			{{--<div class="offers--wrap">--}}
				{{--@foreach($preview as $val)--}}
					{{--@php($original = '/images/files/original/')--}}
					{{--@php($img_original = $val['file'] ? $val['crop'] ? $original . $val['crop'] : $original . $val['file'] : '')--}}

					{{--<div class="item">--}}
						{{--<a href="#">--}}
							{{--<figure style="background-image: url('{{ $img_original }}')"></figure>--}}
							{{--<h3 class="title">{{ $langSt($val['name']) }}</h3>--}}
						{{--</a>--}}
					{{--</div>--}}
				{{--@endforeach--}}
			{{--</div>--}}
			<header>
				<h2 class="headline_main">GET INSPIRED</h2>
				<h4 class="headline_submain">Browse Our Top Villa Collections</h4>
			</header>
			<div class="offers--wrap">
				<div class="offers--grid">
					<div class="item-box item-lg" data-item="1">
						<section class="item">
							<a href="#">
								<figure style="background-image: url('/images/bg/offer01.jpg')"></figure>
								<header>
									<h3 class="title">Виллы на берегу моря</h3>
									<h5 class="subtitle">Роскошные виллы в нескольких шагах от пляжа</h5>
									<span class="btn btn_bord">Смотреть</span>
								</header>
							</a>
						</section>
					</div>
					<div class="item-box item-md" data-item="2">
						<section class="item">
							<a href="#">
								<figure style="background-image: url('/images/bg/offer01.jpg')"></figure>
								<header>
									<h3 class="title">Виллы с отельным обслуживанием</h3>
									<h5 class="subtitle">Виллы с полным набором услуг</h5>
									<span class="btn btn_bord">Смотреть</span>
								</header>
							</a>
						</section>
					</div>
					<div class="item-box item-lg" data-item="3">
						<section class="item">
							<a href="#">
								<figure style="background-image: url('/images/bg/offer01.jpg')"></figure>
								<header>
									<h3 class="title">Отдых вдвоем</h3>
									<h5 class="subtitle">Ваш романтический отдых на двоих</h5>
									<span class="btn btn_bord">Смотреть</span>
								</header>
							</a>
						</section>
					</div>
					<div class="item-box item-sm" data-item="4">
						<section class="item">
							<a href="#">
								<figure style="background-image: url('/images/bg/offer01.jpg')"></figure>
								<header>
									<h3 class="title">Афины</h3>
								</header>
							</a>
						</section>
					</div>
					<div class="item-box item-sm" data-item="5">
						<section class="item">
							<a href="#">
								<figure style="background-image: url('/images/bg/offer01.jpg')"></figure>
								<header>
									<h3 class="title">Санторини</h3>
								</header>
							</a>
						</section>
					</div>

				</div>
			</div>
		</div>
	</div>

	<section class="section best-offers">
		<div class="content">
			<header>
				<h3 class="headline_main">@lang('main.our_best_offers')</h3>
				<h4 class="headline_submain">{{ $langSt($params['our_best_offers_main_h3']['key']) }}</h4>
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
				<h4 class="headline_submain">{{ $langSt($params['blog_main_h3']['key']) }}</h4>
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
