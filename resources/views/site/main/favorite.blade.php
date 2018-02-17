@extends('site.layouts.default')

@section('content')
	<section class="simple-page--head favorite--head">
		<div class="animate-bg"></div>
		<div class="content content_md">
			<header>
				<h1 class="headline_main">Favorites</h1>
				<a href="javascript:void(0);" class="send show-modal" data-modal="friend-form">
					<span>Отправить подборку другу</span>
					<i class="ico-fly"><svg> <use xlink:href="/images/svg/sprite.svg#ico_contact-fly"></use> </svg></i>
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

	<!--modals-->
	<div class="modal">
		<div class="close"></div>
		<div class="modal--main">
			<div class="friend-form" data-modal="friend-form">
				<span class="close"><svg> <use xlink:href="/images/svg/sprite.svg#ico_close"></use> </svg></span>
				<div class="friend-form--wrap">
					<figure style="background-image: url('/images/items/eirini-luxury-villas-patmos.jpg')"></figure>
					<div class="friend-form--main animate-bg">
						<h5 class="title">Отправить другу</h5>
						<form action="#">
							<div class="fields">
								<div class="add-fieldset">
									<span class="add" id="addFieldset">+1</span>
									<div class="fieldset">
										<div class="field">
											<div class="input"><input id="friendMail" name="friendMail" type="text" placeholder="*Кому: Напишите email друга"></div>
										</div>
									</div>
								</div>
								<div class="fieldset">
									<div class="field">
										<div class="input"><input id="yourName" name="yourName" type="text" placeholder="От кого: Напишите ваше имя"></div>
									</div>
								</div>
								<div class="fieldset">
									<div class="field">
										<div class="input">
											<textarea id="message" name="message" rows="3" placeholder="Напишите сообщение"></textarea>
										</div>
									</div>
								</div>
								<div class="fieldset">
									<div class="check">
										<label>
											<input type="checkbox">
											<span>Копию письма мне</span>
										</label>
									</div>
									<p class="asterisk">*Обязательные поля</p>
								</div>
							</div>
							<div class="btn-box">
								<button type="submit">
									<i><svg> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/svg/sprite.svg#ico_submit"></use> </svg></i>
								</button>
							</div>
						</form>
					</div>
				</div>

				<div class="form-success">
					<div class="form-success--main">
						<div class="text">
							<h5 class="success-title">Сообщение отправлено!</h5>
							<p>Письмо с понравившейся виллой отправлено Вашим друзьям</p>
							<div class="btn_center">
								<a href="blog.html" class="more">Читать наш блог</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	@push('footer')
	<!--validate-->
	<script>
		$('.fast-request form').validate({
			onfocusout: false,
			ignore: ".ignore",

			rules: {
				location: {required: true},
				check_in: {required: true},
				check_out: {required: true},
				rooms: {required: true}
			},

			messages: {
				location: {required: ""},
				check_in: {required: ""},
				check_out: {required: ""},
				rooms: {required: ""}
			},

			errorClass: 'invalid',

			highlight: function(element, errorClass) {
				$(element).closest('.field').addClass(errorClass)
			},

			unhighlight: function(element, errorClass) {
				$(element).closest('.field').removeClass(errorClass)
			},

			errorPlacement: $.noop,

			submitHandler: function(form) {
				if(form.valid())
					form.submit();
			}
		});

		$('.friend-form form').validate({
			onfocusout: false,
			ignore: ".ignore",

			rules: {
				friendMail: {required: true},
				yourName: {required: true},
				message: {required: true}
			},

			messages: {
				friendMail: {required: ""},
				yourName: {required: ""},
				message: {required: ""}
			},

			errorClass: 'invalid',

			highlight: function(element, errorClass) {
				$(element).closest('.field').addClass(errorClass);

				if($(element).closest('.add-fieldset')) {
					$(element).closest('.add-fieldset').addClass('disabled')
				}
			},

			unhighlight: function(element, errorClass) {
				$(element).closest('.field').removeClass(errorClass);

				if($(element).closest('.add-fieldset')) {
					$(element).closest('.add-fieldset').removeClass('disabled')
				}
			},

			errorPlacement: $.noop,

			submitHandler: function(form) {
				$('.friend-form').addClass('successful');

				return false;
			}
		})
	</script>
	@endpush
@endsection