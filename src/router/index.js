import { createRouter, createWebHistory} from 'vue-router';
import Home from '../pages/index.vue';
import Todos from '../pages/todos/index.vue';

const rouster = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/todos',
            name: 'todos',
            component: Todos
        }
    ]
})
// 1. /home 2. todos 3. todos/:id
export default rouster