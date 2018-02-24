<table border="0">
	<tr>
		<td>@lang('main.sender_name'):</td>
		<td>{{ empty($yourName) ? '-' : $yourName }}</td>
	</tr>

	<tr>
		<td>@lang('main.sender_s_email'):</td>
		<td>{{ empty($yourEmail) ? '-' : $yourEmail }}</td>
	</tr>

	<tr>
		<td>@lang('main.emails_friends'):</td>

		<td>
			@foreach($friendMail as $mail)
				<p>{{ $mail }}</p>
			@endforeach
		</td>
	</tr>

	<tr>
		<td>@lang('main.message'):</td>
		<td>{{ empty($message_s) ? '-' : $message_s }}</td>
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