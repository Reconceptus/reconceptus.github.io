@extends('site.layouts.default')

@section('content')
	<section class="simple-page--head favorite--head">
		<div class="animate-bg"></div>
		<div class="content content_md">
			<header>
				<h1 class="headline_main">Favorites</h1>
				<a href="javascript:void(0);" class="send show-modal" data-modal="friend-form">
					<span>Отправить подборку другу</span>
					<i class="ico-fly"><svg> <use xlink:href="assets/svg/sprite.svg#ico_contact-fly"></use> </svg></i>
				</a>
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
					<ul class="villas-list">
						<li class="villa-item">
							<div class="villa-img">
								<figure style="background-image: url('/images/items/1926149_72_z.jpg')"></figure>
								<a href="#" class="link"></a>
								<a href="#" class="villa-like"><svg> <use xlink:href="/images/svg/sprite.svg#ico_action-like-full"></use> </svg></a>
							</div>
							<div class="villa-main">
								<div class="name">
									<h3 class="title"><a href="#">River</a></h3>
									<h5 class="place">Heraclion</h5>
								</div>
								<div class="price"><strong>&euro;</strong> 7890</div>
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
						<li class="villa-item">
							<div class="villa-img">
								<figure style="background-image: url('/images/items/Sani-Beach-Hotel-Greece-summary.jpg')"></figure>
								<a href="#" class="link"></a>
								<a href="#" class="villa-like"><svg> <use xlink:href="/images/svg/sprite.svg#ico_action-like-full"></use> </svg></a>
							</div>
							<div class="villa-main">
								<div class="name">
									<h3 class="title"><a href="#">River</a></h3>
									<h5 class="place">Heraclion</h5>
								</div>
								<div class="price"><strong>&euro;</strong> 7890</div>
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
						<li class="villa-item">
							<div class="villa-img">
								<figure style="background-image: url('/images/items/amanzoe-greece-swimmingpool-large.jpg')"></figure>
								<a href="#" class="link"></a>
							</div>
							<div class="villa-main">
								<div class="name">
									<h3 class="title"><a href="#">River</a></h3>
									<h5 class="place">Heraclion</h5>
								</div>
								<div class="price"><strong>&euro;</strong> 7890</div>
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
						<li class="villa-item">
							<div class="villa-img">
								<figure style="background-image: url('/images/items/art_77_91218.jpg')"></figure>
								<ul class="hashes">
									<li>На пляже</li>
									<li>Горячее предложение</li>
								</ul>
								<a href="#" class="link"></a>
								<a href="#" class="villa-like active"><svg> <use xlink:href="/images/svg/sprite.svg#ico_action-like-full"></use> </svg></a>
							</div>
							<div class="villa-main">
								<div class="name">
									<h3 class="title"><a href="#">River</a></h3>
									<h5 class="place">Heraclion</h5>
								</div>
								<div class="price"><strong>&euro;</strong> 7890</div>
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
					</ul>
					<div class="paging_center">
						<div class="paging-list">
							<a href="#" class="page-one prev"><svg> <use xlink:href="/images/svg/sprite.svg#ico_page-prev"></use> </svg></a>
							<a href="#" class="page-one">4</a>
							<a href="#" class="page-one current">5</a>
							<a href="#" class="page-one">6</a>
							<a href="#" class="page-one next"><svg> <use xlink:href="/images/svg/sprite.svg#ico_page-next"></use> </svg></a>
						</div>
						<span class="total">из 8</span>
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection