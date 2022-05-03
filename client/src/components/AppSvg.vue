<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:class="`base-svg base-svg--${iconName}`"
		:aria-labelledby="`${iconName} icon`"
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
	fill: currentColor;
}
</style>
