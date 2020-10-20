'use strict';

Vue.component('PageHeader', {
  data() {
    return {
      text: '',
      visibleSearch: false,
      visibleNav: false,
      pageOnTheTop: Boolean
    }
  },
  methods: {
    showSearch(){
      this.visibleSearch = true;
      this.$refs.search.focus();
    },
    scrollEndHandling(){
      this.pageOnTheTop = window.pageYOffset === 0;

      let isScrolling;
      window.addEventListener('scroll', (event) => {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
          this.pageOnTheTop = window.pageYOffset === 0;
          this.visibleSearch = false;
        }, 20);
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
      hiddenIntro: false
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
      var flkty = new Flickity( carousel, {
        accessibility: false,
        contain: true,
        cellAlign: 'left',
        adaptiveHeight: true,
        percentPosition: true,
        prevNextButtons: false,
        pageDots: false,
      });
    }
  },
  mounted() {
    this.scrollHandling();
    this.initCarousel();
  }
});