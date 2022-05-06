<template>
	<button
		class="add-item-btn"
		aria-label="Add new item button"
		@click="$emit('add-item')"
	>
		<slot>
			<AppSvg
				icon-name="plus"
				width="35"
				height="35"
				viewBox="-0.5 -0.5 25 25"
			/>
		</slot>
	</button>
</template>

<script>
export default {
	emits: {
		'add-item': null,
	},
	setup() {},
};
</script>

<style lang="scss" scoped>
@import '@/styles/styles.scss';

.add-item-btn {
	display: flex;
	justify-content: center;
	align-items: center;

	width: 65px;
	height: 65px;
	border-radius: 50%;
}
</style>
