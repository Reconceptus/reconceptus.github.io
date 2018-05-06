@push('header')
	<!-- FullCalendar -->
	<link href="{{ asset('modules/css/calendar/fullcalendar.min.css') }}" rel="stylesheet">
	<link href="{{ asset('modules/css/calendar/fullcalendar.print.css') }}" rel="stylesheet" media="print">
	<!-- FullCalendar -->
	<script src="{{ asset('modules/js/moment/moment.min.js') }}"></script>
	<script src="{{ asset('modules/js/calendar/fullcalendar.min.js') }}"></script>
	<script src="{{ asset('modules/js/calendar/locale-all.js') }}"></script>
@endpush

@if($id)
	{!! $field !!}
	<br class="clear" />
@else
	<div class="alert alert-info">@lang('admin::main.text_no_id_calendar')</div>
@endif

<style>
	.fc-content span {
		color: #fff !important;
	}
</style>

@push('footer')
	<script>
		var
			setCalendarRow = function setCalendarRow(data) {
				$.ajax({
					type    : "post",
					url     : "/admin/plugins/setCalendarRow",
					data    : data,
					cache   : false,
					dataType: "json"
				});
			};

		window.bookingCalendarInit = function() {
			$.ajax({
				type    : "post",
				url     : "/admin/plugins/getCalendarList",
				data    : {villas_id: '{{ $id }}'},
				cache   : false,
				dataType: "json",

				success: function(data) {
					return CalendarInit(data);
				}
			});
		};

		function CalendarInit(data) {
			if(typeof $.fn.fullCalendar != "undefined") {
				var e,
						calendar;

				calendar = $("#booking_calendar").fullCalendar({
					locale: '{{ $lang }}',

					header: {
						left  : "prev,next today,listMonth",
						center: "title",
						right : "month,agendaWeek,agendaDay,listMonth"
					},

					selectable  : true,
					selectHelper: false,
					editable    : true,
					events      : data.items,

					select: function(a, b, c) {
						$.ajax({
							type: "post",
							url : "/admin/plugins/setCalendarRow",

							data: {
								description: $("#descr").val() || '',
								end        : b.format("YYYY-MM-DD HH:mm:ss") || '',
								id         : a.id,
								start      : a.format("YYYY-MM-DD HH:mm:ss") || '',
								title      : $("#title").val(),
								villas_id  : '{{ $id }}',
							},

							cache   : false,
							dataType: "json",

							success: function(data) {
								calendar.fullCalendar("renderEvent", {
									allDay: c,
									end   : b,
									id    : data.items.id,
									start : a,
								});

								calendar.fullCalendar("unselect");
							}
						});
					},

					// delete
					eventClick: function(a, b, c) {
						$.ajax({
							type    : "post",
							url     : "/admin/plugins/removeCalendarRow",
							data    : {id: a._id},
							cache   : false,
							dataType: "json",

							success: function() {
								calendar.fullCalendar('removeEvents', a._id);
							}
						});

						calendar.fullCalendar("unselect")
					},

					eventResize: function(a) {
						setCalendarRow({
							description: a.description || '',
							end        : a.end.format("YYYY-MM-DD HH:mm:ss"),
							id         : a.id,
							start      : a.start.format("YYYY-MM-DD HH:mm:ss"),
							title      : a.title,
						});
					},
				});
			}
		}
	</script>
@endpush
