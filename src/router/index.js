import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Contact from '@/components/Contact';
import Curriculo from '@/components/Curriculo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },{
    	path:'/contact',
    	name: 'Contact',
    	component: Contact
    },{
    	path:'/curriculo',
    	name: 'Curriculo',
    	component: Curriculo
    }
  ],
});
