<template>
	<div class="app" :class="`app--${path}`">
		<header class="app__header"></header>

		<div class="app__content">
			<router-view />
		</div>

		<footer class="app__footer"></footer>
	</div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
	components: {},
	setup() {
		const route = useRoute();
		const path = ref('');

		onMounted(() => {
			path.value = route.path.slice(1);
		});

		watch(
			() => route.path,
			(newPath) => {
				path.value = newPath.slice(1);
			}
		);

		return {
			path,
		};
	},
};
</script>

<style lang="scss">
@import '@/styles/styles.scss';

.app {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	height: 100%;
	padding: 40px 20px 0;

	&--todo {
		@include todoBackground;
	}

	&--timer {
		@include timerBackground;
	}

	&--notes {
		@include notesBackground;
	}

	&--login {
		@include loginBackground;
	}
}
</style>
