import { app } from '@storybook/vue3';
import AppSvg from '@/components/AppSvg.vue';
import '@/stories/styles/styles.scss';

app.component('AppSvg', AppSvg);

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
