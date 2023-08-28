<template>
  <section id="faq" class="faq section-bg">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h3 class="faqsection" style="font-size: 45.8px;font-weight: bold;">Advice</h3>
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-10">
          <ul class="faq-list">
            <li v-for="(healthItem, index) in health" :key="healthItem.id">
              <div class="question" @click="toggleAnswer(index)">
                {{ healthItem.Advice }}
                <i v-if="!healthItem.open" class="bi bi-chevron-down icon-show"></i>
                <i v-if="healthItem.open" class="bi bi-chevron-up icon-close"></i>
              </div>
              <div v-if="healthItem.open" class="answer">
                <p>{{ healthItem.Description }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import health from '../assets/json/health.json'

export default {
  data() {
    return {
      health: health.map(item => ({ ...item, open: false })), // Add an 'open' property to each item
    };
  },
  methods: {
    toggleAnswer(index) {
      this.health.forEach((item, i) => {
        item.open = i === index ? !item.open : false;
      });
    },
  },
};
</script>
      
    
<style>

.faqsection{
  text-align: center;
  padding-bottom: 30px;
}

.faq {
  padding: 60px 0;
  background: #f8f8f8;
}

.faq .faq-list {
  padding: 0;
  list-style: none;
}

.faq .faq-list li {
  border-bottom: 1px solid #f0d8b6;;
  margin-bottom: 20px;
  padding-bottom: 5px
}

.faq .faq-list .question {
  display: block;
  position: relative;
  font-family: black;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  padding-left: 25px;
  cursor: pointer;
  color: black;
  transition: 0.3s;
}

.faq .faq-list i {
  font-size: 16px;
  position: absolute;
  left: 0;
  top: -2px;
}

.faq .faq-list p {
  margin-bottom: 0;
  padding: 10px 0 0 25px;
}

.faq .faq-list .icon-show {
  display: none;
}

.faq .faq-list .collapsed {
  color: black;
}

.faq .faq-list .collapsed .icon-show {
  display: inline-block;
  transition: 0.6s;
}

.faq .faq-list .collapsed .icon-close {
  display: none;
  transition: 0.6s;
}

</style>
      