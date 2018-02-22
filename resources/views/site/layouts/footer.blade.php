</div>

<footer class="footer">
	<div class="content">
		<div class="footer--main">
			<div class="contacts">
				<a href="/" class="logo"><img src="/images/svg/logo-green.svg" alt="GrecoBooking"></a>

				<ul>
					<li>
						<i class="ico-tel"><svg><use xlink:href="/images/svg/sprite.svg#ico_contact-tel"></use></svg></i>

						<a href="tel:{{ $langSt($params['phone_footer']['key']) }}">
							{{ $langSt($params['phone_footer']['key']) }}
						</a>
					</li>

					<li>
						<i class="ico-fly"><svg><use xlink:href="/images/svg/sprite.svg#ico_contact-fly"></use></svg></i>
						<a href="mailto:{{ $langSt($params['email']['key']) }}">{{ $langSt($params['email']['key']) }}</a>
					</li>

					<li>
						<i class="ico-adr"><svg><use xlink:href="/images/svg/sprite.svg#ico_contact-address"></use></svg></i>
						<span>{{ $langSt($params['footer_address']['key']) }}</span>
					</li>

					<li>
						<i class="ico-mes"><svg><use xlink:href="/images/svg/sprite.svg#ico_contact-messenger"></use></svg></i>
						<span>{!! $langSt($params['official_accounts']['key']) !!}</span>
					</li>
				</ul>
			</div>

			<div class="subscription">
				<h3 class="title">@lang('subscription')</h3>
				<div class="text">{!! $langSt($params['text_subscription']['key']) !!}</div>

				<div class="subscription-form">
					<form action="#">
						<div class="field">
							<input type="text" name="subscribe_mail" placeholder="@lang('your') e-mail">
							<button type="submit">@lang('send')</button>
						</div>
					</form>
				</div>
			</div>

			<div class="menu">
				<ul>
					<li><a href="/request-for-accommodation" class="">@lang('place_a_villa')</a></li>
					<li><a href="/privacy-policy" class="">@lang('terms_of_use')</a></li>
					<li><a href="/vacancies" class="">@lang('vacancies')</a></li>
					<li><a href="/admin">@lang('login')</a></li>
				</ul>
			</div>
		</div>

		<div class="footer--bottom">
			<div class="copyright">Grecobooking 2017 - {{ date('Y') }}</div>
			<div class="support"><a href="http://reconcept.ru">ReConcept</a></div>
		</div>
	</div>
</footer>

<!--mobile picker container -->
<div id="mobile_fastpicker"><div class="calendar"></div></div>

</div><!--wrapper-->
<script type="text/javascript" src="/js/bower/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="/js/bower/select2/dist/js/select2.full.min.js"></script>
<script type="text/javascript" src="/js/bower/owl.carousel/dist/owl.carousel.min.js"></script>
<script type="text/javascript" src="/js/bower/jquery-ui/ui/widgets/datepicker.js"></script>
<script type="text/javascript" src="/js/bower/jquery-ui/ui/i18n/datepicker-ru.js"></script>
<script type="text/javascript" src="/js/bower/jquery-validation/dist/jquery.validate.min.js"></script>
<script type="text/javascript" src="/js/libs.min.js"></script>
<script type="text/javascript" src="/js/main.min.js"></script>
@stack('footer')
</body>
</html>