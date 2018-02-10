@extends('site.layouts.default')

@section('content')
	<section class="simple-page--bg">
		<div class="intro-figure dynamic">
			<figure style="background-image: url('/images/bg/cryteria.jpg')"></figure>
		</div>
		<div class="content">
			<header class="light-style">
				<h1 class="headline_main">Крит</h1>
			</header>
		</div>
	</section>

	<div class="simple-page--main">
		<div class="content content_sm">
			<div class="location-text text-box">
				<blockquote>Легенда гласит, что Родос был подарен богу солнца Гелиосу самим Зевсом. Остров поднялся с морского дна и распустился, подобно цветку. Его красота, пропитанная и тысячекратно умноженная солнечным светом покровителя и владельца, осененная его любовью, впечатляла даже саму Афродиту.Именно о них мы сегодня поговорим.</blockquote>
				<p>Здесь стили статьи. Здесь Гелиос встретил своб будущую жену, нимфу Роду, подарившую ему семерых детей. Позже их потомки, блистательные родосцы, стали спутниками Александра Македонского, основоположниками науки о мореплавании, великолепными скульпторами, превратившими остров в большую выставку-галерею своего искусства. Одним из экспонатов был Колосс Родосский – монумент, представлявший любимого бога родосцев и ставший одним из чудес света.</p>
				<p>Бог солнца не оставлял свой остров на протяжении всей его истории. Родосцы сумели дать отпор множеству завоевателей, в архитектуре и культуре можно найти следы эллинов, римлян, византийцев, венецианцев, сарацинов, крестоносцев и турков. На Родосе до сих пор царит дух средневековья и иногда кажется, что время застыло над залитым солнцем островом. Не зря именно здесь ежегодно в начале лета проводится удивительный фестиваль Средневековья, переходящий в Ярмарку Роз.</p>
			</div>
		</div>
		<div class="villas">
			<div class="content content_md">
				<header>
					<h3 class="headline_main">Виллы на Крите</h3>
					<h4 class="headline_submain">The cream of the crop of London's accommodation</h4>
				</header>
			</div>
			<div class="content">
				<div class="half-request double">
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
										<div class="field f-100">
											<label for="location">location</label>
											<div class="select">
												<select name="location" id="location">
													<option value="Все направления">Все направления</option>
													<option value="Афинское побережье">Афинское побережье</option>
													<option value="Закинтос">Закинтос</option>
													<option value="Крит">Крит</option>
													<option value="Материковая Греция">Материковая Греция</option>
												</select>
											</div>
										</div>
										<div class="field f-50">
											<label for="check_in">check-in</label>
											<div class="input"><input id="check_in" name="check_in" type="text" data-picker-fast></div>
										</div>
										<div class="field f-50">
											<label for="check_out">check-out</label>
											<div class="input"><input type="text" name="check_out" id="check_out" data-picker-fast></div>
										</div>
										<div class="field f-50">
											<label for="rooms">rooms</label>
											<div class="select">
												<select name="rooms" id="rooms">
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4</option>
												</select>
											</div>
										</div>
										<div class="field f-50">
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
			</div>
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
		<div class="section single-request">
			<div class="content content_md">
				<div class="single-request--wrap">
					<div class="title animate-bg"><span>Здесь фраза про индивидуальный подбор виллы под разные требования</span></div>
					<a href="selection-request.html" class="btn">Запрос на подбор</a>
				</div>
			</div>
		</div>
		<section class="section short-offers">
			<div class="content">
				<div class="grid">
					<ul class="grid-list">
						<li>
							<a href="#">
								<figure style="background-image: url('/images/items/1926149_72_z.jpg')"></figure>
								<div class="grid--main">
									<h3 class="title">Афинское побережье</h3>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<figure style="background-image: url('/images/items/Sani-Beach-Hotel-Greece-summary.jpg')"></figure>
								<div class="grid--main">
									<h3 class="title">Закинтос</h3>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<figure style="background-image: url('/images/items/amanzoe-greece-swimmingpool-large.jpg')"></figure>
								<div class="grid--main">
									<h3 class="title">Корфу</h3>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<figure style="background-image: url('/images/items/art_77_91218.jpg')"></figure>
								<div class="grid--main">
									<h3 class="title">Крит</h3>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<figure style="background-image: url('/images/items/eirini-luxury-villas-patmos.jpg')"></figure>
								<div class="grid--main">
									<h3 class="title">Материковая греция</h3>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<figure style="background-image: url('/images/items/Mykonos-2_13.jpg')"></figure>
								<div class="grid--main">
									<h3 class="title">Миконос</h3>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<figure style="background-image: url('/images/items/10911829_78_z.jpg')"></figure>
								<div class="grid--main">
									<h3 class="title">Пенелопесс</h3>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<figure style="background-image: url('/images/items/art_77_91218.jpg')"></figure>
								<div class="grid--main">
									<h3 class="title">Родос</h3>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<figure style="background-image: url('/images/items/oia-hotel.jpg')"></figure>
								<div class="grid--main">
									<h3 class="title">Санторини</h3>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<figure style="background-image: url('/images/items/luxury_room2.jpg')"></figure>
								<div class="grid--main">
									<h3 class="title">Халдики</h3>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	</div>
@endsection
