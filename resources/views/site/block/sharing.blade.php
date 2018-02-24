<div class="sharing">
	<div class="content">
		<ul>
			<li>
				<a href="#">
					<i class="fb"><svg> <use xlink:href="/images/svg/sprite.svg#ico_share-fb"></use> </svg></i>
					<span>2356</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class="gp"><svg> <use xlink:href="/images/svg/sprite.svg#ico_share-google"></use> </svg></i>
					<span>355</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class="tw"><svg> <use xlink:href="/images/svg/sprite.svg#ico_share-tw"></use> </svg></i>
					<span>45</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class="vk"><svg> <use xlink:href="/images/svg/sprite.svg#ico_share-vk"></use> </svg></i>
					<span>233</span>
				</a>
			</li>
		</ul>

		<style>
			.pluso {
				display: block!important;
			}

			.pluso > div {
				margin: 0 auto;
				display: table;
			}

			.pluso-more {
				display: none;
			}

			.pluso-facebook {
				margin-right: 10px;
				width: 40px;
				height: 40px;
				display: table;
			}

			.pluso-facebook svg {
				width: 40px;
				height: 40px;
			}
		</style>

		<div
			class="pluso sharing"
			data-background="none;"
			data-options="medium,square,line,horizontal,nocounter,sepcounter=1,theme=14"
			data-services="facebook,google,twitter,vkontakte"
		></div>
	</div>

	<script type="text/javascript">(function() {
			if(window.pluso)if(typeof window.pluso.start == "function")
				return;

			if(window.ifpluso == undefined) {
				window.ifpluso = 1;

				var
					d = document,
					s = d.createElement('script'),
					g = 'getElementsByTagName';

				s.type = 'text/javascript';
				s.charset = 'UTF-8';
				s.async = true;
				s.src = ('https:' == window.location.protocol ? 'https' : 'http') + '://share.pluso.ru/pluso-like.js';
				d[g]('body')[0].appendChild(s);
			}
		})();
	</script>
</div>

@push('footer')
<script>
	$(document).ready(function() {
		$('.pluso-more').remove();
//		$('.pluso-facebook').replaceWith('<i class="fb pluso-facebook"><svg>' +
//			'<use xlink:href="/images/svg/sprite.svg#ico_share-fb"></use>' +
//			'</svg></i>');
	})
</script>
@endpush