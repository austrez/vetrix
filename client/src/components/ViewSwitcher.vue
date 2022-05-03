<template>
	<div class="view-switcher" :class="`view-switcher--${props.currentRoute}`">
		<a
			v-for="route in props.routes"
			:key="route"
			href=""
			class="view-switcher__item"
			:class="{ 'view-switcher__item--selected': props.currentRoute === route }"
			@click.prevent="useSwitchRoute(router, `/${route}`)"
		>
			<AppSvg :icon-name="route" width="40" height="40" viewBox="0 0 40 40" />
		</a>
	</div>
</template>

<script>
import { useRouter } from 'vue-router';
import useSwitchRoute from '@/composables/switchRoute.js';

export default {
	props: {
		currentRoute: {
			type: String,
			default: '',
			required: true,
		},
		routes: {
			type: Array,
			default() {
				return [''];
			},
			required: true,
		},
	},
	setup(props) {
		const router = useRouter();

		return { props, useSwitchRoute, router };
	},
};
</script>

<style lang="scss" scoped>
@import '@/styles/styles.scss';

.view-switcher {
	display: flex;
	justify-content: center;
	align-items: center;

	padding: 10px 20px;
	background-color: $clr-todo-dark;

	&__item {
		display: flex;
		justify-content: center;

		height: 45px;
		width: 45px;
		padding-bottom: 3px;
		margin: 0 30px;

		color: $clr-primary-app;
	}

	&--todo {
		background-color: $clr-todo-dark;

		.view-switcher__item--selected {
			border-bottom: 2px solid $clr-todo;
		}
	}

	&--timer {
		background-color: $clr-timer-dark;

		.view-switcher__item--selected {
			border-bottom: 2px solid $clr-timer;
		}
	}

	&--notes {
		background-color: $clr-notes-dark;

		.view-switcher__item--selected {
			border-bottom: 2px solid $clr-notes;
		}
	}

	.base-svg--todo {
		color: $clr-todo;
	}

	.base-svg--timer {
		color: $clr-timer;
	}

	.base-svg--notes {
		color: $clr-notes;
	}
}
</style>
