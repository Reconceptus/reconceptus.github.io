@extends('site.layouts.default')

@section('content')
	<section class="simple-page--head villa--head">
		<div class="content">
			<header class="light-style">
				<h1 class="headline_main">@lang('main.villas')</h1>
			</header>
		</div>

		<div class="half-request">
			@include('site.block.main_filter')
		</div>
	</section>

	<div class="simple-page--main">
		<div class="villas">
			<div class="content content_md">
				<div class="villas--wrap">
					@include('site.block.villas_main_list', ['paginate' => true])
				</div>
			</div>
		</div>
	</div>

	@push('footer')
	<script>
		$(document).ready(function(){

			filFav.initialize();
		});
	</script>
	@endpush
@endsection