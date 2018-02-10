@extends('site.layouts.default')

@section('content')
	<div class="map-container">
		<div class="contact-form">
			<div class="contacts">
				<h3 class="title">Контакты</h3>
				<ul>
					<li>
						<i class="ico-tel"><svg> <use xlink:href="/images/svg/sprite.svg#ico_contact-tel"></use> </svg></i>
						<a href="tel:+38090500500">+38 (090) 500-500</a>
					</li>
					<li>
						<i class="ico-fly"><svg> <use xlink:href="/images/svg/sprite.svg#ico_contact-fly"></use> </svg></i>
						<a href="mailto:greecobooking@info.gr">greecobooking@info.gr</a>
					</li>
					<li>
						<i class="ico-adr"><svg> <use xlink:href="/images/svg/sprite.svg#ico_contact-address"></use> </svg></i>
						<span>Stefanou Nikolaidi Str., Heraklion, Crete,  Greece</span>
					</li>
					<li>
						<i class="ico-mes"><svg> <use xlink:href="/images/svg/sprite.svg#ico_contact-messenger"></use> </svg></i>
						<span>official accounts: <a href="#">facebook</a> <a href="#">instagram</a></span>
					</li>
				</ul>
			</div>
			<div class="contact-form-box">
				<form action="#">
					<div class="fields">
						<div class="fieldset">
							<div class="field">
								<div class="input"><input id="name" name="name" type="text" placeholder="Ваше имя"></div>
							</div>
							<div class="field">
								<div class="input"><input type="text" name="mail" id="mail" placeholder="*E-mail"></div>
							</div>
							<div class="field">
								<div class="input"><input type="text" id="telephone" name="telephone" placeholder="Телефон"></div>
							</div>
						</div>
						<div class="fieldset">
							<div class="field">
								<div class="input">
									<textarea id="message" name="message" rows="3" placeholder="*Сообщение"></textarea>
								</div>
							</div>
						</div>
						<p class="asterisk">*Обязательные поля</p>
					</div>
					<div class="btn-box">
						<button type="submit">
							<i><svg> <use xlink:href="/images/svg/sprite.svg#ico_submit"></use> </svg></i>
						</button>
					</div>
				</form>
			</div>
		</div>
		<div id="map" class="map-box"></div>
	</div>

	@push('footer')
	<script type="text/javascript">
		var map;
		function initMap() {

			var icon = './images/map-mark.png';

			var mapOptions = {
				zoom: 13,
				styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9"}, { "lightness": 17}]}, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5"}, { "lightness": 20}]}, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff"}, { "lightness": 17}]}, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff"}, { "lightness": 29}, { "weight": 0.2}]}, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff"}, { "lightness": 18}]}, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff"}, { "lightness": 16}]}, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5"}, { "lightness": 21}]}, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede"}, { "lightness": 21}]}, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on"}, { "color": "#ffffff"}, { "lightness": 16}]}, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36}, { "color": "#333333"}, { "lightness": 40}]}, { "elementType": "labels.icon", "stylers": [{ "visibility": "off"}]}, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2"}, { "lightness": 19}]}, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe"}, { "lightness": 20}]}, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe"}, { "lightness": 17}, { "weight": 1.2}]}],
				scrollwheel: false,
				center: new google.maps.LatLng(35.318354, 25.196429)
			};
			map = new google.maps.Map(document.getElementById('map'), mapOptions );

			var marker = new google.maps.Marker({
				position: {lat: 35.318354, lng: 25.196429},
				map: map,
				icon: icon
			});
		}
	</script>

	<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC6PFq1z3G7_YGiZl1KUuVVH_kxI2YAdaA&callback=initMap"></script>

	<!--validate-->
	<script>
		$('.contact-form form').validate({
			onfocusout: false,
			ignore: ".ignore",
			rules: {
				name: {required: true},
				mail: {required: true},
				telephone: {required: true},
				message: {required: true}
			},
			messages: {
				name: {required: ""},
				mail: {required: ""},
				telephone: {required: ""},
				message: {required: ""}
			},
			errorClass: 'invalid',
			highlight: function(element, errorClass) {
				$(element).closest('.field').addClass(errorClass)
				if($(element).closest('.add-fieldset')){
					$(element).closest('.add-fieldset').addClass('disabled')
				}
			},
			unhighlight: function(element, errorClass) {
				$(element).closest('.field').removeClass(errorClass)
				if($(element).closest('.add-fieldset')){
					$(element).closest('.add-fieldset').removeClass('disabled')
				}
			},
			errorPlacement: $.noop,
			submitHandler:function (form) {
				//                $('#modal').find('.modal-thanks').addClass('active');
				if (form.valid()){
					form.submit();
				}
				//                return false;
			}
		})

	</script>
	@endpush
@endsection
