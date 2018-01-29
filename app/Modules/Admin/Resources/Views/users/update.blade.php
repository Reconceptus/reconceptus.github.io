@extends('admin::layouts.default')
@section('title', trans('admin::main.namePanel') . ' ' . $version)
@section('content')

	@include('admin::layouts.left-menu')
	@include('admin::layouts.top-menu')
	<div class="right_col" role="main">
		<br />

		<div class="row">
			<div class="col-md-12 col-xs-12">
				<div class="x_panel">
					<div class="x_title">
						<h2>
							@lang('admin::main.users')
							@if(empty($data))
								<small>@lang('admin::main.create')</small>
							@else
								<small>@lang('admin::main.edit')</small>
							@endif
						</h2>
						<hr class="clear" />

						<form method="post" class="form-modules form-horizontal form-label-left">
							<div class="form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12">@lang('admin::main.name')</label>

								<div class="col-md-6 col-sm-6 col-xs-12">
									<input
										type="text"
										name="pl[name]"
										value="{{ $data->name or '' }}"
										id="inputName"
										class="form-control"
										placeholder="@lang('admin::main.name')"
									>
								</div>

								<br class="clear" />
							</div>

							<div class="form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12">
									@lang('admin::main.description')
								</label>

								<div class="col-md-6 col-sm-6 col-xs-12">
									<textarea
										class="form-control"
										id="textareaText"
										name="pl[text]"
										placeholder="@lang('admin::main.description')"
										rows="3"
									>{{ $data->text or '' }}</textarea>
								</div>

								<br class="clear" />
							</div>

							<div class="form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12">Статус</label>

								<div class="col-md-6 col-sm-6 col-xs-12">
									<select name="pl[active]" id="selectActive" class="form-control select2">
										<option value="1" {!! (isset($data->active) ? $data->active : '') == 1 ? 'selected' : '' !!}>
											@lang('admin::main.active')
										</option>
										<option value="0" {!! (isset($data->active) ? $data->active : '') == 0 ? 'selected' : '' !!}>
											@lang('admin::main.notActive')
										</option>
									</select>
								</div>

								<br class="clear" />
							</div>

							<div class="form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12">E-mail</label>

								<div class="col-md-6 col-sm-6 col-xs-12">
									<input
										type="text"
										name="pl[email]"
										value="{{ $data->email or '' }}"
										id="inputEmail"
										class="form-control"
										placeholder="E-mail"
									>
								</div>

								<br class="clear" />
							</div>

							<div class="form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12">@lang('admin::main.currentPassword')</label>

								<div class="col-md-6 col-sm-6 col-xs-12">
									<input
										type="text"
										value="{{ $data->save_password or '' }}"
										class="form-control"
										id="exampleInputEmail"
										placeholder="@lang('admin::main.currentPassword')"
										disabled
									/>
								</div>

								<br class="clear" />
							</div>

							<div class="form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12">@lang('admin::main.newPassword')</label>

								<div class="col-md-6 col-sm-6 col-xs-12">
									<input
										type="text"
										name="pl[password]"
										autocomplete="false"
										value=""
										class="form-control"
										id="exampleInputEmail"
										placeholder="@lang('admin::main.newPassword')"
									>
								</div>

								<br class="clear" />
							</div>

							<div class="form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12">@lang('admin::main.typeOfRights')</label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<select name="pl[usertype]" id="selectRight" class="form-control select2">
										<option
											value="user"
											{!! (isset($data->usertype) ? $data->usertype : '') == 'user' ? 'selected' : '' !!}
										>@lang('admin::main.mixedRights')</option>

										<option
											value="admin"
											{!! (isset($data->usertype) ? $data->usertype : '') == 'admin' ? 'selected' : '' !!}
										>@lang('admin::main.fullRights')</option>
									</select>

								</div>
								<br class="clear" />
							</div>

							<div class="form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12">@lang('admin::main.anotherUserType')</label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<select name="pl[user_another_type]" id="selectAnotherUserType" class="form-control select2">
										<option value="">-</option>

										<option
											value="author"
											{!! ($data->user_another_type ?? '') == 'author' ? 'selected' : '' !!}
										>@lang('admin::main.author')</option>

										<option
											value="specialist"
											{!! ($data->user_another_type ?? '') == 'specialist' ? 'selected' : '' !!}
										>@lang('admin::main.specialist')</option>
									</select>

								</div>
								<br class="clear" />
							</div>

							<div class="module-right">
								@foreach($modules as $val)
									<div class="form-group">
										<label class="control-label col-md-3 col-sm-3 col-xs-12">
											{{ $val['name_module'] }}
										</label>
										<div class="col-md-6 col-sm-6 col-xs-12">
											<input type="hidden" value="{{ $val['id'] }}" name="id_menu[{{ $val['id'] }}]" />

											<label>
												<input
													type="checkbox"
													class="flat"
													value="1"
													name="r[{{ $val['id'] }}]"
													{!! (isset($val['r']) ? $val['r'] : '') == 1 ? 'checked' : '' !!}
												/>
												@lang('admin::main.view')
											</label>

											<label>
												<input
													type="checkbox"
													class="flat"
													value="1"
													name="x[{{ $val['id'] }}]"
													{!! (isset($val['x']) ? $val['x'] : '') == 1 ? 'checked' : '' !!}
												/>
												@lang('admin::main.change')
											</label>

											<label>
												<input
													type="checkbox"
													class="flat"
													value="1"
													name="w[{{ $val['id'] }}]"
													{!! (isset($val['w']) ? $val['w'] : '') == 1 ? 'checked' : '' !!}
												/>
												@lang('admin::main.creation')
											</label>

											<label>
												<input
													type="checkbox"
													class="flat"
													value="1"
													name="d[{{ $val['id'] }}]"
													{!! (isset($val['d']) ? $val['d'] : '') == 1 ? 'checked' : '' !!}
												/>
												@lang('admin::main.removal')
											</label>

											<hr style="margin: 0" />
										</div>
										<br class="clear" />
									</div>
								@endforeach
							</div>

							<div class="loader"></div>
							<button class="btn btn-success" type="submit">@lang('admin::main.save')</button>

							<button class="btn btn-primary" formaction="/admin/update/users/{{ $id }}/1" type="submit">
								@lang('admin::main.apply')
							</button>

							<button class="btn btn-default" formaction="/admin/index/users" type="submit">
								@lang('admin::main.close')
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>

	<script type="text/javascript" src="{{ asset('/modules/js/modules.js') }}"></script>
	<script>
		$(document).ready(function() {
			modules.initialize({});

			$('#selectRight').on('change', function(e) {
				var display = this.value === 'admin' ? 'none' : 'block';

				$('.module-right').css({display: display})
			});

			if($('#selectRight').val() === 'admin') $('.module-right').css({display: 'none'})
		});
	</script>
	</div>
@stop