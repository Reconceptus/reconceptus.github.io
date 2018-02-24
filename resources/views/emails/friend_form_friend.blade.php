<table border="0">
	<tr>
		<td>@lang('main.sender_s_email'):</td>
		<td>{{ empty($yourEmail) ? '-' : $yourEmail }}</td>
	</tr>

	<tr>
		<td>@lang('main.message'):</td>
		<td>{{ empty($message) ? '-' : $message }}</td>
	</tr>

	<tr>
		<td>@lang('main.selected_villas'):</td>

		<td>
			@foreach($selected_villas as $villa)
				<p>
					<a href="http://greecobooking.niws.ru/villas/{{ $villa['id'] }}">{{ $langSt($villa['name']) }}</a>
				</p>
			@endforeach
		</td>
	</tr>
</table>