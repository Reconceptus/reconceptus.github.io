'use strict';

Vue.component('PageHeader', {
  data() {
    return {
      text: '',
      visibleSearch: false,
      visibleNav: false,
      visibleMailBox: false,
      pageOnTheTop: Boolean,
      fullLayout: true,
      extendedMenu: false,
      testIsVisible: false
    }
  },
  methods: {
    navMenuToggle(){
      this.visibleNav = !this.visibleNav;
    },
    showSearch(){
      this.visibleSearch = true;
      this.$refs.search.focus();
    },
    showProcessSection(){
      let section = document.getElementById('processSection'),
          sectionOffsetTop = section.getBoundingClientRect().top;

      if(sectionOffsetTop < 0.5*window.innerHeight){
        section.classList.add('is-active');
      }
    },
    scrollEndHandling(){
      this.pageOnTheTop = window.pageYOffset === 0;
      this.testIsVisible = window.pageYOffset > window.innerHeight - 100;
      this.showProcessSection();

      let isScrolling;
      window.addEventListener('scroll', (event) => {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
          this.pageOnTheTop = window.pageYOffset === 0;
          this.visibleSearch = false;
          this.testIsVisible = window.pageYOffset > window.innerHeight - 100;

          this.showProcessSection();
        }, 5);
      }, false);
    }
  },
  mounted() {
    this.scrollEndHandling();
  }
});

new Vue({
  el: '#index',
  data: function() {
    return {
      howItWorks: false,
      formId: null,
      hiddenIntro: false,
      flkty: Object
    }
  },
  methods: {
    goToForm: function() {
      window.location = '/form/'+this.formId;
    },
    startForm: function() {
      axios.post('/form/start/kpmi')
      .then(ans => {
        window.location = '/form/'+ans.data.data;
      })
    },
    scrollHandling(){
      this.hiddenIntro = window.pageYOffset > window.innerHeight - 100;
      window.addEventListener('scroll', (event) => {
          this.hiddenIntro = window.pageYOffset > window.innerHeight - 100;
      }, false);
    },
    initCarousel (){
      const carousel = document.querySelector('.js-person-carousel');
      const carouselCells = document.querySelectorAll('.js-person');
      if(carouselCells.length < 2) {
        return
      }
      this.flkty = new Flickity( carousel, {
        accessibility: false,
        contain: true,
        cellAlign: 'left',
        adaptiveHeight: true,
        percentPosition: true,
        prevNextButtons: false,
        pageDots: false,
      });
    },
    nexSlide(){
      this.flkty.next()
    }
  },
  mounted() {
    this.scrollHandling();
    this.initCarousel();
  }
});