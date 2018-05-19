var filVil = {
	initialize: function initialize(data) {
		this.conf   = data || {};
		this.url    = '/';
		this.cont   = this.conf.cont;
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
		}, 100);

		if(!$(filVil.cont).html())
			$(filVil.cont).html('<div class="loader">' +
				'<div>' +
				'<svg xmlns="http://www.w3.org/2000/svg" version="1.1">' +
				'<defs>' +
				'<filter id="goo">' +
				'<fegaussianblur in="SourceGraphic" stddeviation="15" result="blur"></fegaussianblur>' +
				'<fecolormatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 26 -7"' +
				' result="goo"></fecolormatrix>' +
				'<feblend in="SourceGraphic" in2="goo"></feblend>' +
				'</filter>' +
				'</defs>' +
				'</svg>' +
				'</div>' +
				'</div>');
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
						 fav          = $('.top-favorite'),
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
						 $('html, body').animate({scrollTop: 0}, '300')
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

	/**
	 * Select Villas.
	 *
	 * @param isSession
	 */
	selectVillas: function(isSession) {
		var
			page      = $('[name="pagination"]').val(),
			date_from = -1,
			date_to   = -1,
			guests_person,
			hot,
			way,
			url;

		if(!$(filVil.cont).find('.loader').html())
			$(filVil.cont).css({opacity: 0.3});

		if(!isSession)
			isSession = window.location.pathname.split('/').indexOf('favorite') !== -1;

		if($('#check_out').length)
			date_to = $.datepicker.formatDate("yy-mm-dd", $('#check_out').datepicker('getDate'));

		if($('#check_in').length)
			date_from = $.datepicker.formatDate("yy-mm-dd", $('#check_in').datepicker('getDate'));

		way           = $('[name="f_way"]').val();
		guests_person = $('[name="guests_person"]').val();
		hot           = $("[name=hot]:checked").val() || -1;
		url           = '&way=' + way + '&date_to=' + date_to + '&date_from=' + date_from + '&guests_person=' + guests_person + '&hot=' + hot;
		url += isSession ? url + '&session=1' : '&session=0';

		if(window.location.href.indexOf('villas_by_the_sea') !== -1)
			url += url + '&villas_by_the_sea=1';

		if(window.location.href.indexOf('villas_with_private_service') !== -1)
			url += url + '&villas_with_private_service=1';

		if(window.location.href.indexOf('vacation_together') !== -1)
			url += url + '&vacation_together=1';

		if(window.location.href.indexOf('return=1') !== -1)
			url += url + '&return=1';

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
