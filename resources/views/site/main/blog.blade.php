@extends('site.layouts.default')

@section('content')
	<div class="blog-box">
		<section class="simple-page--head">
			<div class="content">
				<header>
					<h1 class="headline_main">@lang('main.blog')</h1>
				</header>
			</div>
		</section>
		<div class="content">
			<div class="blog-box--wrap">
				<div class="tags">
					<ul>
						<li><a href="/blog">@lang('main.all_articles')</a></li>

						@foreach($tags as $tag)
							<li>
								<a href="?tag={{ strtolower($langSt($tag['name'], 'en')) }}">
									{{ $langSt($tag['name']) }}
								</a>
							</li>
						@endforeach
					</ul>
				</div>
				<ul class="layout layout_lg">
					<li>
						<article class="article">
							<figure style="background-image: url('/images/items/10911829_78_z.jpg')"><a href="/blog/1"></a></figure>
							<div class="head">
								<h4 class="title"><a href="/blog/1">WHERE TO STAY IN London FOR A HEALTHY BREAKFAST: A CURATED GUIDE</a></h4>
								<div class="article-data">
									<time>25 марта 2017</time>
									<span class="views">
										<i><svg> <use xlink:href="/images/svg/sprite.svg#ico_blog-eye"></use> </svg></i>
										<span>3445</span>
									</span>
									<span class="comments">
										<i><svg> <use xlink:href="/images/svg/sprite.svg#ico_blog-message"></use> </svg></i>
										<span>27</span>
									</span>
								</div>
							</div>
						</article>
					</li>
					<li>
						<article class="article">
							<figure style="background-image: url('/images/items/art_77_91218.jpg')"><a href="/blog/1"></a></figure>
							<div class="head">
								<h4 class="title"><a href="/blog/1">THINGS TO DO AFTER DARK IN LONDON: AN EXPERT GUIDE</a></h4>
								<div class="article-data">
									<time>25 марта 2017</time>
									<span class="views">
										<i><svg> <use xlink:href="/images/svg/sprite.svg#ico_blog-eye"></use> </svg></i>
										<span>3445</span>
									</span>
									<span class="comments">
										<i><svg> <use xlink:href="/images/svg/sprite.svg#ico_blog-message"></use> </svg></i>
										<span>27</span>
									</span>
								</div>
							</div>
						</article>
					</li>
					<li>
						<article class="article">
							<figure style="background-image: url('/images/items/oia-hotel.jpg')"><a href="/blog/1"></a></figure>
							<div class="head">
								<h4 class="title"><a href="/blog/1">ГАСТРОНОМИЧЕСКИЕ РЕГИОНЫ ГРЕЦИИ: ЧТО И ГДЕ ПОПРОБОВАТЬ?</a></h4>
								<div class="article-data">
									<time>25 марта 2017</time>
									<span class="views">
										<i><svg> <use xlink:href="/images/svg/sprite.svg#ico_blog-eye"></use> </svg></i>
										<span>3445</span>
									</span>
									<span class="comments">
										<i><svg> <use xlink:href="/images/svg/sprite.svg#ico_blog-message"></use> </svg></i>
										<span>27</span>
									</span>
								</div>
							</div>
						</article>
					</li>
					<li>
						<article class="article">
							<figure style="background-image: url('/images/items/luxury_room2.jpg')"><a href="/blog/1"></a></figure>
							<div class="head">
								<h4 class="title"><a href="/blog/1">В ГРЕЦИЮ ЗА ЗДОРОВЬЕМ И КРАСОТОЙ: ЦЕЛЕБНЫЕ ИСТОЧНИКИ И КУРОРТЫ</a></h4>
								<div class="article-data">
									<time>25 марта 2017</time>
									<span class="views">
										<i><svg> <use xlink:href="/images/svg/sprite.svg#ico_blog-eye"></use> </svg></i>
										<span>3445</span>
									</span>
									<span class="comments">
										<i><svg> <use xlink:href="/images/svg/sprite.svg#ico_blog-message"></use> </svg></i>
										<span>27</span>
									</span>
								</div>
							</div>
						</article>
					</li>
				</ul>
				<div class="paging_center">
					<div class="paging-list">
						<a href="#" class="page-one prev"><svg> <use xlink:href="/images/svg/sprite.svg#ico_page-prev"></use> </svg></a>
						<a href="#" class="page-one">4</a>
						<a href="#" class="page-one current">5</a>
						<a href="#" class="page-one">6</a>
						<a href="#" class="page-one next"><svg> <use xlink:href="/images/svg/sprite.svg#ico_page-next"></use> </svg></a>
					</div>
					<span class="total">из 8</span>
				</div>
			</div>
		</div>
	</div>
@endsection