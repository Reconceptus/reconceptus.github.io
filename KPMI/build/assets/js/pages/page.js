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
      formId: null
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
  },
});