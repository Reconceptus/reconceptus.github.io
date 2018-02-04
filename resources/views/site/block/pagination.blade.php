@if ($paginator->hasPages())
	<div class="paging_center">
		<div class="paging-list">
			{{-- Previous Page Link --}}
			@if ($paginator->onFirstPage())
				<a class="disabled prev page-one"><svg><use xlink:href="/images/svg/sprite.svg#ico_page-prev"></use></svg></a>
			@else
				<a class="prev page-one" href="{{ $paginator->previousPageUrl() }}" rel="prev">
					<svg><use xlink:href="/images/svg/sprite.svg#ico_page-prev"></use></svg>
				</a>
			@endif

			{{-- Pagination Elements --}}
			@foreach ($elements as $element)
				{{-- "Three Dots" Separator --}}
				@if (is_string($element))
					<a class="disabled page-one">{{ $element }}</a>
				@endif

				{{-- Array Of Links --}}
				@if (is_array($element))
					@foreach ($element as $page => $url)
						@if ($page == $paginator->currentPage())
							<a class="page-one current">{{ $page }}</a>
						@else
							<a class="page-one" href="{{ $url }}">{{ $page }}</a>
						@endif
					@endforeach
				@endif
			@endforeach

			{{-- Next Page Link --}}
			@if ($paginator->hasMorePages())
				<a class="next page-one" href="{{ $paginator->nextPageUrl() }}" rel="next">
					<svg><use xlink:href="/images/svg/sprite.svg#ico_page-next"></use></svg>
				</a>
			@else
				<a class="disabled next page-one"><svg><use xlink:href="/images/svg/sprite.svg#ico_page-next"></use></svg></a>
			@endif
		</div>

		<span class="total">из {{ $paginator->total() }}</span>
	</div>
@endif