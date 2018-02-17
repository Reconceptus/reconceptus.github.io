@extends('site.layouts.default')

@section('content')
    <section class="simple-page--head results--head" style="background-image: url('/images/bg/account-bg.jpeg')">
        <div class="content">
            <header class="light-style">
                <h1 class="headline_main">Поиск</h1>
            </header>
        </div>
    </section>
    <div class="results search-results">
        <div class="content">
            <div class="results-box inside-mob">
                <div class="content content_sm">
                    <ul class="results-list">
                        <li>
                            <h3 class="title"><a href="#">1. White cube, bermondsey H3</a></h3>
                            <p>Stepping inside this huge warehouse in Bermondsey, you wouldn’t know that you were in a commercial gallery and that the art was for sale. The dramatic minimalist corridor leads you to vast galleries where some of the most famous contemporary artists are represented and exhibited such as Tracey Emin, Damien Hirst and Jake and Dinos Chapman (Jay Jopling, the founder, championed the ‘Young British Artists’).</p>
                        </li>
                        <li>
                            <h3 class="title"><a href="#">2. White cube, bermondsey H3</a></h3>
                            <p>Stepping inside this huge warehouse in Bermondsey, you wouldn’t know that you were in a commercial gallery and that the art was for sale. The dramatic minimalist corridor leads you to vast galleries where some of the most famous contemporary artists are represented and exhibited such as Tracey Emin, Damien Hirst and Jake and Dinos Chapman (Jay Jopling, the founder, championed the ‘Young British Artists’).</p>
                        </li>
                        <li>
                            <h3 class="title"><a href="#">3. White cube, bermondsey H3</a></h3>
                            <p>Stepping inside this huge warehouse in Bermondsey, you wouldn’t know that you were in a commercial gallery and that the art was for sale. The dramatic minimalist corridor leads you to vast galleries where some of the most famous contemporary artists are represented and exhibited such as Tracey Emin, Damien Hirst and Jake and Dinos Chapman (Jay Jopling, the founder, championed the ‘Young British Artists’).</p>
                        </li>
                    </ul>
                    <div class="paging_center">
                        <div class="paging-list">
                            <a href="#" class="page-one prev"><svg> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/svg/sprite.svg#ico_page-prev"></use> </svg></a>
                            <a href="#" class="page-one">4</a>
                            <a href="#" class="page-one current">5</a>
                            <a href="#" class="page-one">6</a>
                            <a href="#" class="page-one next"><svg> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/svg/sprite.svg#ico_page-next"></use> </svg></a>
                        </div>
                        <span class="total">из 8</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection