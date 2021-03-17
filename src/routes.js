import HomeComponent from './pages/Home.vue';
import AboutComponent from './pages/About.vue';
import CurriculumComponent from './pages/Curriculum.vue';
import ContactComponent from './pages/Contact.vue';

export default {
    '/': {
        component: HomeComponent,
        name: 'Início',
    },
    '/sobre': {
        component: AboutComponent,
        name: 'Sobre',
    },
    '/curriculo': {
        component: CurriculumComponent,
        name: 'Currículo',
    },
    // '/contato': {
    //     component: ContactComponent,
    //     name: 'Contato',
    // },
};
