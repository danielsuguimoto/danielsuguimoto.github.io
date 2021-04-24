import HomeComponent from './pages/Home.vue';
import AboutComponent from './pages/About.vue';
import CurriculumComponent from './pages/Curriculum.vue';
import ContactComponent from './pages/Contact.vue';

export default {
    home: {
        component: HomeComponent,
        name: 'Início',
    },
    about: {
        component: AboutComponent,
        name: 'Sobre',
    },
    curriculum: {
        component: CurriculumComponent,
        name: 'Currículo',
    },
    // '/contato': {
    //     component: ContactComponent,
    //     name: 'Contato',
    // },
};
