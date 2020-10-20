'use strict';

new Vue({
  el: '#form',
  data: function() {
    return {
      curQ: {},
      questions: [],
      questionText: '',
      userAnswer: null,
      session: null,
      isLoading: false,
      questionsPassed: 0,
      questionsBeforePause: 2,  // через сколько вопросов выскочит попап про отдых
      restPopup: [
          {
            message: 'Можешь сделать двухминутный перерыв!',
            avatar: 'assets/svg/partials/rest-icon-01.svg'
          },
          {
            message: 'Пора продолжить заполнение анкеты, иначе придется начать все с начала',
            avatar: 'assets/svg/partials/rest-icon-02.svg'
          },
          {
            message: 'Продолжи тестирование. Иначе тест обнулится.',
            avatar: 'assets/svg/partials/rest-icon-03.svg'
          },
          {
            message: 'Ты взял хороший темп! Продолжай так же.',
            avatar: 'assets/svg/partials/rest-icon-04.svg'
          }
      ]
    }
  },
  computed: {
    progressScale(){
      return ((this.curQ.position - 1)*100/(this.questions.length - 1))
    },
  },
  watch: {
    curQ(){
      if(this.curQ.position > this.questionsPassed){
        if(!(this.questionsPassed % this.questionsBeforePause) && this.questionsPassed !== 0){
          const randomCount = Math.floor(Math.random() * this.restPopup.length);
          const randomPopup = this.restPopup[randomCount];
          this.$q.notify({
            ...randomPopup,
            color: 'white',
            classes: 'rest-popup',
            position: 'bottom-right',
            textColor: 'primary',
            actions: [
              { label: 'Продолжить', color: 'white', handler: () => { /* ... */ } },
            ],
            timeout: 4000000
          });
        }
        this.questionsPassed += 1;
      }
    },
  },
  methods: {
    async generateForm(error = false) {
      return await new Promise((resolve, reject) => {
        if(error === true) reject({
          data: {
            error: 'Ошибка анкеты-рыбы!'
          }
        });
        resolve(JSON.parse(fish_form));
      })
    },
    // Получение первого вопроса, на который пользователь не дал ответ.
    // Если пролог был пролистан, считается, что на него был дан ответ.
    getCurQ: function() {
      for(let i = 0; i < this.questions.length; i++) {
        if([null, undefined].includes(
          this.questions[i].user_answer)){
          return this.questions[i];
        }
      }
    },
    // Навигация по анкете при помощи клавиатуры.
    keyNavigate: function(event) {
      if(event.key === 'Enter') this.nextQuestion();
      // if(event.key === 'Backspace') this.previousQuestion();
      if(this.curQ.type_name === 'hard') {
        if(event.key === 'ArrowUp') {
          if(!this.userAnswer) this.userAnswer = 1;
          else if(this.userAnswer === this.curQ.answers.length) {
            this.userAnswer = 1;
          }
          else this.userAnswer += 1;
        }
        if(event.key === 'ArrowDown') {
          if(!this.userAnswer) this.userAnswer = 1;
          else if(this.userAnswer === 1) {
            this.userAnswer = this.curQ.answers.length;
          }
          else this.userAnswer -= 1;
        }
      }
    },
    // Переход к следующему по порядку вопросу.
    nextQuestion: function() {
      if(this.curQ.position <= this.questions.length) {
        // При прохождении пролога делается отметка о том,
        // что на него был дан ответ.
        if(this.curQ.type_name === 'prlg') {
          this.curQ.user_answer = 1;
          this.userAnswer = 1;
        }
        // Валидация наличия ответа на обязательные вопросы.
        if(this.curQ.mandatory && (!this.userAnswer || (Array.isArray(this.userAnswer) && !this.userAnswer.length))){
            this.$q.notify({
                color: 'red',
                message: 'Ответьте на вопрос, прежде чем перейти к следующему.',
                position: 'top',
                textColor: 'white'
            });
        }
        else {
          // Сохранение текущего времени ответа.
          if(!this.curQ.answer_time) this.curQ.answer_time = Date.now();

          // Сохранение текущего варианта ответа.
          this.questions[this.curQ.position-1].user_answer =
            this.userAnswer;
          
          // Завершение прохождения анкеты:
          // изменение статуса прохождения и переход на страницу интерпретации.
          if(this.curQ.position === this.questions.length) {
            // Логика завершения анкеты.
              this.isLoading = true;
          }
          else {
            // Получение данных следующего вопроса.
            this.curQ = this.questions[this.curQ.position];

            // Сохранение времени отображения вопроса.
            if(!this.curQ.show_time) {
              this.curQ.show_time = Date.now();
            }
            this.userAnswer = this.questions[this.curQ.position-1].user_answer;
          }
        }
      };
    },
    // Переход к предыдущему по порядку вопросу.
    previousQuestion: function() {
      if(this.curQ.position > 1) {
        // Сохранение текущего варианта ответа.
        this.questions[this.curQ.position-1].user_answer = this.userAnswer;

        // Получение данных предыдущего вопроса.
        this.curQ = this.questions[this.curQ.position - 2];

        this.userAnswer = this.questions[this.curQ.position-1].user_answer;
      };
    },
  },
  mounted: function() {
    // Создание рыбы анкеты.
    this.generateForm()
    .then(ans => {
      this.session = ans.data.data;
      this.questions = this.session.progress_status === 'main_in_progress' ?
        this.session.questions : this.session.additional_questions;
      this.curQ = this.getCurQ();
      document.addEventListener('keydown', this.keyNavigate);
      this.userAnswer = this.questions[this.curQ.position-1].user_answer;
      if(!this.curQ.show_time) this.curQ.show_time = Date.now();
    })
    .catch(ans => {
      this.$q.notify({
        color: 'red',
        message: ans.data.error,
        position: 'top',
        textColor: 'white'
      });
    });
  },
});