var filFav = {
	initialize: function initialize(data) {
		this.conf      = data || {};
		this.url       = '/';
		this.cont      = this.conf.cont;
		this.isLoadCat = this.conf.isLoadCat == undefined ? true : this.conf.isLoadCat;
		filFav.loadOnclick();
	},

	// подгружаем обработчки событий
	loadOnclick: function loadOnclick(e) {
		setTimeout(function() {
			// init cart min
			filFav.addCart(0, 'init');
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
						 fav = $('.top-favorite');

					 fav.find('.cnt').html(data.count);

					 if(data.count)
						 fav.show();
					 else
						 fav.hide();

					 filFav.selectFavorites();
				 }
			 }
		 })
	},

	// select Favorites
	selectFavorites: function() {
		if(!this.isLoadCat)
			return false;

		var
			page = $('[name="pagination"]').val();

		$(this.cont).css({opacity: 0.3});

		$.ajax({
			type    : "post",
			url     : "/_tools/search_render_villas?page=" + page,
			cache   : false,
			dataType: "HTML",

			success: function(data) {
				$(filFav.cont).html(data);
				$(filFav.cont).animate({opacity: 1}, 150);

				$('[data-page]').click(function(e) {
					e.preventDefault();
					$('[name="pagination"]').val($(this).data('page'));
					filFav.selectFavorites();
				});

				setTimeout(function() {
					var
						page = $('[name="pagination"]').val();

					if(isNaN(parseInt($('[data-page="' + page + '"]').data('page'))) && page > 1) {
						page = page - 1;
						$('[name="pagination"]').val(page);
						filFav.selectFavorites();
					}
				}, 200)
			}
		});
	},
};
