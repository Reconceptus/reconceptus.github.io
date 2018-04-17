<ul class="grid-list" style="width: 100%;">
	@foreach($villas as $val)
		@php($path = '/images/files/small/')

		@php($img = $val['file']
			? $val['crop'] ? $path . $val['crop'] : $path . $val['file']
			: '/images/files/no-image.jpg'
		)

		<li>
			<a href="/villas/{{ $val['id'] }}" target="_blank">>
				<figure style="background-image: url({{ $img }})"></figure>

				<div class="grid--main">
					<h3 class="title">{{ $langSt($val['name']) }}</h3>
					<div class="price"><strong>&euro;</strong> {{ number_format($val['price_money'], 0, ',', ' ') }}</div>

					<div class="includes">
						@if($val['bedroom'])
							<span class="bed">
									<i><svg> <use xlink:href="/images/svg/sprite.svg#ico_villa-bed"></use> </svg></i>
									<span>{{ $val['bedroom'] }} @lang('main.bedrooms')</span>
								</span>
						@endif

						@if($val['bathroom'])
							<span class="bath">
									<i><svg> <use xlink:href="/images/svg/sprite.svg#ico_villa-bath"></use> </svg></i>
									<span>{{ $val['bathroom'] }} @lang('main.bathrooms')</span>
								</span>
						@endif

						<span class="sea">
							<i><svg> <use xlink:href="/images/svg/sprite.svg#ico_villa-sea"></use> </svg></i>
							<span>
								@if($val['sea'] === 0)
									@lang('main.with_access_to_the_beach')
								@elseif($val['sea'] === 1)
									@lang('main.sea_in_5_minutes')
								@elseif($val['sea'] === 2)
									@lang('main.sea_in_15_minutes')
								@else
									@lang('main.the_sea_more_than_1000_meters')
								@endif
							</span>
						</span>
					</div>
				</div>
			</a>
	@endforeach
</ul>

@if($paginate ?? false)
	{!! $villas->links('site.block.pagination') !!}
@endif
