var filVil = {
	initialize: function initialize(data) {
		this.conf      = data || {};
		this.url       = '/';
		this.cont      = this.conf.cont;
		this.isLoad = this.conf.isLoad == undefined ? true : this.conf.isLoad;

		filVil.loadOnclick();
	},

	// подгружаем обработчки событий
	loadOnclick: function loadOnclick(e) {
		setTimeout(function() {
			if(filVil.isLoad)
				filVil.selectVillas();

			$('[name="search-filter"]').click(function(e) {
				e.preventDefault();

				if(window.location.pathname.split('/').indexOf('villas') !== -1)
					filVil.selectVillas();
			})
		}, 100)
	},

	// select Villas
	selectVillas: function() {
		var
			page = $('[name="pagination"]').val(),
			date_from,
			date_to,
			rooms,
			hot,
			way,
			url;

		way       = $('[name="f_way"]').val();
		date_to   = $.datepicker.formatDate("yy-mm-dd", $('#check_in').datepicker('getDate'));
		date_from = $.datepicker.formatDate("yy-mm-dd", $('#check_out').datepicker('getDate'));
		rooms     = $('[name="rooms"]').val();
		hot       = $("[name=hot]:checked").val() || -1;
		url       = '&way=' + way + '&date_to=' + date_to + '&date_from=' + date_from + '&rooms=' + rooms + '&hot=' + hot;

		$(this.cont).css({opacity: 0.3});

		$.ajax({
			type    : "post",
			url     : "/_tools/search_render_villas?page=" + page + '&session=0' + url,
			cache   : false,
			dataType: "html",

			success: function(data) {
				$(filVil.cont).html(data);
				$(filVil.cont).animate({opacity: 1}, 150);

				$('[data-page]').click(function(e) {
					e.preventDefault();
					$('[name="pagination"]').val($(this).data('page'));
					filVil.selectVillas();
				});

				setTimeout(function() {
					var
						page = $('[name="pagination"]').val();

					if(isNaN(parseInt($('[data-page="' + page + '"]').data('page'))) && page > 1) {
						page = page - 1;
						$('[name="pagination"]').val(page);
						filVil.selectVillas();
					}
				}, 200)
			}
		});
	},
};
