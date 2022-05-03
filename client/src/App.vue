<template>
	<div class="app" :class="`app--${currentRoute}`">
		<header class="app__header"></header>

		<main class="app__content">
			<router-view />
		</main>

		<footer class="app__footer">
			<ViewSwitcher :current-route="currentRoute" :routes="routes" />
		</footer>
	</div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import ViewSwitcher from '@/components/ViewSwitcher.vue';

export default {
	components: {
		ViewSwitcher,
	},
	setup() {
		const route = useRoute();
		const currentRoute = ref('');
		const routes = ['todo', 'timer', 'notes'];

		onMounted(() => {
			currentRoute.value = route.name;
		});

		watch(
			() => route.name,
			(newRoute) => {
				currentRoute.value = newRoute;
			}
		);

		return {
			currentRoute,
			routes,
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
	padding-top: 40px;

	&__footer {
		align-self: stretch;
	}

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
