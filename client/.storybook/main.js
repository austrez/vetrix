const path = require('path');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	framework: '@storybook/vue3',
	core: {
		builder: '@storybook/builder-vite',
	},
	async viteFinal(config, { configType }) {
		config.resolve.alias['@'] = path.resolve(__dirname, '../src');
		return config;
	},
};
