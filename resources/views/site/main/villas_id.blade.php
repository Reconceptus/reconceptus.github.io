@extends('site.layouts.default')

@section('content')
	<section class="simple-page--bg" data-villa-part="photo">
		<div class="intro-figure slider">
			<!--<figure style="background-image: url('/images/bg/about-company.jpg')"></figure>-->
			<div class="villa-carousel owl-carousel">
				<div class="item"><figure style="background-image: url('/images/items/10911829_78_z.jpg')"></figure></div>
				<div class="item"><figure style="background-image: url('/images/items/Sani-Beach-Hotel-Greece-summary.jpg')"></figure></div>
			</div>
			<a href="#" class="villa-like"><svg> <use xlink:href="/images/svg/sprite.svg#ico_action-like-full"></use> </svg></a>
		</div>
	</section>
	<div class="villa-page--wrap">
		<div class="villa-nav">
			<div id="villaNav" class="short-info">
				<div class="content content_md">
					<div class="short-info-data">
						<div class="short-info-attributes">
							<div class="item" data-nav-part="about">
								<h2 class="name">Vanesa</h2>
								<div class="place">
									<i><svg> <use xlink:href="/images/svg/sprite.svg#ico_mark"></use> </svg></i>
									<span>Heraclion</span>
								</div>
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
						</div>
						<div class="short-info-navigate">
							<span class="nav-icon" data-nav-part="photo">
								<i class="ico-photo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 63" fill="currentColor" enable-background="new 0 0 63 63"><path d="m56.728 56.51h-51.27c-3.299 0-5.456-2.467-5.456-5.615v-28.373c0-3.266 2.268-6.03 5.456-6.03h15.16l1.145-5.444c.675-2.707 3.063-4.559 5.82-4.559h7.577c2.757 0 5.146 1.852 5.808 4.505l1.156 5.498h14.611c3.168 0 6.272 2.759 6.272 6.02v28.373c0 3.201-2.939 5.615-6.272 5.615m-51.27-37.01c-1.536 0-2.456 1.413-2.456 3.02v28.373c0 1.515.785 2.614 2.456 2.614h51.27c1.649 0 3.272-1.099 3.272-2.614v-28.373c0-1.611-1.756-3.02-3.272-3.02h-15.829c-.71 0-1.322-.497-1.467-1.191l-1.394-6.636c-.315-1.258-1.507-2.176-2.885-2.176h-7.577c-1.378 0-2.569.918-2.897 2.23l-1.382 6.582c-.146.694-.758 1.191-1.468 1.191h-16.373"/><path d="m30.762 45.981c-5.511 0-9.994-4.485-9.994-9.996 0-5.513 4.483-9.997 9.994-9.997 5.509 0 9.993 4.484 9.993 9.997 0 5.511-4.484 9.996-9.993 9.996m0-16.992c-3.857 0-6.994 3.138-6.994 6.996 0 3.857 3.137 6.995 6.994 6.995 3.856 0 6.993-3.138 6.993-6.995 0-3.858-3.137-6.996-6.993-6.996"/><path d="m30.762 51.34c-8.465 0-15.352-6.889-15.352-15.355 0-8.468 6.887-15.356 15.352-15.356 8.464 0 15.35 6.888 15.35 15.356 0 8.466-6.886 15.355-15.35 15.355m0-27.711c-6.811 0-12.352 5.543-12.352 12.356 0 6.812 5.541 12.354 12.352 12.354 6.81 0 12.35-5.542 12.35-12.354 0-6.813-5.54-12.356-12.35-12.356"/><path d="m17.573 13.494h-8c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h8c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5"/><path d="m49.43 11.494h.622c2.379 0 3.945 1.881 3.945 4.261v1.741h-8v-1.741c0-2.38 1.054-4.261 3.433-4.261"/></svg></i>
								<span class="tooltip">Фото</span>
							</span>
							<span class="nav-icon" data-nav-part="layout">
								<i class="ico-plan"><svg xmlns="http://www.w3.org/2000/svg" width="190" height="178" viewBox="0 0 3788 3554" shape-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path fill="currentColor" d="m3788 935h-1590v-93h-187v280h1590v2245h-1403v-1684h-187v1684h-1824v-2245h1076v-327h-187v140h-889v-748h1824v94h187v-281h-2198v3554h3788z"/></svg></i>
								<span class="tooltip">Планировка</span>
							</span>
							<span class="nav-icon" data-nav-part="service">
								<i class="ico-service"><svg enable-background="new 0 0 800 800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="m745.16 695.9h-690.32c-8.875 0-16.08 7.196-16.08 16.08s7.206 16.08 16.08 16.08h690.32c8.885 0 16.08-7.196 16.08-16.08s-7.195-16.08-16.08-16.08"/><path d="m443.41 170.7c9.637-10.499 15.568-24.443 15.568-39.788 0-32.52-26.461-58.973-58.981-58.973-32.52 0-58.973 26.454-58.973 58.973 0 15.344 5.931 29.29 15.56 39.788-183.77 21.572-326.86 178.16-326.86 367.64 0 4.972.18 9.907.377 14.807.341 8.633 7.43 15.452 16.06 15.452h337.76v47.24c0 1.651.323 3.213.79 4.721h-329.86c-8.875 0-16.08 7.196-16.08 16.08 0 8.883 7.206 16.08 16.08 16.08h690.32c8.885 0 16.08-7.197 16.08-16.08 0-8.884-7.195-16.08-16.08-16.08h-329.88c.467-1.508.791-3.069.791-4.721v-47.24h337.76c8.633 0 15.723-6.819 16.06-15.452.197-4.899.387-9.835.387-14.807-.0001-189.48-143.09-346.07-326.87-367.64m-43.41-66.6c14.788 0 26.821 12.02 26.821 26.813s-12.03 26.812-26.821 26.812c-14.788 0-26.813-12.02-26.813-26.812s12.03-26.813 26.813-26.813m-338.12 432.33c1.032-185.57 152.31-336.21 338.12-336.21 185.8 0 337.09 150.65 338.12 336.21h-676.23"/><path d="m361 263.83c-196.7 43.07-223.28 214.1-223.53 215.83-1.256 8.795 4.864 16.941 13.648 18.18.772.127 1.535.162 2.289.162 7.878 0 14.752-5.779 15.9-13.801.216-1.508 23.438-150.59 198.58-188.94 8.668-1.902 14.16-10.481 12.258-19.15-1.886-8.669-10.393-14.179-19.15-12.276"/></g></svg></i>
								<span class="tooltip">Удобства и услуги</span>
							</span>
							<span class="nav-icon" data-nav-part="map">
								<i class="ico-map"><svg enable-background="new 0 0 32 32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="m16 27c-.23 0-.461-.079-.648-.238-.242-.206-5.942-5.1-8.32-10.438-.225-.504.002-1.096.507-1.32.503-.224 1.095.002 1.32.507 1.739 3.905 5.577 7.699 7.124 9.13 2.73-2.65 8.02-8.572 8.02-12.411 0-4.538-3.589-8.23-8-8.23s-8 3.692-8 8.23c0 .552-.448 1-1 1s-1-.448-1-1c0-5.641 4.486-10.23 10-10.23 5.514 0 10 4.589 10 10.23 0 5.912-8.944 14.159-9.325 14.508-.191.174-.433.262-.675.262"/><path d="m16 16c-2.206 0-4-1.794-4-4s1.794-4 4-4c2.206 0 4 1.794 4 4s-1.794 4-4 4m0-6c-1.103 0-2 .897-2 2s.897 2 2 2c1.103 0 2-.897 2-2s-.897-2-2-2"/><path d="m29 30h-26c-.356 0-.686-.189-.865-.498-.179-.309-.18-.688-.003-.998l4-7c.274-.479.885-.647 1.364-.372.479.274.646.885.372 1.364l-3.145 5.504h22.553l-3.145-5.504c-.274-.479-.107-1.09.372-1.364.479-.276 1.09-.107 1.364.372l4 7c.177.31.176.689-.003.998-.178.309-.508.498-.864.498"/></svg></i>
								<span class="tooltip">На карте</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="content content_md">
			<div class="villa-layout">
				<div class="villa-layout--main">
					<div class="villa-part" data-villa-part="about">
						<div class="text-box">
							<p>Вилла «Vanesa» — это уютная, современная каменная вилла с панорамным видом на море, с просторным участком, находящаяся всего в 20 метрах от песчаного пляжа. Это короткое описание. Вилла состоит из основного здания, площадью 170 кв.м. и студии, площадью 35 кв.м. На первом этаже находится просторная гостиная, соединенная с полностью оборудованной кухней. Рядом расположена спальня с двуспальной кроватью и ванной комнатой. Из гостиной французские двери ведут на крытую веранду с уличной мебелью и садом с большим бассейном, площадью 56 </p>
						</div>
						<div class="cite">
							<i class="key"><svg> <use xlink:href="/images/svg/sprite.svg#ico_cite-key"></use> </svg></i>
							Именно здесь лучший вид на эгейское море и традиционный греческий интерьер
							<i class="infinity"><svg> <use xlink:href="/images/svg/sprite.svg#ico_cite-infinity"></use> </svg></i>
						</div>
					</div>
					<section class="villa-part" data-villa-part="layout">
						<header class="sm">
							<h3 class="headline_main">Планировка</h3>
						</header>
						<div class="text-box">
							<p>Вилла состоит из основного здания, площадью 170 кв.м. и студии, площадью 35 кв.м. На первом этаже находится просторная стиль ссылки гостиная, соединенная с полностью оборудованной кухней. Рядом расположена спальня с двуспальной кроватью и ванной комнатой. Из гостиной французские двери ведут на крытую веранду с уличной мебелью и садом с большим бассейном, площадью 56 кв.м. Внешняя лестница ведет в отдельную студию на нижнем уровне с кухонным уголком, ванной комнатой с душем и двуспальной кроватью.</p>
						</div>
					</section>
					<section class="villa-part" data-villa-part="comforts">
						<header class="sm">
							<h3 class="headline_main">Удобства</h3>
						</header>
						<div class="text-box">
							<ul class="column">
								<li>Система кондиционирования воздуха</li>
								<li>Бытовая техника на кухне: плита, духовка, посудомоечная машина, холодильник-морозильник, тостер, кофеварка, винный шкаф, электрочайник</li>
								<li>3D ТV, DVD-CD в гостиной</li>
								<li>Hi-Fi музыкальная система с iPod и iPhone подключением</li>
								<li>ТV, DVD в каждой спальне</li>
								<li>Wi-Fi интернет</li>
								<li>Стиральная машина</li>
								<li>Утюг и гладильная доска</li>
								<li>Фен</li>
								<li>Террасы и балконы</li>
								<li>«Инфинити» бассейн</li>
								<li>Джакузи около бассейна</li>
								<li>Шезлонги и зонты у бассейна</li>
								<li>Барбекю</li>
								<li>Сейф</li>
								<li>Охранная и пожарная сигнализация</li>
								<li>Замки с кодом безопасности</li>
								<li>Огороженная территория</li>
								<li>Место для парковки</li>
							</ul>
						</div>
					</section>
					<section class="villa-part" data-villa-part="service">
						<header class="sm">
							<h3 class="headline_main">Услуги</h3>
						</header>
						<div class="text-box">
							<ul class="column">
								<li>Смена белья</li>
								<li>Ежедневная уборка</li>
								<li>Массаж по требованию</li>
								<li>Повар по требованию</li>
							</ul>
						</div>
					</section>
				</div>
				<div class="villa-layout--side">
					<div class="villa-request">
						<div class="price"><strong>&euro;</strong> 3 455</div>
						<div class="villa-request-form">
							<input type="radio" id="showVillaForm">
							<form action="#">
								<div class="fields-part">
									<div class="fieldset pickerfields">
										<div class="field">
											<label for="arrivalDate">Check in</label>
											<div class="input"><input id="arrivalDate" type="text" data-picker-full></div>
										</div>
										<div class="field">
											<label for="departureDate">Check out</label>
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
										<div class="field field-select">
											<label for="guests">Гости</label>
											<div class="select">
												<select name="guests" id="guests">
													<option value=""></option>
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4</option>
												</select>
											</div>
										</div>
										<div class="field field-select">
											<label for="children">Дети</label>
											<div class="select">
												<select name="children" id="children">
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
											<label for="mail">Your e-mail</label>
											<div class="input"><input type="text" id="mail"></div>
										</div>
									</div>
									<div class="fieldset">
										<div class="field">
											<label for="wishes">Ваши пожелания</label>
											<div class="input"><input id="wishes" type="text" ></div>
										</div>
									</div>
								</div>
								<div class="submit-part">
									<div class="submit-btn">
										<label for="showVillaForm"></label>
										<button class="btn btn_subm" type="submit">Забронировать</button>
									</div>
									<div class="submit-actions">
										<a href="#" class="like">
											<svg> <use xlink:href="/images/svg/sprite.svg#ico_action-like"></use> </svg>
										</a>
										<a href="#" class="send">
											<svg> <use xlink:href="/images/svg/sprite.svg#ico_action-write"></use> </svg>
										</a>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="experts">
			<div class="content">
				<div class="experts-box">
					<div class="content content_md">
						<div class="worker">
							<div class="worker-img">
								<figure>
									<img src="/images/workers/worker01.png" alt="Иван Петров">
								</figure>
								<h4 class="name">Мнение эксперта Grecobooking</h4>
							</div>
							<div class="worker-descr">
								<div class="quote">
									<p>На мой взгляд эта вилла идеально подходит для желающих провести отпуск в комфортной современной вилле в живописной и зеленой местности в 5-и минутах ходьбы от развлечений, магазинов, кафе и таверн.</p>
								</div>
								<h6 class="position">Мария, туризм-эксперт</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<section class="showplaces" data-villa-part="map">
			<div class="content content_md">
				<header class="sm">
					<h3 class="headline_main">Расстояния и расположение</h3>
					<h4 class="headline_submain">The cream of the crop of London's accommodation</h4>
				</header>
				<div class="showplaces-list">
					<dl>
						<dt><span>Аэропорт Ираклиона</span></dt>
						<dd>30 км, 20 минут на машине</dd>
					</dl>
					<dl>
						<dt><span>Исторический музей</span></dt>
						<dd>3 км, 10 минут пешком</dd>
					</dl>
					<dl>
						<dt><span>Исторический центр города</span></dt>
						<dd>2 км, 10 минут пешком</dd>
					</dl>
					<dl>
						<dt><span>Торговая площадь города</span></dt>
						<dd>2 км, 10 минут пешком</dd>
					</dl>
					<dl>
						<dt><span>Улица с ресторанчиками</span></dt>
						<dd>500м</dd>
					</dl>
					<dl>
						<dt><span>Текст в две строчки с переносом на новую строчку</span></dt>
						<dd>300 м</dd>
					</dl>
				</div>
			</div>
		</section>
		<div class="villa-map">
			<div class="content">
				<div class="villa-map--wrap">
					<div id="place" class="map-box"></div>
					<script type="text/javascript">
						var place;
						function initMap() {

							var icon = './images/villa-mark.png';

							var mapOptions = {
								zoom: 12,
								scrollwheel: false,
								center: new google.maps.LatLng(38.672924, 23.183181)
							};
							place = new google.maps.Map(document.getElementById('place'), mapOptions );

							var marker = new google.maps.Marker({
								position: {lat: 38.658924, lng: 23.190181},
								map: place,
								icon: icon
							});
						}
					</script>
					<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC6PFq1z3G7_YGiZl1KUuVVH_kxI2YAdaA&callback=initMap"></script>
					<div class="place-description">
						<figure style="background-image: url('/images/items/Mykonos-2_13.jpg')"></figure>
						<div class="text">
							<h4 class="title">Theologos</h4>
							<p>Stepping inside this huge warehouse in Bermondsey, you wouldn’t know that you were in a commercial gallery and that the art was for sale. </p>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
	<div class="simple-page--main">
		<section class="section best-offers">
			<div class="content">
				<header>
					<h3 class="headline_main">Что есть рядом</h3>
					<h4 class="headline_submain">The cream of the crop of London's accommodation</h4>
				</header>
				<div class="grid">
					<ul class="grid-list">
						<li>
							<a href="#">
								<figure style="background-image: url('/images/items/1926149_72_z.jpg')"></figure>
								<div class="grid--main">
									<h3 class="title">Настоящая греческая кухня</h3>
									<div class="short">В пяти минутах ходьбы от виллы есть знаменитая кулинарная улочка Название с легендарныи семейными ресторанами, шумными барами и уютными кондитерскими, каждый найдет кухню по вкусу!</div>
								</div>

							</a>
						</li>
						<li>
							<a href="#">
								<figure style="background-image: url('/images/items/Sani-Beach-Hotel-Greece-summary.jpg')"></figure>
								<div class="grid--main">
									<h3 class="title">ПЛЯЖ ЭЛАФОНИСИ</h3>
									<div class="short">Знаменитый пляж с розовым песком, его приносит сюда течением из Сахары. Здесь чистая прохладная вода, пологий вход в море и небольшая глубина – в общем, идеальное место для отдыха с детьми.</div>
								</div>

							</a>
						</li>
						<li>
							<a href="#">
								<figure style="background-image: url('/images/items/amanzoe-greece-swimmingpool-large.jpg')"></figure>
								<div class="grid--main">
									<h3 class="title">ЗАГОЛОВОК</h3>
									<div class="short">Знаменитый пляж с розовым песком, его приносит сюда течением из Сахары. Здесь чистая прохладная вода, пологий вход в море и небольшая глубина – в общем, идеальное место для отдыха с детьми.</div>
								</div>

							</a>
						</li>
						<li>
							<a href="#">
								<figure style="background-image: url('/images/items/art_77_91218.jpg')"></figure>
								<div class="grid--main">
									<h3 class="title">ПЛЯЖ ЭЛАФОНИСИ</h3>
									<div class="short">Знаменитый пляж с розовым песком, его приносит сюда течением из Сахары. Здесь чистая прохладная вода, пологий вход в море и небольшая глубина – в общем, идеальное место для отдыха с детьми.</div>
								</div>

							</a>
						</li>
						<li>
							<a href="#">
								<figure style="background-image: url('/images/items/eirini-luxury-villas-patmos.jpg')"></figure>
								<div class="grid--main">
									<h3 class="title">ЗАГОЛОВОК</h3>
									<div class="short">Знаменитый пляж с розовым песком, его приносит сюда течением из Сахары. Здесь чистая прохладная вода, пологий вход в море и небольшая глубина – в общем, идеальное место для отдыха с детьми.</div>
								</div>

							</a>
						</li>
						<li>
							<a href="#">
								<figure style="background-image: url('/images/items/Mykonos-2_13.jpg')"></figure>
								<div class="grid--main">
									<h3 class="title">ЗАГОЛОВОК</h3>
									<div class="short">Знаменитый пляж с розовым песком, его приносит сюда течением из Сахары. Здесь чистая прохладная вода, пологий вход в море и небольшая глубина – в общем, идеальное место для отдыха с детьми.</div>
								</div>

							</a>
						</li>
					</ul>
					<div class="btns_center">
						<a href="#" class="more">
							<i class="ico-back"><svg> <use xlink:href="/images/svg/sprite.svg#ico_arrow-left-long"></use> </svg></i>
							<span>Вернуться к списку вилл</span>
						</a>
						<a href="#" class="more">
							<i class="ico-like"><svg> <use xlink:href="/images/svg/sprite.svg#ico_action-like-full"></use> </svg></i>
							<span>Добавить в избранное</span>
						</a>
						<a href="#" class="more">Скачать презентацию виллы</a>
					</div>
				</div>
			</div>
		</section>
		<section class="section best-offers">
			<div class="content">
				<header>
					<h3 class="headline_main">You may also like</h3>
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
						</li>
						<li>
							<a href="#">
								<figure style="background-image: url('/images/items/Sani-Beach-Hotel-Greece-summary.jpg')"></figure>
								<div class="grid--main">
									<h3 class="title">Anemos</h3>
									<div class="price"><strong>&euro;</strong> 3 455</div>
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
						</li>
						<li>
							<a href="#">
								<figure style="background-image: url('/images/items/amanzoe-greece-swimmingpool-large.jpg')"></figure>
								<div class="grid--main">
									<h3 class="title">Iliodor</h3>
									<div class="price"><strong>&euro;</strong> 3 455</div>
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
						</li>
						<li>
							<a href="#">
								<figure style="background-image: url('/images/items/art_77_91218.jpg')"></figure>
								<div class="grid--main">
									<h3 class="title">Amenos</h3>
									<div class="price"><strong>&euro;</strong> 3 455</div>
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
						</li>
						<li>
							<a href="#">
								<figure style="background-image: url('/images/items/eirini-luxury-villas-patmos.jpg')"></figure>
								<div class="grid--main">
									<h3 class="title">Cleonica</h3>
									<div class="price"><strong>&euro;</strong> 3 455</div>
									<div class="includes">
										<span class="bed">
											<i><svg> <use xlink:href="/images/svg/sprite.svg#ico_villa-bed"></use> </svg></i>
											<span>6 Bedrooms</span></span>
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
						</li>
						<li>
							<a href="#">
								<figure style="background-image: url('/images/items/Mykonos-2_13.jpg')"></figure>
								<div class="grid--main">
									<h3 class="title">Anemos</h3>
									<div class="price"><strong>&euro;</strong> 3 455</div>
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
						</li>
					</ul>

				</div>
			</div>
		</section>
	</div>
@endsection