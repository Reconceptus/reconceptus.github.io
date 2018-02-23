<table border="0">
	<tr>
		<td>@lang('main.name'): </td>
		<td>{{ empty($name) ? '-' : $name }}</td>
	</tr>

	<tr>
		<td>@lang('main.e_mail'): </td>
		<td>{{ empty($mail) ? '-' : $mail }}</td>
	</tr>

	<tr>
		<td>@lang('main.phone'): </td>
		<td>{{ empty($telephone) ? '-' : $telephone }}</td>
	</tr>

	<tr>
		<td>@lang('main.message'): </td>
		<td>{{ empty($message_form) ? '-' : $message_form }}</td>
	</tr>
</table>