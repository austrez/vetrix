import { createRouter, createWebHistory } from 'vue-router';

import TodoView from '@/views/TodoView.vue';
import TimerView from '@/views/TimerView.vue';
import NotesView from '@/views/NotesView.vue';
import LoginView from '@/views/LoginView.vue';

const routes = [
	{
		path: '/',
		redirect: '/todo',
	},
	{
		path: '/todo',
		component: TodoView,
	},
	{
		path: '/timer',
		component: TimerView,
	},
	{
		path: '/notes',
		component: NotesView,
	},
	{
		path: '/login',
		component: LoginView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
