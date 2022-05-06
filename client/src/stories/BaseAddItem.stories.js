import BaseAddItemBtn from '@/components/BaseAddItemBtn.vue';

export default {
	title: 'BaseAddItemBtn',
	component: BaseAddItemBtn,
};

const Template = (args) => ({
	components: { BaseAddItemBtn },
	setup() {
		return { args };
	},
	template: '<BaseAddItemBtn v-bind="args" />',
});

export const Todo = Template.bind({});
Todo.args = {
	class: 'add-item-btn--todo',
};

export const Notes = Template.bind({});
Notes.args = {
	class: 'add-item-btn--notes',
};
