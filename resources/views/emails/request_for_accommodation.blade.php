<table border="0">
	<tr>
		<td>@lang('main.name'): </td>
		<td>{{ empty($name) ? '-' : $name }}</td>
	</tr>

	<tr>
		<td>@lang('main.position'): </td>
		<td>{{ empty($position) ? '-' : $position }}</td>
	</tr>

	<tr>
		<td>@lang('main.phone'): </td>
		<td>{{ empty($telephone) ? '-' : $telephone }}</td>
	</tr>

	<tr>
		<td>@lang('main.e_mail'): </td>
		<td>{{ empty($mail) ? '-' : $mail }}</td>
	</tr>

	<tr>
		<td>@lang('main.address_of_the_villa'): </td>
		<td>{{ empty($villaAddress) ? '-' : $villaAddress }}</td>
	</tr>

	<tr>
		<td>@lang('main.site_or_link_to_photos'): </td>
		<td>{{ empty($siteLink) ? '-' : $siteLink }}</td>
	</tr>

	<tr>
		<td>@lang('main.where_did_you_find_out_about_us'): </td>
		<td>{{ empty($source) ? '-' : $source }}</td>
	</tr>
</table>