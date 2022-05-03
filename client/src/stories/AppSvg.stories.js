import AppSvg from '@/components/AppSvg.vue';

export default {
	title: 'AppSvg',
	component: AppSvg,
};

const Template = (args) => ({
	components: { AppSvg },
	setup() {
		return { args };
	},
	template: '<AppSvg v-bind="args" />',
});

export const todo = Template.bind({});
todo.args = {
	iconName: 'todo',
};

export const timer = Template.bind({});
timer.args = {
	iconName: 'timer',
};

export const notes = Template.bind({});
notes.args = {
	iconName: 'notes',
};

export const apply = Template.bind({});
apply.args = {
	iconName: 'apply',
};

export const plus = Template.bind({});
plus.args = {
	iconName: 'plus',
};

export const optionsMenu = Template.bind({});
optionsMenu.args = {
	iconName: 'options-menu',
};

export const arrowBack = Template.bind({});
arrowBack.args = {
	iconName: 'arrow-back',
};

export const pin = Template.bind({});
pin.args = {
	iconName: 'pin',
};

export const restore = Template.bind({});
restore.args = {
	iconName: 'restore',
};

export const menu = Template.bind({});
menu.args = {
	iconName: 'menu',
};

export const cancel = Template.bind({});
cancel.args = {
	iconName: 'cancel',
};

export const toggleArrowThin = Template.bind({});
toggleArrowThin.args = {
	iconName: 'toggle-arrow-thin',
};

export const toggleArrowBold = Template.bind({});
toggleArrowBold.args = {
	iconName: 'toggle-arrow-bold',
};

export const trash = Template.bind({});
trash.args = {
	iconName: 'trash',
};

export const tomato = Template.bind({});
tomato.args = {
	iconName: 'tomato',
};

export const play = Template.bind({});
play.args = {
	iconName: 'play',
	width: 70,
	height: 70,
	viewBox: '0 0 80 80',
};

export const pause = Template.bind({});
pause.args = {
	iconName: 'pause',
	width: 70,
	height: 70,
	viewBox: '0 0 80 80',
};

export const laptop = Template.bind({});
laptop.args = {
	iconName: 'laptop',
};

export const cup = Template.bind({});
cup.args = {
	iconName: 'cup',
};

export const sofa = Template.bind({});
sofa.args = {
	iconName: 'sofa',
};

export const addImage = Template.bind({});
addImage.args = {
	iconName: 'add-image',
};

export const makeCopy = Template.bind({});
makeCopy.args = {
	iconName: 'make-copy',
};
