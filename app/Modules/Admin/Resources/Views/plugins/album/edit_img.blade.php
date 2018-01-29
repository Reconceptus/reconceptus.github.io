<div class="modal-body">
	<div class="panel-body">
		<input type="hidden" name="_token" value="{{ csrf_token()  }}">

		<div class="form-group">
			<label for="name_img_edit{{ $name }}" class="col-md-3 control-label">@lang('admin::main.title')</label>

			<div class="col-md-9">
				<input
					type="text"
					id="name_img_edit{{ $name }}"
					class="form-control"
					name="name_img_edit{{ $name }}"
					value="{{ $file['name'] }}"
				/>
			</div>

			<div class="clear"></div>
		</div>

		<div class="form-group">
			<label for="text_img_edit{{ $name }}" class="col-md-3 control-label">@lang('admin::main.description')</label>

			<div class="col-md-9">
				<textarea
					class="form-control"
					id="text_img_edit{{ $name }}"
					name="text_img_edit{{ $name }}"
				>{{ $file['text'] }}</textarea>
			</div>

			<div class="clear"></div>
		</div>

		<div class="form-group">
			<label for="order_img_edit{{ $name }}" class="col-md-3 control-label">@lang('admin::main.sortingOrder')</label>

			<div class="col-md-9">
				<input type="number"
					id="order_img_edit{{ $name }}"
					class="form-control"
					name="order_img_edit{{ $name }}"
					value="{{ $file['order'] }}"
				/>
			</div>

			<div class="clear"></div>
		</div>
	</div>
</div>

<div class="modal-footer">
	<button type="button" class="btn btn-primary" onclick="sendEditImg{{ $name }}({{ $file['id'] }})">
		@lang('admin::main.save')
	</button>
</div>
