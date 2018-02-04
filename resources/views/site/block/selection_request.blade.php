<div class="form-request">
	<div class="form">
		<form action="#">
			<div class="form-box">
				<div class="fieldset pickerfields">
					<div class="field">
						<label for="arrivalDate">*@lang('main.check_in')</label>
						<div class="input"><input id="arrivalDate" type="text" data-picker-full></div>
					</div>

					<div class="field">
						<label for="departureDate">*@lang('main.check_out')</label>
						<div class="input"><input type="text" id="departureDate" data-picker-full></div>
					</div>

					<div id="picker">
						<div class="calendar">
							<div class="annotation">
								<span class="closed">@lang('main.busy')</span>
								<span class="opened">@lang('main.free')</span>
							</div>
						</div>
					</div>
				</div>

				<div class="fieldset">
					<div class="field">
						<label for="adults">*@lang('main.adults')</label>

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
						<label for="childUntil12">*@lang('main.children_under_12_years')</label>

						<div class="select">
							<select name="childUntil12" id="childUntil12">
								<option value=""></option>
								<option value="no">@lang('main.no')</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
							</select>
						</div>
					</div>

					<div class="field">
						<label for="babies">
							*@lang('main.children_from_0_to_2_years')
						</label>

						<div class="select">
							<select name="babies" id="babies">
								<option value=""></option>
								<option value="no">@lang('main.no')</option>
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
						<label for="way">*@lang('main.direction')</label>

						<div class="select">
							<select name="way" id="way">
								<option value=""></option>
								<option value="">@lang('main.no')</option>

								@foreach($locations as $val)
									<option value="{{ $val['cat'] }}">{{ $langSt($val['name']) }}</option>
								@endforeach
							</select>
						</div>
					</div>
				</div>

				<div class="fieldset">
					<div class="field">
						<label for="budget">*@lang('main.budget_per_week_euro')</label>
						<div class="input"><input id="budget" type="text"></div>
					</div>
				</div>

				<div class="fieldset">
					<div class="field">
						<label for="name">*@lang('main.your_name')</label>
						<div class="input"><input id="name" type="text"></div>
					</div>

					<div class="field">
						<label for="telephone">*@lang('main.phone')</label>
						<div class="input"><input type="text" id="telephone"></div>
					</div>

					<div class="field">
						<label for="mail">*@lang('main.e_mail')</label>
						<div class="input"><input type="text" id="mail"></div>
					</div>
				</div>

				<div class="fieldset">
					<div class="field">
						<label for="wishes">@lang('main.write_your_wishes')</label>
						<div class="input"><input id="wishes" type="text"></div>
					</div>
				</div>

				<div class="fieldset">
					<div class="field">
						<label for="source">@lang('main.where_did_you_find_out_about_us')</label>
						<div class="input"><input id="source" type="text"></div>
					</div>
				</div>

				<p class="asterisk">*@lang('main.required_fields')</p>
				<button class="btn btn_subm" type="submit">@lang('main.Required fields')</button>
			</div>
		</form>
	</div>
</div>
