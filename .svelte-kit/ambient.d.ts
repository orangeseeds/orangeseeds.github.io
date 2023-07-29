
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const WINDOWID: string;
	export const COLORTERM: string;
	export const XDG_SESSION_PATH: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const I3SOCK: string;
	export const NODE: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const LC_ADDRESS: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_scripts_check_watch: string;
	export const LC_NAME: string;
	export const npm_package_private: string;
	export const npm_package_dependencies_daisyui: string;
	export const DESKTOP_SESSION: string;
	export const LC_MONETARY: string;
	export const npm_package_dependencies_gsap: string;
	export const npm_package_devDependencies__types_three: string;
	export const EDITOR: string;
	export const GTK_MODULES: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const npm_package_devDependencies_vite: string;
	export const XDG_SESSION_DESKTOP: string;
	export const LOGNAME: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const PNPM_HOME: string;
	export const npm_package_devDependencies__types_gsap: string;
	export const npm_package_scripts_build: string;
	export const OMF_PATH: string;
	export const XAUTHORITY: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const TERMINAL: string;
	export const MOTD_SHOWN: string;
	export const HOME: string;
	export const AUTOJUMP_ERROR_PATH: string;
	export const LANG: string;
	export const LC_PAPER: string;
	export const npm_package_scripts_gh_pages: string;
	export const npm_package_devDependencies_typescript: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_version: string;
	export const STARSHIP_SHELL: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const npm_package_dependencies_three: string;
	export const OSTYPE: string;
	export const XDG_SEAT_PATH: string;
	export const npm_package_devDependencies_rollup_plugin_node_polyfills: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const INIT_CWD: string;
	export const STARSHIP_SESSION_KEY: string;
	export const npm_package_scripts_format: string;
	export const npm_package_scripts_preview: string;
	export const ALACRITTY_SOCKET: string;
	export const npm_lifecycle_script: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const XDG_SESSION_CLASS: string;
	export const LC_IDENTIFICATION: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const npm_package_devDependencies__esbuild_plugins_node_globals_polyfill: string;
	export const npm_package_type: string;
	export const USER: string;
	export const AUTOJUMP_SOURCED: string;
	export const DISPLAY: string;
	export const npm_package_devDependencies_mdsvex: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const npm_package_devDependencies_eslint: string;
	export const LC_TELEPHONE: string;
	export const npm_package_devDependencies_gh_pages: string;
	export const LC_MEASUREMENT: string;
	export const XDG_VTNR: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_user_agent: string;
	export const npm_package_scripts_lint: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies__esbuild_plugins_node_modules_polyfill: string;
	export const npm_package_devDependencies_svelte: string;
	export const XDG_RUNTIME_DIR: string;
	export const NODE_PATH: string;
	export const DEBUGINFOD_URLS: string;
	export const LC_TIME: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_devDependencies__tailwindcss_typography: string;
	export const GTK3_MODULES: string;
	export const XDG_DATA_DIRS: string;
	export const npm_package_scripts_check: string;
	export const BROWSER: string;
	export const PATH: string;
	export const ALACRITTY_LOG: string;
	export const GDMSESSION: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_package_dependencies_lil_gui: string;
	export const MAIL: string;
	export const npm_config_registry: string;
	export const ALACRITTY_WINDOW_ID: string;
	export const OMF_CONFIG: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_node_execpath: string;
	export const LC_NUMERIC: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		WINDOWID: string;
		COLORTERM: string;
		XDG_SESSION_PATH: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		I3SOCK: string;
		NODE: string;
		npm_package_devDependencies_tslib: string;
		npm_package_devDependencies_autoprefixer: string;
		LC_ADDRESS: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_scripts_check_watch: string;
		LC_NAME: string;
		npm_package_private: string;
		npm_package_dependencies_daisyui: string;
		DESKTOP_SESSION: string;
		LC_MONETARY: string;
		npm_package_dependencies_gsap: string;
		npm_package_devDependencies__types_three: string;
		EDITOR: string;
		GTK_MODULES: string;
		XDG_SEAT: string;
		PWD: string;
		npm_package_devDependencies_vite: string;
		XDG_SESSION_DESKTOP: string;
		LOGNAME: string;
		XDG_SESSION_TYPE: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		PNPM_HOME: string;
		npm_package_devDependencies__types_gsap: string;
		npm_package_scripts_build: string;
		OMF_PATH: string;
		XAUTHORITY: string;
		npm_package_devDependencies_prettier: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		XDG_GREETER_DATA_DIR: string;
		TERMINAL: string;
		MOTD_SHOWN: string;
		HOME: string;
		AUTOJUMP_ERROR_PATH: string;
		LANG: string;
		LC_PAPER: string;
		npm_package_scripts_gh_pages: string;
		npm_package_devDependencies_typescript: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_version: string;
		STARSHIP_SHELL: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		npm_package_dependencies_three: string;
		OSTYPE: string;
		XDG_SEAT_PATH: string;
		npm_package_devDependencies_rollup_plugin_node_polyfills: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		INIT_CWD: string;
		STARSHIP_SESSION_KEY: string;
		npm_package_scripts_format: string;
		npm_package_scripts_preview: string;
		ALACRITTY_SOCKET: string;
		npm_lifecycle_script: string;
		npm_package_devDependencies_svelte_check: string;
		XDG_SESSION_CLASS: string;
		LC_IDENTIFICATION: string;
		TERM: string;
		npm_package_name: string;
		npm_package_devDependencies__esbuild_plugins_node_globals_polyfill: string;
		npm_package_type: string;
		USER: string;
		AUTOJUMP_SOURCED: string;
		DISPLAY: string;
		npm_package_devDependencies_mdsvex: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		npm_package_devDependencies_eslint: string;
		LC_TELEPHONE: string;
		npm_package_devDependencies_gh_pages: string;
		LC_MEASUREMENT: string;
		XDG_VTNR: string;
		XDG_SESSION_ID: string;
		npm_config_user_agent: string;
		npm_package_scripts_lint: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_execpath: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies__esbuild_plugins_node_modules_polyfill: string;
		npm_package_devDependencies_svelte: string;
		XDG_RUNTIME_DIR: string;
		NODE_PATH: string;
		DEBUGINFOD_URLS: string;
		LC_TIME: string;
		npm_package_scripts_dev: string;
		npm_package_devDependencies__tailwindcss_typography: string;
		GTK3_MODULES: string;
		XDG_DATA_DIRS: string;
		npm_package_scripts_check: string;
		BROWSER: string;
		PATH: string;
		ALACRITTY_LOG: string;
		GDMSESSION: string;
		npm_package_devDependencies__sveltejs_kit: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_package_dependencies_lil_gui: string;
		MAIL: string;
		npm_config_registry: string;
		ALACRITTY_WINDOW_ID: string;
		OMF_CONFIG: string;
		npm_package_devDependencies_postcss: string;
		npm_node_execpath: string;
		LC_NUMERIC: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
