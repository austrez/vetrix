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
		name: 'todo',
	},
	{
		path: '/timer',
		component: TimerView,
		name: 'timer',
	},
	{
		path: '/notes',
		component: NotesView,
		name: 'notes',
	},
	{
		path: '/login',
		component: LoginView,
		name: 'login',
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
