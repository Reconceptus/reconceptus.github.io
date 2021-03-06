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
    clickOutsideNavMenu(e){
      let nav = document.getElementById('nav'),
          targetEl = e.target;

      do {
        if (targetEl === nav) {
          return;
        }
        targetEl = targetEl.parentNode;
      } while (targetEl);

      this.visibleNav = false;
      document.documentElement.classList.remove('ovh');
    },
    showSearch(){
      this.visibleSearch = true;
      this.$refs.search.focus();
    },
    scrollEndHandling(){
        this.pageOnTheTop = window.pageYOffset === 0;
        this.testIsVisible = window.pageYOffset > window.innerHeight - 100;

        let isScrolling;
        window.addEventListener('scroll', (event) => {
            window.clearTimeout(isScrolling);
            isScrolling = setTimeout(() => {
                this.pageOnTheTop = window.pageYOffset === 0;
                this.visibleSearch = false;
                this.testIsVisible = window.pageYOffset > window.innerHeight - 100;
            }, 5);
        }, false);
    },
    onSubmit (evt) {
      // evt.target.submit();
    },
  },
  mounted() {
    this.scrollEndHandling();
    document.addEventListener('click', (e) => this.clickOutsideNavMenu(e))
  }
});

new Vue({
  el: '#index',
  data: function() {
    return {
      howItWorks: false,
      formId: null,
      documents: [
        {
          label: 'Договор оферты',
          children: [
            {
              body: 'story',
              story: `<p>It can be lonely at the top. Being one of the rarest personality types and being among the most capable people, Architects know this all too well. They make up just two percent of the population, and women with this personality type are especially rare, forming only 0.8%. It can be difficult for Architects to find people who can keep up with their non-stop analysis of things. People with this personality type are imaginative yet decisive... ambitious yet like their privacy... curious about everything but remain focused.</p>
                      <h3>The Right Attitude for Meeting Goals</h3>
                      <p>With a natural thirst for knowledge that shows itself early in life, other kids at school often call Architects “bookworms.” While their peers may intend to insult them, those with this personality type likely identify with the label. Throughout their lives, they’re proud of how much they know, and Architects enjoy sharing the knowledge they gain. They’re confident in their mastery of their chosen subjects. They are serious and prefer to design and carry out effective plans rather than waste their time with foolish distractions like gossip.</p>
                      <blockquote>You are not entitled to your opinion. You are entitled to your informed opinion. No one is entitled to be ignorant.</blockquote>
                      <p>Architects accept and work with inconsistencies that make perfect sense to them – at least from a purely rational standpoint. For example, Architects can be both the most positive dreamers and the bitterest pessimists at the same time. On the positive side, these personalities believe nothing is impossible with enough effort, intellect, and thought. On the negative side, they might also believe that people are usually too lazy, unimaginative, or selfish to reach hard goals. But this idea won’t put them off chasing their own.</p>
                      <img src="https://picsum.photos/seed/picsum/1200/600" alt="">
                      <p>But they aren’t impulsive. Architects strive to remain rational no matter how attractive an easy but ill-considered route might be. Every idea must pass the strict and ever-present “Does this make sense?” and “Is this going to work?” filters.</p>`
            },
          ]
        },
        {
          label: 'Отказ от ответственности',
          children: [{body: 'story'}]
        },
        {
          label: 'Правила оплаты и возврата денежных средств',
          children: [{body: 'story'}]
        },
        {
          label: 'Политика работы с персональными данными',
          children: [{body: 'story'}]
        },
        {
          label: 'Информация о полной анонимности анкеты',
          children: [{body: 'story'}]
        },
      ],
    }
  },
  methods: {
    showSearch(){
      window.scrollTo(0, 0);
      setTimeout(()=>{
        this.$refs.header.showSearch();
      },100)
    },
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