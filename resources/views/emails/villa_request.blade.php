<table border="0">
	<tr>
		<td>@lang('main.check_in'): </td>
		<td>{{ empty($arrivalDate) ? '-' : $arrivalDate }}</td>
	</tr>

	<tr>
		<td>@lang('main.check_out'): </td>
		<td>{{ empty($departureDate) ? '-' : $departureDate }}</td>
	</tr>

	<tr>
		<td>@lang('main.guests'): </td>
		<td>{{ empty($guests) ? '-' : $guests }}</td>
	</tr>

	<tr>
		<td>@lang('main.children'): </td>
		<td>{{ empty($children) ? '-' : $children }}</td>
	</tr>

	<tr>
		<td>@lang('main.e_mail'): </td>
		<td>{{ empty($mail) ? '-' : $mail }}</td>
	</tr>

	<tr>
		<td>@lang('main.message'): </td>
		<td>{{ empty($message_s) ? '-' : $message_s }}</td>
	</tr>

	<tr>
		<td>@lang('main.selected_villa'):</td>

		<td>
			<p>
				<a href="http://greecobooking.niws.ru/villas/{{ $selected_villa['id'] }}">
					{{ $langSt($selected_villa['name']) }}
				</a>
			</p>
		</td>
	</tr>
</table>