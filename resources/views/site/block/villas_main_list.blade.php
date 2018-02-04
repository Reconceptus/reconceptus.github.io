<ul class="villas-list">
	@foreach($villas as $val)
		@php($path = '/images/files/small/')

		@php($img = $val['file']
			? $val['crop'] ? $path . $val['crop'] : $path . $val['file']
			: '/images/files/no-image.jpg'
		)

		<li class="villa-item">
			<div class="villa-img">
				<figure style="background-image: url({{ $img }})"></figure>

				<ul class="hashes">
					<li>На пляже</li>
					<li>Горячее предложение</li>
				</ul>
				<a href="/villas/{{ $val['id'] }}" class="link"></a>

				<a href="javascript:void(0)" class="villa-like">
					<svg><use xlink:href="/images/svg/sprite.svg#ico_action-like-full"></use></svg>
				</a>
			</div>

			<div class="villa-main">
				<div class="name">
					<h3 class="title"><a href="/villas/{{ $val['id'] }}">{{ $langSt($val['name']) }}</a></h3>
					<h5 class="place">{{ $langSt($val['place']) }}</h5>
				</div>

				<div class="price"><strong>&euro;</strong> {{ $val['price_money'] }}</div>
			</div>

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
		</li>
	@endforeach
</ul>

@if($paginate ?? false)
	{!! $villas->links('site.block.pagination') !!}
@endif
