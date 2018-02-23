<style>
	.distances-cont {
		border: solid 1px #e4e4e4;
		padding: 10px;
	}
</style>

<div class="">
	{!! $field !!}
</div>

@php($langName = '-]-options-[-')
@php($lang = '--options--')

<script>
	function deleteDi{{ $langName }} (c) {
		$(c).remove();
	}

	var
		addDistances{{ $langName }} = function (ev, d, l) {
			console.log(d, l)
			var n = $(this).data('n');
			$(this).data('n', n + 1);

			$('#distances{{ $langName }}').append('<div class="id{{ $langName }}-'+ n + ' row" style="margin-bottom: 15px">' +
				'<div class="col-md-5">' +
				'<input placeholder="@lang('admin::plugins.distances')" type="text" name="pl[distances]' + '{{ $lang }}' + '[distances][]" class="form-control" value="' + (d || '') + '" />' +
				'</div>' +
				'<div class="col-md-5">' +
				'<input placeholder="@lang('admin::plugins.location')" type="text" name="pl[distances]' + '{{ $lang }}' + '[location][]" class="form-control" value="' + (l || '') + '" />' +
				'</div>' +
				'<div class="col-md-2">' +
				'<button type="button" onclick="deleteDi{{ $langName }}(\'.id{{ $langName }}-'+ n + '\')" class="btn btn-danger btn-icon">' +
				'<i class="fa fa-minus"></i>' +
				'</button>' +
				'</div>' +
				'</div>');
		};

	$('.add-distances{{ $langName }}').click(addDistances{{ $langName }});

	/**
	 * Tags init functions
	 */
	window.distancesInit{{ $langName }} = function distancesInit{{ $langName }}() {
		var
			initValue = $('#' + '{{ $plugin['idAttr'] }}{{ $langName }}').attr('data-init-value');

		try {
			initValue = JSON.parse(initValue);

			for(var i = 0; Object.keys(initValue['{{ $langName }}']['distances']).length > i; i++)
				addDistances{{ $langName }}(
					null,
					initValue['{{ $langName }}']['distances'][i] || initValue['distances'][i],
					initValue['{{ $langName }}']['location'][i] || initValue['location'][i]
				)
		} catch(err) {
		}
	};
</script>