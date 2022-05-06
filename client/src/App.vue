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
			<ViewSwitcher
				:current-route="currentRoute"
				:routes="routes"
				@switch-route="switchRoute"
			/>

			<BaseAddItemBtn v-if="isAddItemBtn" class="app__add-item-btn" />
		</footer>
	</div>
</template>

<script>
import { ref, watch, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

import useSwitchRoute from '@/composables/switchRoute.js';

import ViewSwitcher from '@/components/ViewSwitcher.vue';
import BaseAddItemBtn from '@/components/BaseAddItemBtn.vue';

export default {
	components: {
		ViewSwitcher,
		BaseAddItemBtn,
	},
	setup() {
		const route = useRoute();
		const router = useRouter();

		const currentRoute = ref('');
		const routes = ['todo', 'timer', 'notes'];

		const isAddItemBtn = computed(() => {
			return currentRoute.value === 'todo' || currentRoute.value === 'notes';
		});

		onMounted(() => {
			currentRoute.value = route.name;
		});

		watch(
			() => route.name,
			(newRoute) => {
				currentRoute.value = newRoute;
			}
		);

		function switchRoute(route) {
			useSwitchRoute(router, `/${route}`);
		}

		function openSettings() {
			console.log('open settings');
		}

		return {
			currentRoute,
			routes,
			isAddItemBtn,
			switchRoute,
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
		position: relative;
	}

	&__add-item-btn {
		position: absolute;
		left: 50%;
		top: -130%;

		transform: translateX(-50%);
	}

	&--todo {
		@include todoBackground;

		.add-item-btn {
			background-color: $clr-todo;
		}
	}

	&--timer {
		@include timerBackground;
	}

	&--notes {
		@include notesBackground;

		.add-item-btn {
			background-color: $clr-notes;
		}
	}

	&--login {
		@include loginBackground;
	}
}
</style>
