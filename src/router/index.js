import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
// import HelloWorld from '../components/HelloWorld';
// import Counter from '../components/Counter';

import Chinese from '../components/math_formula/Chinese';
import ChineseBlank from '../components/math_formula/ChineseBlank';
import English from '../components/math_formula/English';
import EnglishBlank from '../components/math_formula/EnglishBlank';



const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    // {
    //   path: '/hello',
    //   component: HelloWorld,
    //   meta: {
    //     title: 'Hello World',
    //   },
    // },
    // {
    //   path: '/counter',
    //   component: Counter,
    //   meta: {
    //     title: 'Counter',
    //   },
    // },
    {
      path: '/chinese',
      component: Chinese,
      meta: {
        title: 'Chinese',
      },
    },
    {
      path: '/chinese_blank',
      component: ChineseBlank,
      meta: {
        title: 'Chinese Blank',
      },
    },
    {
      path: '/english',
      component: English,
      meta: {
        title: 'English',
      },
    },
    {
      path: '/english_blank',
      component: EnglishBlank,
      meta: {
        title: 'English Blank',
      },
    },
    {path: '*', redirect: '/home'},
  ],
});

router.replace('/home');

module.exports = router;
