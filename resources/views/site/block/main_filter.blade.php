<div class="content content_md">
	<div class="fast-request">
		<form action="/villas">
			<div class="fast-request--wrap">
				<div class="fieldgroup">
					<div id="fastpicker">
						<div class="calendar">
							<div class="annotation">
								<span class="closed">@lang('main.busy')</span>
								<span class="opened">@lang('main.free')</span>
							</div>
						</div>
					</div>

					<div class="field f-100 col-30">
						<label for="f_way">@lang('main.location')</label>

						<div class="select">
							<select name="f_way" id="f_way" style="display:none;">
								@if(isset($all_destinations) ? $all_destinations : true)
									<option value="">@lang('main.all_destinations')</option>
								@endif

								@foreach($locations as $val)
									<option value="{{ $val['cat'] }}" {{ ($_GET['f_way'] ?? '') == $val['cat'] ? 'selected' : '' }}>
										{{ $langSt($val['name']) }}
									</option>
								@endforeach
							</select>
						</div>
					</div>

					<div class="field f-50">
						<label for="check_in">@lang('main.check_in')</label>

						<div
							class="input">
							<input
								id="check_in"
								name="date_to"
								type="text"
								data-picker-fast
								value="{{ $_GET['date_to'] ?? '' }}"
								autocomplete="off"
							/></div>
					</div>

					<div class="field f-50">
						<label for="check_out">@lang('main.check_out')</label>

						<div class="input">
							<input
								type="text"
								name="date_from"
								id="check_out"
								data-picker-fast
								value="{{ $_GET['date_from'] ?? '' }}"
								autocomplete="off"
							/>
						</div>
					</div>

					<div class="field f-50 col-10">
						<label for="rooms">@lang('main.rooms')</label>

						<div class="select">
							<select name="rooms" id="rooms" style="display:none;">
								<option value="-1" {{ ($_GET['rooms'] ?? '') === '-1' ? 'selected' : '' }}>@lang('main.all')</option>
								<option value="1" {{ ($_GET['rooms'] ?? '') === '1' ? 'selected' : '' }}>1</option>
								<option value="2" {{ ($_GET['rooms'] ?? '') === '2' ? 'selected' : '' }}>2</option>
								<option value="3" {{ ($_GET['rooms'] ?? '') === '3' ? 'selected' : '' }}>3</option>
								<option value="4" {{ ($_GET['rooms'] ?? '') === '4' ? 'selected' : '' }}>4</option>
							</select>
						</div>
					</div>

					<div class="field f-50">
						<div class="check">
							<label>
								<input type="checkbox" name="hot" {{ str_replace('-1', 0, $_GET['hot'] ?? '') ? 'checked' : '' }} />
								<span>@lang('main.hot_offers')</span>
							</label>
						</div>
					</div>
				</div>

				<button class="btn btn_subm" name="search-filter" type="submit">@lang('main.search')</button>
			</div>
		</form>
	</div>
</div>

@push('footer')
<script>
	$('.fast-request form').validate({
		onfocusout: false,
		ignore    : ".ignore",

		rules: {
			location : {required: true},
			check_in : {required: true},
			check_out: {required: true},
			rooms    : {required: true}
		},

		messages: {
			location : {required: ""},
			check_in : {required: ""},
			check_out: {required: ""},
			rooms    : {required: ""}
		},

		errorClass: 'invalid',

		highlight: function(element, errorClass) {
			$(element).closest('.field').addClass(errorClass)
		},

		unhighlight: function(element, errorClass) {
			$(element).closest('.field').removeClass(errorClass)
		},

		errorPlacement: $.noop,

//		submitHandler: function(form) {
////			if(form.valid())
////				form.submit();
//
//			return false
//		}
	});
</script>
@endpush
