import HomeComponent from './pages/Home.vue';
import AboutComponent from './pages/About.vue';
import CurriculumComponent from './pages/Curriculum.vue';
import ContactComponent from './pages/Contact.vue';

export default [
    { path: '/', component: HomeComponent, name: 'Início' },
    { path: '/sobre', component: AboutComponent, name: 'Sobre' },
    { path: '/curriculo', component: CurriculumComponent, name: 'Currículo' },
    // { path: '/contato', component: ContactComponent, name: 'Contato' },
];
