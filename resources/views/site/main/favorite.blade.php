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

	<div class="simple-page--main bg-grey">
		<div class="villas">
			<div class="content content_md">
				<div class="villas--wrap selResult"></div>
			</div>
		</div>
	</div>

	@include('site.block.favorite_modal')

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
	</script>
	@endpush
@endsection