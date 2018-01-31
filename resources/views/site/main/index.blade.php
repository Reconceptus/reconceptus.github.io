@extends('site.layouts.default')

@section('content')
	<div class="section intro">
		<div class="intro-figure">
			<figure style="background-image: url('/images/bg/intro-bg.png')"></figure>
			<video muted autoplay loop>
				<source src="/images/media/Navagio-Beach.mp4" type="video/mp4">
			</video>
		</div>
		<div class="intro--main">
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
		<div class="intro-values">
			<div class="content content_md">
				<ul>
					<li>
						<i>
							<svg>
								<use xlink:href="/images/svg/sprite.svg#ico_advantage-cup"></use>
							</svg>
						</i>
						<div class="text">более 500 довольных клиентов</div>
					</li>
					<li>
						<i>
							<svg>
								<use xlink:href="/images/svg/sprite.svg#ico_advantage-column"></use>
							</svg>
						</i>
						<div class="text">9 лет на рынке и еще немного текста</div>
					</li>
					<li>
						<i>
							<svg>
								<use xlink:href="/images/svg/sprite.svg#ico_advantage-flag"></use>
							</svg>
						</i>
						<div class="text">лицензированные объекты по всей Греции</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="section offers">
		<div class="content">
			<div class="offers--wrap">
				<div class="item">
					<a href="#">
						<figure style="background-image: url('/images/bg/offer01.jpg')"></figure>
						<h3 class="title">Шикарные резиденции в нескольких шагах от пляжа</h3>
					</a>
				</div>
				<div class="item">
					<a href="#">
						<figure style="background-image: url('/images/bg/offer02.jpg')"></figure>
						<h3 class="title">Отдых вдвоем <br>ваш медовый месяц в греции</h3>
					</a>
				</div>
				<div class="item">
					<a href="#">
						<figure style="background-image: url('/images/bg/offer03.jpg')"></figure>
						<h3 class="title">виллы с отдельным обслуживанием</h3>
					</a>
				</div>
			</div>
		</div>
	</div>
	<section class="section qualities">
		<div class="content">
			<header>
				<h2 class="headline_main">Booking is easy as 1, 2, 3..</h2>
				<h4 class="headline_submain">The cream of the crop of London's accommodation</h4>
			</header>
			<div class="qualities--main">
				<div class="content content_md">
					<ul>
						<li>
							<div class="num">1</div>
							<h5 class="title">Надежность</h5>
							<p>Бронирование у греческого оператора без посредников</p>
						</li>
						<li>
							<div class="num">2</div>
							<h5 class="title">ИНДИВИДУАЛЬНЫЙ СЕРВИС 24/7</h5>
							<p>Мы всегда на связи!</p>
						</li>
						<li>
							<div class="num">3</div>
							<h5 class="title">ГАРАНТИЯ КАЧЕСТВА</h5>
							<p>Только лицензированные объекты, отвечающие всем требуемым стандартам</p>
						</li>
					</ul>
					<div class="btns_center">
						<a href="#" class="btn btn_subm">Получить подборку вилл</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="section best-offers">
		<div class="content">
			<header>
				<h3 class="headline_main">OUR BEST OFFERS</h3>
				<h4 class="headline_submain">The cream of the crop of London's accommodation</h4>
			</header>
			<div class="grid">
				<ul class="grid-list">
					<li>
						<a href="#">
							<figure style="background-image: url('/images/items/1926149_72_z.jpg')"></figure>
							<div class="grid--main">
								<h3 class="title">Agata</h3>
								<div class="price"><strong>&euro;</strong> 3 455</div>
								<div class="includes">
                                        <span class="bed">
                                            <i><svg> <use
																									xlink:href="/images/svg/sprite.svg#ico_villa-bed"></use> </svg></i>
                                            <span>6 Bedrooms</span>
                                        </span>
									<span class="bath">
                                            <i><svg> <use
																									xlink:href="/images/svg/sprite.svg#ico_villa-bath"></use> </svg></i>
                                            <span>3 Bathrooms</span>
                                        </span>
									<span class="sea">
                                            <i><svg> <use
																									xlink:href="/images/svg/sprite.svg#ico_villa-sea"></use> </svg></i>
                                            <span>Sea in 3 minutes</span>
                                        </span>
								</div>
							</div>

						</a>
					</li>
					<li>
						<a href="#">
							<figure style="background-image: url('/images/items/Sani-Beach-Hotel-Greece-summary.jpg')"></figure>
							<div class="grid--main">
								<h3 class="title">Anemos</h3>
								<div class="price"><strong>&euro;</strong> 3 455</div>
								<div class="includes">
                                        <span class="bed">
                                            <i><svg> <use
																									xlink:href="/images/svg/sprite.svg#ico_villa-bed"></use> </svg></i>
                                            <span>6 Bedrooms</span>
                                        </span>
									<span class="bath">
                                            <i><svg> <use
																									xlink:href="/images/svg/sprite.svg#ico_villa-bath"></use> </svg></i>
                                            <span>3 Bathrooms</span>
                                        </span>
									<span class="sea">
                                            <i><svg> <use
																									xlink:href="/images/svg/sprite.svg#ico_villa-sea"></use> </svg></i>
                                            <span>Sea in 3 minutes</span>
                                        </span>
								</div>
							</div>

						</a>
					</li>
					<li>
						<a href="#">
							<figure style="background-image: url('/images/items/amanzoe-greece-swimmingpool-large.jpg')"></figure>
							<div class="grid--main">
								<h3 class="title">Iliodor</h3>
								<div class="price"><strong>&euro;</strong> 3 455</div>
								<div class="includes">
                                        <span class="bed">
                                            <i><svg> <use
																									xlink:href="/images/svg/sprite.svg#ico_villa-bed"></use> </svg></i>
                                            <span>6 Bedrooms</span>
                                        </span>
									<span class="bath">
                                            <i><svg> <use
																									xlink:href="/images/svg/sprite.svg#ico_villa-bath"></use> </svg></i>
                                            <span>3 Bathrooms</span>
                                        </span>
									<span class="sea">
                                            <i><svg> <use
																									xlink:href="/images/svg/sprite.svg#ico_villa-sea"></use> </svg></i>
                                            <span>Sea in 3 minutes</span>
                                        </span>
								</div>
							</div>

						</a>
					</li>
					<li>
						<a href="#">
							<figure style="background-image: url('/images/items/art_77_91218.jpg')"></figure>
							<div class="grid--main">
								<h3 class="title">Amenos</h3>
								<div class="price"><strong>&euro;</strong> 3 455</div>
								<div class="includes">
                                        <span class="bed">
                                            <i><svg> <use
																									xlink:href="/images/svg/sprite.svg#ico_villa-bed"></use> </svg></i>
                                            <span>6 Bedrooms</span>
                                        </span>
									<span class="bath">
                                            <i><svg> <use
																									xlink:href="/images/svg/sprite.svg#ico_villa-bath"></use> </svg></i>
                                            <span>3 Bathrooms</span>
                                        </span>
									<span class="sea">
                                            <i><svg> <use
																									xlink:href="/images/svg/sprite.svg#ico_villa-sea"></use> </svg></i>
                                            <span>Sea in 3 minutes</span>
                                        </span>
								</div>
							</div>

						</a>
					</li>
					<li>
						<a href="#">
							<figure style="background-image: url('/images/items/eirini-luxury-villas-patmos.jpg')"></figure>
							<div class="grid--main">
								<h3 class="title">Cleonica</h3>
								<div class="price"><strong>&euro;</strong> 3 455</div>
								<div class="includes">
                                        <span class="bed">
                                            <i><svg> <use
																									xlink:href="/images/svg/sprite.svg#ico_villa-bed"></use> </svg></i>
                                            <span>6 Bedrooms</span>
                                        </span>
									<span class="bath">
                                            <i><svg> <use
																									xlink:href="/images/svg/sprite.svg#ico_villa-bath"></use> </svg></i>
                                            <span>3 Bathrooms</span>
                                        </span>
									<span class="sea">
                                            <i><svg> <use
																									xlink:href="/images/svg/sprite.svg#ico_villa-sea"></use> </svg></i>
                                            <span>Sea in 3 minutes</span>
                                        </span>
								</div>
							</div>

						</a>
					</li>
					<li>
						<a href="#">
							<figure style="background-image: url('/images/items/Mykonos-2_13.jpg')"></figure>
							<div class="grid--main">
								<h3 class="title">Anemos</h3>
								<div class="price"><strong>&euro;</strong> 3 455</div>
								<div class="includes">
                                        <span class="bed">
                                            <i><svg> <use
																									xlink:href="/images/svg/sprite.svg#ico_villa-bed"></use> </svg></i>
                                            <span>6 Bedrooms</span>
                                        </span>
									<span class="bath">
                                            <i><svg> <use
																									xlink:href="/images/svg/sprite.svg#ico_villa-bath"></use> </svg></i>
                                            <span>3 Bathrooms</span>
                                        </span>
									<span class="sea">
                                            <i><svg> <use
																									xlink:href="/images/svg/sprite.svg#ico_villa-sea"></use> </svg></i>
                                            <span>Sea in 3 minutes</span>
                                        </span>
								</div>
							</div>

						</a>
					</li>
				</ul>
				<div class="btns_center">
					<a href="#" class="more">Больше предложений</a>
				</div>
			</div>
		</div>
	</section>
	<section class="section blog-section">
		<div class="content">
			<header>
				<h3 class="headline_main">БЛОГ</h3>
				<h4 class="headline_submain">Самое интересное о Греции от местных</h4>
			</header>
		</div>
		<div class="blog-box">
			<div class="content">
				<div class="blog-box--wrap">
					<ul class="layout layout_lg">
						<li>
							<article class="article">
								<figure style="background-image: url('/images/items/10911829_78_z.jpg')"><a href="article.html"></a>
								</figure>
								<div class="head">
									<h4 class="title"><a href="article.html">WHERE TO STAY IN London FOR A HEALTHY BREAKFAST: A CURATED
											GUIDE</a></h4>
									<div class="article-data">
										<time>25 марта 2017</time>
										<span class="views">
                                                <i><svg> <use
																											xlink:href="/images/svg/sprite.svg#ico_blog-eye"></use> </svg></i>
                                                <span>3445</span>
                                            </span>
										<span class="comments">
                                                <i><svg> <use
																											xlink:href="/images/svg/sprite.svg#ico_blog-message"></use> </svg></i>
                                                <span>27</span>
                                            </span>
									</div>
								</div>
							</article>
						</li>
						<li>
							<article class="article">
								<figure style="background-image: url('/images/items/art_77_91218.jpg')"><a href="article.html"></a>
								</figure>
								<div class="head">
									<h4 class="title"><a href="article.html">THINGS TO DO AFTER DARK IN LONDON: AN EXPERT GUIDE</a></h4>
									<div class="article-data">
										<time>25 марта 2017</time>
										<span class="views">
                                                <i><svg> <use
																											xlink:href="/images/svg/sprite.svg#ico_blog-eye"></use> </svg></i>
                                                <span>3445</span>
                                            </span>
										<span class="comments">
                                                <i><svg> <use
																											xlink:href="/images/svg/sprite.svg#ico_blog-message"></use> </svg></i>
                                                <span>27</span>
                                            </span>
									</div>
								</div>
							</article>
						</li>
						<li>
							<article class="article">
								<figure style="background-image: url('/images/items/oia-hotel.jpg')"><a href="article.html"></a>
								</figure>
								<div class="head">
									<h4 class="title"><a href="article.html">ГАСТРОНОМИЧЕСКИЕ РЕГИОНЫ ГРЕЦИИ: ЧТО И ГДЕ ПОПРОБОВАТЬ?</a>
									</h4>
									<div class="article-data">
										<time>25 марта 2017</time>
										<span class="views">
                                                <i><svg> <use
																											xlink:href="/images/svg/sprite.svg#ico_blog-eye"></use> </svg></i>
                                                <span>3445</span>
                                            </span>
										<span class="comments">
                                                <i><svg> <use
																											xlink:href="/images/svg/sprite.svg#ico_blog-message"></use> </svg></i>
                                                <span>27</span>
                                            </span>
									</div>
								</div>
							</article>
						</li>
						<li>
							<article class="article">
								<figure style="background-image: url('/images/items/luxury_room2.jpg')"><a href="article.html"></a>
								</figure>
								<div class="head">
									<h4 class="title"><a href="article.html">В ГРЕЦИЮ ЗА ЗДОРОВЬЕМ И КРАСОТОЙ: ЦЕЛЕБНЫЕ ИСТОЧНИКИ И
											КУРОРТЫ</a></h4>
									<div class="article-data">
										<time>25 марта 2017</time>
										<span class="views">
                                                <i><svg> <use
																											xlink:href="/images/svg/sprite.svg#ico_blog-eye"></use> </svg></i>
                                                <span>3445</span>
                                            </span>
										<span class="comments">
                                                <i><svg> <use
																											xlink:href="/images/svg/sprite.svg#ico_blog-message"></use> </svg></i>
                                                <span>27</span>
                                            </span>
									</div>
								</div>
							</article>
						</li>
					</ul>
					<div class="btns_center">
						<a href="#" class="more">Больше статей</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<div class="section single-request">
		<div class="content content_md">
			<div class="single-request--wrap">
				<div class="title">Здесь фраза про индивидуальный подбор виллы под разные требования</div>
				<a href="#" class="btn">Запрос на подбор</a>
			</div>
		</div>
	</div>
	<div class="section banners">
		<div class="content">
			<div class="banners-box">
				<div class="ban">
					<div class="banner-item">
						<figure>
							<img src="/images/defaulf-banner.jpg" alt="banner">
						</figure>
					</div>
				</div>
				<div class="ban">
					<div class="info">
						<div class="info-text">
							<h5 class="title">Владельцы вилл</h5>
							<p>Размещая виллу на Grecobooking вы получите текст в три строки</p>
							<div class="btns_center">
								<a href="#" class="more">Запрос на размещение</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<section class="section home-request">
		<div class="content">
			<header>
				<h3 class="headline_main">SELECTION REQUEST</h3>
				<h4 class="headline_submain">Заполните заявку и получите подборку вилл по вашим кретриям</h4>
			</header>
			<div class="home-request--wrap">
				<div class="home-request--main" style="background-image: url('/images/bg/offer01.jpg')">
					<div class="form-request">
						<div class="form">
							<form action="#">
								<div class="form-box">
									<div class="fieldset pickerfields">
										<div class="field">
											<label for="arrivalDate">*Дата заезда</label>
											<div class="input"><input id="arrivalDate" type="text" data-picker-full></div>
										</div>
										<div class="field">
											<label for="departureDate">*Дата отъезда</label>
											<div class="input"><input type="text" id="departureDate" data-picker-full></div>
										</div>
										<div id="picker">
											<div class="calendar">
												<div class="annotation">
													<span class="closed">Занято</span>
													<span class="opened">Свободно</span>
												</div>
											</div>
										</div>
									</div>
									<div class="fieldset">
										<div class="field">
											<label for="adults">*Взрослые</label>
											<div class="select">
												<select name="adults" id="adults">
													<option value=""></option>
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4</option>
												</select>
											</div>
										</div>
										<div class="field">
											<label for="childUntil12">*Дети до 12 лет</label>
											<div class="select">
												<select name="childUntil12" id="childUntil12">
													<option value=""></option>
													<option value="Нет">Нет</option>
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4</option>
												</select>
											</div>
										</div>
										<div class="field">
											<label for="babies">*Дети от 0 до 2 лет</label>
											<div class="select">
												<select name="babies" id="babies">
													<option value=""></option>
													<option value="Нет">Нет</option>
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4</option>
												</select>
											</div>
										</div>
									</div>
									<div class="fieldset">
										<div class="field">
											<label for="way">*Направление</label>
											<div class="select">
												<select name="way" id="way">
													<option value=""></option>
													<option value="Все направления">Все направления</option>
													<option value="Афинское побережье">Афинское побережье</option>
													<option value="Закинтос">Закинтос</option>
													<option value="Крит">Крит</option>
													<option value="Материковая Греция">Материковая Греция</option>
												</select>
											</div>
										</div>
									</div>
									<div class="fieldset">
										<div class="field">
											<label for="budget">*Бюджет в неделю, евро</label>
											<div class="input"><input id="budget" type="text"></div>
										</div>
									</div>
									<div class="fieldset">
										<div class="field">
											<label for="name">*Ваше имя</label>
											<div class="input"><input id="name" type="text"></div>
										</div>
										<div class="field">
											<label for="telephone">*Телефон</label>
											<div class="input"><input type="text" id="telephone"></div>
										</div>
										<div class="field">
											<label for="mail">*E-mail</label>
											<div class="input"><input type="text" id="mail"></div>
										</div>
									</div>
									<div class="fieldset">
										<div class="field">
											<label for="wishes">Напишите пожелания</label>
											<div class="input"><input id="wishes" type="text"></div>
										</div>
									</div>
									<div class="fieldset">
										<div class="field">
											<label for="source">Откуда вы о нас узнали</label>
											<div class="input"><input id="source" type="text"></div>
										</div>
									</div>
									<p class="asterisk">*Обязательные поля</p>
									<button class="btn btn_subm" type="submit">Отправить запрос</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
@endsection
