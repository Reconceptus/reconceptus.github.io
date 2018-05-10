<ul class="villas-list">
	@foreach($villas as $val)
		@php($path = '/images/files/small/')

		@php($img = $val['file']
			? $val['crop'] ? $path . $val['crop'] : $path . $val['file']
			: '/images/files/no-image.jpg'
		)

		<li class="villa-item">
			<div class="villa-item--cover">
				<div class="villa-img">
					<figure style="background-image: url({{ $img }})"></figure>

					<ul class="hashes">
						@if($val['villas_by_the_sea'])<li>@lang('main.villas_by_the_sea')</li>@endif
						@if($val['is_hot'])<li>@lang('main.is_hot_offer')</li>@endif
						@if($val['villas_with_private_service'])<li>@lang('main.villas_with_private_service')</li>@endif
						@if($val['vacation_together'])<li>@lang('main.vacation_together')</li>@endif
					</ul>

					<a href="/villas/{{ $val['id'] . '/' . $full_url }}" class="link" target="_blank"></a>
					@php($is_favorite = array_search($val['id'], $favorites_id ?? []) !== false ? true : false)

					<a
						href="javascript:void(0)"
						class="villa-like like-button {!! $is_favorite ? 'active' : '' !!} like-button-{{ $val['id'] }}"
						onclick="filVil.addCart('{{ $val['id'] }}', '{!! $is_favorite ? 'remove' : 'add' !!}')"
					>
						<svg>
							<use xlink:href="/images/svg/sprite.svg#ico_action-like-full"></use>
						</svg>
					</a>
				</div>

				<div class="villa-main">
					<div class="name">
						<h3 class="title">
							<a href="/villas/{{ $val['id'] }}" target="_blank">{{ $langSt($val['name']) }}</a>
						</h3>

						<h5 class="place">{{ $langSt($val['place']) }}</h5>
					</div>

					<div class="price"><strong>&euro;</strong> {{ $val['price_money'] }}</div>
				</div>

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
		</li>
	@endforeach
</ul>

@if($paginate ?? false)
	{!! $villas->links('site.block.pagination') !!}
@endif
