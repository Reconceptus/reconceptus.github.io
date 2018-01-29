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
					type: "post",
					url: "/admin/plugins/setCalendarRow",
					data: data,
					cache: false,
					dataType: "json"
				});
			};

		window.bookingCalendarInit = function() {
			$.ajax({
				type: "post",
				url: "/admin/plugins/getCalendarList",
				data: {villas_id: '{{ $id }}'},
				cache: false,
				dataType: "json",

				success: function(data) {
					return CalendarInit(data);
				}
			});
		};

		function CalendarInit(data) {
			if(typeof $.fn.fullCalendar != "undefined") {
				var e, calendar;

				calendar = $("#booking_calendar").fullCalendar({
					locale: '{{ $lang }}',

					header: {
						left: "prev,next today,listMonth",
						center: "title",
						right: "month,agendaWeek,agendaDay,listMonth"
					},

					selectable: true,
					selectHelper: true,
					editable: true,
					events: data.items,

					select: function(a, b, c) {
						$(".antosubmit").off('click');

						$("#fc_create").click(), e = a, ended = b, $(".antosubmit").on("click", function() {
							$.ajax({
								type: "post",
								url: "/admin/plugins/setCalendarRow",

								data: {
									description: $("#descr").val() || '',
									end        : b.format("YYYY-MM-DD HH:mm:ss") || '',
									id         : a.id,
									start      : a.format("YYYY-MM-DD HH:mm:ss") || '',
									title      : $("#title").val(),
									villas_id  : '{{ $id }}',
								},

								cache: false,
								dataType: "json",

								success: function(data) {
									var
										a = $("#title").val();

									return b && (ended = b), a && calendar.fullCalendar("renderEvent", {
										allDay: c,
										end   : b,
										id    : data.items.id,
										start : e,
										title : a,
									}, !0), $("#title").val(""), calendar.fullCalendar("unselect"), $(".antoclose").click(), !1
								}
							});
						})
					},

					// update
					eventClick: function(a, b, c) {
						$("#fc_edit").click();
						$("#title2").val(a.title);
						$("#idCalendarRow").val(a._id);
						$("#idCalendarRow").data('id', a.id);
						$(".antosubmit2").off('click');

						$(".antosubmit2").on("click", function() {
							a.title = $("#title2").val();
							calendar.fullCalendar("updateEvent", a);
							$(".antoclose2").click();

							setCalendarRow({
								description: a.description || '',
								end        : a.end.format("YYYY-MM-DD HH:mm:ss"),
								id         : a.id,
								start      : a.start.format("YYYY-MM-DD HH:mm:ss"),
								title      : a.title,
							});
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

					eventRender: function(event, element) {
						$(element[0]).attr('title', event.description)
					},

					removeEvents: function(event, element) {
						console.log(ev)
					},
				});

				$('#calendarRowRemove').click(function() {
					$.ajax({
						type: "post",
						url: "/admin/plugins/removeCalendarRow",
						data: {id: $('#idCalendarRow').data('id')},
						cache: false,
						dataType: "json",

						success: function() {
							calendar.fullCalendar('removeEvents', $('#idCalendarRow').val());
						}
					});
				});

			}
		}
	</script>

	<!-- calendar modal -->
	<div
		id="CalenderModalNew"
		class="modal fade"
		tabindex="-1"
		role="dialog"
		aria-labelledby="myModalLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog">
			<div class="modal-content">

				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
					<h4 class="modal-title" id="myModalLabel">@lang('admin::main.adding_a_new_date')</h4>
				</div>
				<div class="modal-body">
					<div id="testmodal" style="padding: 5px 20px;">
						<form id="antoform" class="form-horizontal calender" role="form">
							<div class="form-group">
								<label class="col-sm-3 control-label">@lang('admin::plugins.title')</label>

								<div class="col-sm-9">
									<input
										type="text"
										class="form-control"
										id="title"
										name="title"
										placeholder="@lang('admin::plugins.title')"
									/>
								</div>
							</div>

							{{--<div class="form-group">--}}
							{{--<label class="col-sm-3 control-label">@lang('admin::plugins.description')</label>--}}

							{{--<div class="col-sm-9">--}}
							{{--<textarea--}}
							{{--class="form-control"--}}
							{{--style="height:55px;"--}}
							{{--id="descr"--}}
							{{--name="descr"--}}
							{{--placeholder="@lang('admin::plugins.description')"--}}
							{{--></textarea>--}}
							{{--</div>--}}
							{{--</div>--}}
						</form>
					</div>
				</div>

				<div class="modal-footer">
					<button type="button" class="btn btn-default antoclose" data-dismiss="modal">
						@lang('admin::main.close')
					</button>

					<button type="button" class="btn btn-primary antosubmit">@lang('admin::main.save')</button>
				</div>
			</div>
		</div>
	</div>

	<div
		id="CalenderModalEdit"
		class="modal fade"
		tabindex="-1"
		role="dialog"
		aria-labelledby="myModalLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
					<h4 class="modal-title" id="myModalLabel2">@lang('admin::main.editing_the_date')</h4>
				</div>
				<div class="modal-body">

					<div id="testmodal2" style="padding: 5px 20px;">
						<form id="antoform2" class="form-horizontal calender" role="form">
							<div class="form-group">
								<label class="col-sm-3 control-label">@lang('admin::plugins.title')</label>

								<div class="col-sm-9">
									<input
										type="text"
										class="form-control"
										id="title2"
										name="title2"
										placeholder="@lang('admin::plugins.title')"
									/>
								</div>
							</div>

							{{--<div class="form-group">--}}
							{{--<label class="col-sm-3 control-label">@lang('admin::plugins.description')</label>--}}
							{{--<div class="col-sm-9">--}}
							{{--<textarea--}}
							{{--class="form-control"--}}
							{{--style="height:55px;"--}}
							{{--id="descr2" name="descr"--}}
							{{--placeholder="@lang('admin::plugins.description')"--}}
							{{--></textarea>--}}
							{{--</div>--}}
							{{--</div>--}}

							<input type="hidden" id="idCalendarRow" />
						</form>
					</div>
				</div>
				<div class="modal-footer">
					<button id="calendarRowRemove" type="button" class="btn btn-danger" data-dismiss="modal">
						@lang('admin::main.remove')
					</button>

					<button type="button" class="btn btn-default antoclose2" data-dismiss="modal">
						@lang('admin::main.close')
					</button>

					<button type="button" class="btn btn-primary antosubmit2">@lang('admin::main.save')</button>
				</div>
			</div>
		</div>
	</div>

	<div id="fc_create" data-toggle="modal" data-target="#CalenderModalNew"></div>
	<div id="fc_edit" data-toggle="modal" data-target="#CalenderModalEdit"></div>
	<!-- /calendar modal -->
@endpush
