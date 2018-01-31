@extends('site.layouts.default')

@section('content')
<section class="simple-page--head favorite--head">
	<div class="content content_md">
		<header>
			<h1 class="headline_main">Favorites</h1>
			<a href="#" class="send">
				<span>Отправить подборку другу</span>
				<i class="ico-fly"><svg> <use xlink:href="/images/svg/sprite.svg#ico_contact-fly"></use> </svg></i>
			</a>
		</header>
	</div>
	<div class="half-request">
		<div class="content content_md">
			<div class="fast-request">
				<form action="#">
					<div class="fast-request--wrap">
						<div class="fieldgroup">
							<div id="fastpicker">
								<div class="calendar">
									<div class="annotation">
										<span class="closed">Занято</span>
										<span class="opened">Свободно</span>
									</div>
								</div>
							</div>
							<div class="field">
								<label for="f_way">location</label>
								<div class="select">
									<select name="f_way" id="f_way">
										<option value=""></option>
										<option value="Все направления">Все направления</option>
										<option value="Афинское побережье">Афинское побережье</option>
										<option value="Закинтос">Закинтос</option>
										<option value="Крит">Крит</option>
										<option value="Материковая Греция">Материковая Греция</option>
									</select>
								</div>
							</div>
							<div class="field">
								<label for="check_in">check-in</label>
								<div class="input"><input id="check_in" type="text" data-picker-fast></div>
							</div>
							<div class="field">
								<label for="check_out">check-out</label>
								<div class="input"><input type="text" id="check_out" data-picker-fast></div>
							</div>
							<div class="field">
								<label for="rooms">rooms</label>
								<div class="select">
									<select name="rooms" id="rooms">
										<option value=""></option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
									</select>
								</div>
							</div>
							<div class="field">
								<div class="check">
									<label>
										<input type="checkbox">
										<span>Горячие предложения</span>
									</label>
								</div>
							</div>
						</div>
						<button class="btn btn_subm" type="submit">search</button>
					</div>
				</form>
			</div>

		</div>
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
							<a href="#" class="like"><svg> <use xlink:href="/images/svg/sprite.svg#ico_action-like-full"></use> </svg></a>
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
							<a href="#" class="like"><svg> <use xlink:href="/images/svg/sprite.svg#ico_action-like-full"></use> </svg></a>
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
							<a href="#" class="like"><svg> <use xlink:href="/images/svg/sprite.svg#ico_action-like-full"></use> </svg></a>
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