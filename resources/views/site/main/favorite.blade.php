@extends('site.layouts.default')

@section('content')
	<section class="simple-page--head favorite--head">
		<div class="animate-bg"></div>

		<div class="content content_md">
			<header>
				<h1 class="headline_main">@lang('main.favorites')</h1>

				<a href="javascript:void(0);" class="send show-modal" data-modal="friend-form">
					<span>@lang('main.send_compilation_friend')</span>

					<i class="ico-fly">
						<svg>
							<use xlink:href="/images/svg/sprite.svg#ico_contact-fly"></use>
						</svg>
					</i>
				</a>
			</header>
		</div>

		{{--<div class="half-request">--}}
			{{--@include('site.block.main_filter')--}}
			{{--<input name="pagination" value="1" type="hidden" autocomplete="off"/>--}}
		{{--</div>--}}
	</section>

	<div class="simple-page--main bg-grey favorite-box">
		<div class="request-head">
			<div class="request-head--nav" id="favoriteNav">
				<div class="content content_md">
					<div class="btns_box">
						<button type="button" class="btn btn_subm scroll-to-request">
							<span>Запросить все</span>
						</button>
						<a href="javascript:void(0);" class="btn btn_nobord show-modal" data-modal="friend-form">
							<i class="ico-send"><svg> <use xlink:href="/images/svg/sprite.svg#ico_action-write"></use> </svg></i>
							<span>Отправить</span>
						</a>
					</div>
				</div>
			</div>
		</div>

		<div class="villas">
			<div class="content content_md">
				<div class="villas--wrap selResult"></div>
			</div>
		</div>
	</div>

	@include('site.block.favorite_modal')

	<section class="section home-request">
		<div class="content">
			<header>
				<h3 class="headline_main">@lang('main.selection_request')</h3>
				{{--<h4 class="headline_submain">Заполните заявку и получите подборку вилл по вашим кретриям</h4>--}}
			</header>

			<div class="home-request--wrap">
				<div class="home-request--main" style="background-image: url('/images/bg/offer01.jpg')">
					@include('site.block.selection_request')
				</div>
			</div>
		</div>
	</section>

	@push('footer')
	<script>
		$(document).ready(function() {
			filVil.initialize({
				cont      : '.selResult',
				num       : '.selReN > .i',
				pagination: true,
				url_req   : '/',
			});
		});

		$('#header').addClass('static');
	</script>
	@endpush
@endsection