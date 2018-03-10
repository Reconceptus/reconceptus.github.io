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
			var
				urlArr = window.location.pathname.split('/');

			if(filVil.isLoad)
				filVil.selectVillas();

			// init cart min
			filVil.addCart(0, 'init');

			$('[name="search-filter"]').click(function(e) {
				e.preventDefault();

				if(urlArr.indexOf('villas') !== -1)
					filVil.selectVillas();

				if(urlArr.indexOf('favorite') !== -1)
					filVil.selectVillas(true);
			})
		}, 100)
	},

	addCart: function(id, type) {
		$.ajax
		 ({
			 type: "post",
			 url : "/_tools/add_favorite",

			 data: {
				 get_data: true,
				 id      : id,
				 type    : type,
			 },

			 cache: false,

			 dataType: "JSON",
			 success : function(data) {
				 if(data.result === 'ok') {
					 var
						 fav = $('.top-favorite'),
						 selectorLice = $('.like-button');

					 fav.find('.cnt').html(data.count);

					 if(data.count)
						 fav.show();
					 else
						 fav.hide();

					 if(selectorLice.hasClass('like-button-' + id))
						 selectorLice = $('.like-button-' + id);

					 if(type == 'add') {
						 selectorLice.addClass('active');
						 selectorLice.attr('onclick', 'filVil.addCart(' + id + ', \'remove\')');
					 } else {
						 selectorLice.removeClass('active');
						 selectorLice.attr('onclick', 'filVil.addCart(' + id + ', \'add\')');

						 if(window.location.pathname.split('/').indexOf('favorite') !== -1)
							 filVil.selectVillas();
					 }
				 }
			 }
		 })
	},

	// select Villas
	selectVillas: function(isSession) {
		var
			page = $('[name="pagination"]').val(),
			date_from,
			date_to,
			rooms,
			hot,
			way,
			url;

		if(!isSession)
			isSession = window.location.pathname.split('/').indexOf('favorite') !== -1;

		way       = $('[name="f_way"]').val();
		date_to   = $.datepicker.formatDate("yy-mm-dd", $('#check_out').datepicker('getDate'));
		date_from = $.datepicker.formatDate("yy-mm-dd", $('#check_in').datepicker('getDate'));
		rooms     = $('[name="rooms"]').val();
		hot       = $("[name=hot]:checked").val() || -1;
		url       = '&way=' + way + '&date_to=' + date_to + '&date_from=' + date_from + '&rooms=' + rooms + '&hot=' + hot;
		url       +=  isSession ? url + '&session=1' : '&session=0';

		$(filVil.cont).css({opacity: 0.3});

		console.log('gfd', date_to, date_from, $('#check_in').datepicker('getDate'),  $('#check_in').val())

		$.ajax({
			type    : "post",
			url     : "/_tools/search_render_villas?page=" + page + url,
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
