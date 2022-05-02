<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="base-svg"
		:class="className"
		:aria-labelledby="`${iconName} icon`"
		:fill="iconColor"
		:viewBox="viewBox"
		:width="width"
		:height="height"
	>
		<use :href="iconPath"></use>
	</svg>
</template>

<script>
import { computed } from 'vue';
import spritePath from '@/assets/svg/sprite.svg';

export default {
	props: {
		iconName: {
			type: String,
			default: '',
			reqired: true,
		},
		className: {
			type: String,
			default: '',
			reqired: false,
		},
		width: {
			type: [Number, String],
			default: 40,
			reqired: false,
		},
		height: {
			type: [Number, String],
			default: 40,
			reqired: false,
		},
		viewBox: {
			type: String,
			default: '0 0 40 40',
			reqired: false,
		},
		iconColor: {
			type: String,
			default: 'currentColor',
			reqired: false,
		},
	},
	setup(props) {
		const iconPath = computed(() => `${spritePath}#${props.iconName}`);

		return {
			iconPath,
		};
	},
};
</script>

<style lang="scss" scoped>
.base-svg {
}
</style>
