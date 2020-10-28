'use strict';

Vue.component('PageHeader', {
  data() {
    return {
      text: '',
      visibleSearch: false,
      visibleNav: false,
      pageOnTheTop: Boolean,
      showTooltip: false,
      testIsVisible: false,
      extendedMenu: true,
      fullLayout: true,
      fullMode: false
    }
  },
  methods: {
    copyNumber(){
      this.showTooltip = true;
      let input = document.getElementById('copyNumber');
      input.select();
      document.execCommand('copy');
    },
    navMenuToggle(){
      this.visibleNav = !this.visibleNav;
      document.documentElement.classList.toggle('ovh')
    },
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
        }, 5);
      }, false);
    }
  },
  mounted() {
    this.scrollEndHandling();
  }
});

new Vue({
  el: '#result',
  data: function() {
    return {
      howItWorks: false,
      formId: null,
      comparedIDs: ['', ''],
      personalityScale: [
        {
          title: 'Разум',
          left: {
            label: 'Интроверсия',
            value: 13,
            max: 40
          },
          right: {
            label: 'Экстраверсия',
            value: 24,
            max: 40
          }
        },
        {
          title: 'Энергии',
          left: {
            label: 'Интуиция',
            value: 21,
            max: 40
          },
          right: {
            label: 'Ощущения',
            value: 9,
            max: 40
          }
        },
        {
          title: 'Название',
          left: {
            label: 'Чувтсвование',
            value: 15,
            max: 40
          },
          right: {
            label: 'Мышление',
            value: 38,
            max: 40
          }
        },
        {
          title: 'Разум',
          left: {
            label: 'Восприятие',
            value: 18,
            max: 40
          },
          right: {
            label: 'Суждение',
            value: 16,
            max: 40
          }
        },
      ],
      expanded: ['Описание типа INTJ-A / INTJ-T'],
      typeDescriptionFull: [
        {
          label: 'Описание типа INTJ-A / INTJ-T',
          icon: '#icon-result-user',
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
          label: 'Сильные и слабые стороны',
          icon: '#icon-result-psycho',
          children: [{body: 'story'}]
        },
        {
          label: 'Романтические отношения',
          icon: '#icon-result-favorite',
          children: [{body: 'story'}]
        },
        {
          label: 'Дружба',
          icon: '#icon-result-people',
          children: [{body: 'story'}]
        },
        {
          label: 'Родительство',
          icon: '#icon-result-child',
          children: [{body: 'story'}]
        },
        {
          label: 'Карьера',
          icon: '#icon-result-business',
          children: [{body: 'story'}]
        },
        {
          label: 'Привычки на рабочем месте',
          icon: '#icon-result-key',
          children: [{body: 'story'}]
        },
        {
          label: 'Выводы',
          icon: '#icon-result-flag',
          children: [{body: 'story'}]
        },
      ],
      typeDescriptionFree: [
        {
          label: 'Описание типа INTJ-A / INTJ-T',
          icon: '#icon-result-user',
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
          label: 'Сильные и слабые стороны',
          icon: '#icon-result-psycho',
          children: [{body: 'story'}]
        },
        {
          label: 'Романтические отношения',
          icon: '#icon-result-favorite',
          disabled: true,
          children: [{body: 'story'}]
        },
        {
          label: 'Дружба',
          icon: '#icon-result-people',
          disabled: true,
          children: [{body: 'story'}]
        },
        {
          label: 'Родительство',
          icon: '#icon-result-child',
          disabled: true,
          children: [{body: 'story'}]
        },
        {
          label: 'Карьера',
          icon: '#icon-result-business',
          disabled: true,
          children: [{body: 'story'}]
        },
        {
          label: 'Привычки на рабочем месте',
          icon: '#icon-result-key',
          disabled: true,
          children: [{body: 'story'}]
        },
        {
          label: 'Выводы',
          icon: '#icon-result-flag',
          disabled: true,
          children: [{body: 'story'}]
        },
      ],
      typeDescriptionEnabled: [
        {
          label: 'Описание типа INTJ-A / INTJ-T',
          icon: '#icon-result-user',
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
          label: 'Сильные и слабые стороны',
          icon: '#icon-result-psycho',
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
      ],
      typeDescriptionDisabled: [
        {
          label: 'Романтические отношения',
          icon: '#icon-result-favorite',
          disabled: true,
          children: [{body: 'story'}]
        },
        {
          label: 'Дружба',
          icon: '#icon-result-people',
          disabled: true,
          children: [{body: 'story'}]
        },
        {
          label: 'Родительство',
          icon: '#icon-result-child',
          disabled: true,
          children: [{body: 'story'}]
        },
        {
          label: 'Карьера',
          icon: '#icon-result-business',
          disabled: true,
          children: [{body: 'story'}]
        },
        {
          label: 'Привычки на рабочем месте',
          icon: '#icon-result-key',
          disabled: true,
          children: [{body: 'story'}]
        },
        {
          label: 'Выводы',
          icon: '#icon-result-flag',
          disabled: true,
          children: [{body: 'story'}]
        },
      ]
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
    }
  },
  mounted() {

  }
});