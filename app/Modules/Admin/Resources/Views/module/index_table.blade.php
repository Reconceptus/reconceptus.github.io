<link href="{{ asset('/modules/js/datatables/jquery.dataTables.min.css') }}" rel="stylesheet" type="text/css"/>
<link href="{{ asset('/modules/js/datatables/buttons.bootstrap.min.css') }}" rel="stylesheet" type="text/css"/>
<link href="{{ asset('/modules/js/datatables/fixedHeader.bootstrap.min.css') }}" rel="stylesheet" type="text/css"/>
<link href="{{ asset('/modules/js/datatables/responsive.bootstrap.min.css') }}" rel="stylesheet" type="text/css"/>
<link href="{{ asset('/modules/js/datatables/scroller.bootstrap.min.css') }}" rel="stylesheet" type="text/css"/>
<style>
	.img_none img {
		display: none;
	}
</style>

@if(!empty($filters) || $sort != '')

	<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true" style="margin-top: 15px">
		<div class="panel panel-default">
			<div class="panel-heading" id="headingOne" role="button" data-toggle="collapse" data-parent="#accordion"
					 href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
				<h4 class="panel-title">@lang('admin::main.filters')</h4>
			</div>

			<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
				<div class="panel-body">
					<form method="get">
						@if($sort)
							<div class="form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12">@lang('admin::main.category')</label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<select class="form-control sort" name="cat">
										{!! $sort !!}
									</select>
								</div>
								<br class="clear"/>
							</div>

							<script>
								$('.sort').val({{ $cat }});
							</script>
						@endif

						@foreach($filters as $val)
							{!! str_replace('--options--', '', $val['html']) !!}
						@endforeach

						<script>
							@foreach($where_get as $key => $v)
							$('[name="pl[{{ $key }}]"]').val('{{ $v }}');
							@endforeach
						</script>

						<div class="text-right">
							<a href="/admin/index/{{ $table }}" class="btn btn-danger">@lang('admin::main.clear')</a>
							<button type="submit" class="btn btn-primary">@lang('admin::main.show')</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
@endif

<!-- pace -->
<script src="{{ asset('/modules/js/pace/pace.min.js') }}"></script>
<!-- Datatables-->
<script src="{{ asset('/modules/js/datatables/jquery.dataTables.min.js') }}"></script>
<script src="{{ asset('/modules/js/datatables/dataTables.bootstrap.js') }}"></script>
<script src="{{ asset('/modules/js/datatables/dataTables.buttons.min.js') }}"></script>
<script src="{{ asset('/modules/js/datatables/buttons.bootstrap.min.js') }}"></script>
<script src="{{ asset('/modules/js/datatables/jszip.min.js') }}"></script>
<script src="{{ asset('/modules/js/datatables/pdfmake.min.js') }}"></script>
<script src="{{ asset('/modules/js/datatables/vfs_fonts.js') }}"></script>
<script src="{{ asset('/modules/js/datatables/buttons.html5.min.js') }}"></script>
<script src="{{ asset('/modules/js/datatables/buttons.print.min.js') }}"></script>
<script src="{{ asset('/modules/js/datatables/dataTables.fixedHeader.min.js') }}"></script>
<script src="{{ asset('/modules/js/datatables/dataTables.keyTable.min.js') }}"></script>
<script src="{{ asset('/modules/js/datatables/dataTables.responsive.min.js') }}"></script>
<script src="{{ asset('/modules/js/datatables/responsive.bootstrap.min.js') }}"></script>
<script src="{{ asset('/modules/js/datatables/dataTables.scroller.min.js') }}"></script>

<div class="table-responsive">
	<table id="table_id" class="table table-striped table-bordered">
		<thead>
		<tr>
			<th></th>
			@foreach($column as $v)
				<th>
					{!! ($v['translateKey'] ?? false) ? trans('admin::plugins.' . $v['translateKey']) : $v['nameText'] !!}
				</th>
			@endforeach
			<th>@lang('admin::main.dateOfUpdate')</th>
		</tr>
		</thead>
	</table>
</div>

<script>
	$('#table_id').DataTable({
		"bServerSide": true,
		"sAjaxSource": "/admin/getData/{{ $table }}?{!! $url !!}",
		"sServerMethod": "POST",
		"iDisplayLength": 10,
		"sAjaxDataProp": "data",

		columns: [
			{data: 'id'},
				@foreach($column as $v)
			{
				data: '{{ $v['name'] }}'
			},
				@endforeach
			{
				data: 'created_at'
			}
		]
	});

	$('#table_id').on('draw.dt', function() {
		if($("input.flat")[0]) {
			$('input.flat').iCheck({
				checkboxClass: 'icheckbox_flat-green',
				radioClass: 'iradio_flat-green'
			});

			$('input[type="radio"]').on('ifChanged', function(event) {
				var id = event['target']['id'];
				var title = event['target']['title'];

				$.adm.inp_edit(id, title)
			});
		}
	});
</script>
