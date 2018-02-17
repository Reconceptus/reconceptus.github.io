<!DOCTYPE html>
<html lang="ru">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta content="width=device-width" name="viewport" />
	<meta name="author" content="{{ $meta['author'] ?? '' }}" />
	<title>{{ $meta['title'] ?? '' }}</title>
	<meta content="{{ $meta['description'] ?? '' }}" name="description">
	<meta content="{{ $meta['keywords'] ?? '' }}" name="keywords">
	<meta http-equiv="Last-Modified" content="{{ ($meta['created_at'] ?? '') ?? ($meta['updated_at'] ?? '') }}">
	<link rel="icon" href="/favicon.ico" sizes="32x32" />
	<link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&amp;subset=cyrillic,cyrillic-ext,latin-ext" rel="stylesheet" />
	<link href="/css/styles.min.css" rel="stylesheet" />
	<link href="/css/common.css" rel="stylesheet" />
</head>
<body>
<div id="wrapper">
	<header id="header" class="header">
		<div class="content">
			<div class="header--wrap">
				<div class="logo">
					<a href="/"><img src="/images/svg/logo-white.svg" alt="GrecoBooking"></a>
				</div>

				<nav class="nav">
					<div class="nav-table">
						<div class="main-navigate">
							<ul>
{{--								{{ print_r($menu) }}--}}
								@foreach($menu as $val)
									@if(current($val)['cat'] === 0)
										@foreach($val as $v)
											@if($v['translation'] == 'location')
												<li class="has-submenu">
													<span class=""><span>{{ $langSt($v['name']) }}</span></span>
													<div class="submenu">
														<ul>
															@foreach($menu[$v['id']] as $vSub)
																<li>
																	<a
																		href="/{{ $v['translation'] ?? $v['id'] }}/{{ $vSub['translation'] ?? $vSub['id'] }}"
																		class="@if(($vSub['translation'] ?? $vSub['id']) === $segment1) active @endif"
																	>
																		{{ $langSt($vSub['name']) }}
																	</a>
																</li>
															@endforeach
														</ul>
													</div>
												</li>
											@else
												<li>
													<a
														href="/{{ $v['translation'] ?? $v['id'] }}"
														class="@if(($v['translation'] ?? $v['id']) === $segment1) active @endif"
													>
														<span>{{ $langSt($v['name']) }}</span>
													</a>
												</li>
											@endif
										@endforeach
									@endif
								@endforeach
							</ul>
						</div>
					</div>
				</nav>

				<div class="elements">
					<div class="search">
						<div class="form" id="searchForm">
							<form action="/search">
								<div class="field">
									<input id="searchInput" name="q" type="text" placeholder="@lang('main.search')">
								</div>

								<button type="submit">
									<svg>
										<use xlink:href="/images/svg/sprite.svg#ico_search"></use>
									</svg>
								</button>
							</form>
						</div>

						<label id="search_btn" for="searchInput" class="search-icon">
							<i>
								<svg>
									<use xlink:href="/images/svg/sprite.svg#ico_search"></use>
								</svg>
							</i>
						</label>
					</div>

					<div class="language has-submenu">
						<ul>
							<li class="{!! $lang === 'en' ? 'current' : '' !!}"><a href="?setLang=en"><span>EN</span></a></li>
							<li class="{!! $lang === 'ru' ? 'current' : '' !!}"><a href="?setLang=ru">RU</a></li>
						</ul>
					</div>

					<div class="request">
						<a href="/selection-request" class="btn btn_bord">@lang('main.selection_request')</a>
					</div>

					<span id="burger" class="burger">
						<span class="line1"></span>
						<span class="line2"></span>
						<span class="line3"></span>
					</span>
				</div>
			</div>
		</div>
	</header>

	<div id="main">