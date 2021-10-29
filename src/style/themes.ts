import { DefaultTheme } from 'styled-components';
import designTokens from '../design-tokens/build/ts';


declare module 'styled-components' {
	export interface DefaultTheme {
		foreground: {
			primary: string,
			secondary: string,
			subtle: string,
			accent: string,
			disabled: string,
			focus: string,
		};
		background: {
			primary: string,
			secondary: string,
			subtle: string,
			accent: string,
			disabled: string,
			focus: string,
		};
		action: {
			idle: string,
			hover: string,
			pressed: string,
			active: string,
			activeHover: string,
			activePressed: string,
			loading: string,
			disabled: string,
			focus: string,
		};
	}
}

const { color } = designTokens;

export const themeLightMode: DefaultTheme = {
	foreground: {
		primary: color.neutral.s900.value,
		secondary: color.neutral.s700.value,
		subtle: color.neutral.s500.value,
		accent: color.primary.s300.value,
		disabled: color.neutral.s300.value,
		focus: color.primary.s200.value,
	},
	background: {
		primary: color.neutral.s0.value,
		secondary: color.neutral.s100.value,
		subtle: color.neutral.s50.value,
		accent: color.primary.s300.value,
		disabled: color.neutral.s400.value,
		focus: color.primary.s500.value,
	},
	action: {
		idle: color.primary.s300.value,
		hover: color.primary.s200.value,
		pressed: color.primary.s100.value,
		active: color.primary.s100.value,
		activeHover: color.primary.s50.value,
		activePressed: color.primary.s0.value,
		loading: color.primary.s400.value,
		disabled: color.primary.s600.value,
		focus: color.primary.s200.value,
	},
};

export const themeDarkMode: DefaultTheme = {
	foreground: {
		primary: color.neutral.s0.value,
		secondary: color.neutral.s100.value,
		subtle: color.neutral.s400.value,
		accent: color.primary.s300.value,
		disabled: color.neutral.s600.value,
		focus: color.primary.s200.value,
	},
	background: {
		primary: color.neutral.s900.value,
		secondary: color.neutral.s700.value,
		subtle: color.neutral.s800.value,
		accent: color.primary.s300.value,
		disabled: color.neutral.s600.value,
		focus: color.primary.s500.value,
	},
	action: {
		idle: color.primary.s300.value,
		hover: color.primary.s200.value,
		pressed: color.primary.s100.value,
		active: color.primary.s100.value,
		activeHover: color.primary.s50.value,
		activePressed: color.primary.s0.value,
		loading: color.primary.s400.value,
		disabled: color.primary.s600.value,
		focus: color.primary.s200.value,
	},
};
