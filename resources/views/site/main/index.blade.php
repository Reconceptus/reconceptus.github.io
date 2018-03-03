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
				@foreach($preview as $val)
					@php($original = '/images/files/original/')
					@php($img_original = $val['file'] ? $val['crop'] ? $original . $val['crop'] : $original . $val['file'] : '')

					<div class="item">
						<a href="#">
							<figure style="background-image: url('{{ $img_original }}')"></figure>
							<h3 class="title">{{ $langSt($val['name']) }}</h3>
						</a>
					</div>
				@endforeach
			</div>
		</div>
	</div>
	<section class="section qualities">
		<div class="content">
			<header>
				<h2 class="headline_main">@lang('main.booking_is_easy')</h2>
				<h4 class="headline_submain">{{ $langSt($params['booking_is_easy_main_h3']['key']) }}</h4>
			</header>

			<div class="qualities--main">
				<div class="content content_md">
					<ul>
						@foreach($langSt($main_page['booking_is_easy'])['name'] ?? [] as $key => $val)
							<li>
								<div class="num">{{ $key + 1 }}</div>
								<h5 class="title">{{ $val }}</h5>
								<p>{{ $langSt($main_page['booking_is_easy'])[$key]['text'] }}</p>
							</li>
						@endforeach
					</ul>

					<div class="btns_center">
						<a href="/selection-request" class="btn btn_subm">@lang('main.get_a_selection_of_villas')</a>
					</div>
				</div>
			</div>
		</div>
	</section>
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
