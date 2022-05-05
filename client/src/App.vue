<template>
	<div class="app" :class="`app--${currentRoute}`">
		<header class="app__header">
			<button aria-label="Open settings button" @click="openSettings">
				<AppSvg icon-name="menu" />
			</button>
		</header>

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

		function openSettings() {
			console.log('open settings');
		}

		return {
			currentRoute,
			routes,
			openSettings,
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
	align-items: stretch;

	height: 100%;
	padding-top: 40px;

	&__header {
		display: flex;
		justify-content: space-between;

		padding: 0 $margin-base;
	}

	&__content {
		display: flex;
		justify-content: center;

		padding: 0 $margin-base;
	}

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
