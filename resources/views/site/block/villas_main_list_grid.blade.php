<ul class="grid-list">
	@foreach($villas as $val)
		@php($path = '/images/files/small/')

		@php($img = $val['file']
			? $val['crop'] ? $path . $val['crop'] : $path . $val['file']
			: '/images/files/no-image.jpg'
		)

		<li>
			<a href="/villas/{{ $val['id'] }}">
				<figure style="background-image: url({{ $img }})"></figure>

				<div class="grid--main">
					<h3 class="title">{{ $langSt($val['name']) }}</h3>
					<div class="price"><strong>&euro;</strong> {{ $val['price_money'] }}</div>

					<div class="includes">
						<span class="bed">
							<i><svg> <use xlink:href="/images/svg/sprite.svg#ico_villa-bed"></use> </svg></i>
							<span>6 Bedrooms</span>
						</span>

						<span class="bath">
							<i><svg> <use xlink:href="/images/svg/sprite.svg#ico_villa-bath"></use> </svg></i>
							<span>3 Bathrooms</span>
						</span>

						<span class="sea">
							<i><svg> <use xlink:href="/images/svg/sprite.svg#ico_villa-sea"></use> </svg></i>
							<span>Sea in 3 minutes</span>
						</span>
					</div>
				</div>
			</a>
	@endforeach
</ul>

@if($paginate ?? false)
	{!! $villas->links('site.block.pagination') !!}
@endif
