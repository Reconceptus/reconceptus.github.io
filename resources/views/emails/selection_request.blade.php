<table border="0">
	<tr>
		<td>@lang('main.name'): </td>
		<td>{{ empty($name) ? '-' : $name }}</td>
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
		<td>@lang('main.check_in'): </td>
		<td>{{ empty($arrivalDate) ? '-' : $arrivalDate }}</td>
	</tr>

	<tr>
		<td>@lang('main.check_out'): </td>
		<td>{{ empty($departureDate) ? '-' : $departureDate }}</td>
	</tr>

	<tr>
		<td>@lang('main.adults'): </td>
		<td>{{ empty($adults) ? '-' : $adults }}</td>
	</tr>

	<tr>
		<td>@lang('main.children_under_12_years'): </td>
		<td>{{ empty($childUntil12) ? '-' : $childUntil12 }}</td>
	</tr>

	<tr>
		<td>@lang('main.children_from_0_to_2_years'): </td>
		<td>{{ empty($babies) ? '-' : $babies }}</td>
	</tr>

	<tr>
		<td>@lang('main.direction'): </td>
		<td>{{ empty($way) ? '-' : $way }}</td>
	</tr>

	<tr>
		<td>@lang('main.budget_per_week_euro'): </td>
		<td>{{ empty($budget) ? '-' : $budget }}</td>
	</tr>
</table>