<div class="content content_md">
	<div class="fast-request">
		<form action="#">
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

					<div class="field">
						<label for="f_way">@lang('main.location')</label>

						<div class="select">
							<select name="f_way" id="f_way">
								<option value=""></option>
								<option value="">@lang('main.all_destinations')</option>

								@foreach($locations as $val)
									<option value="{{ $val['cat'] }}">{{ $langSt($val['name']) }}</option>
								@endforeach
							</select>
						</div>
					</div>

					<div class="field">
						<label for="check_in">@lang('main.check_in')</label>
						<div class="input"><input id="check_in" type="text" data-picker-fast></div>
					</div>

					<div class="field">
						<label for="check_out">@lang('main.check_out')</label>
						<div class="input"><input type="text" id="check_out" data-picker-fast></div>
					</div>

					<div class="field">
						<label for="rooms">@lang('main.rooms')</label>

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
								<span>@lang('main.hot_offers')</span>
							</label>
						</div>
					</div>
				</div>

				<button class="btn btn_subm" type="submit">@lang('main.search')</button>
			</div>
		</form>
	</div>
</div>
