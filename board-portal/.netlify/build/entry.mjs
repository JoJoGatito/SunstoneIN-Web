import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_B1HJmB2r.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/login.astro.mjs');
const _page2 = () => import('./pages/portal/contacts/new.astro.mjs');
const _page3 = () => import('./pages/portal/contacts.astro.mjs');
const _page4 = () => import('./pages/portal/forum/new.astro.mjs');
const _page5 = () => import('./pages/portal/forum/_id_.astro.mjs');
const _page6 = () => import('./pages/portal/forum.astro.mjs');
const _page7 = () => import('./pages/portal.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/login.astro", _page1],
    ["src/pages/portal/contacts/new.astro", _page2],
    ["src/pages/portal/contacts/index.astro", _page3],
    ["src/pages/portal/forum/new.astro", _page4],
    ["src/pages/portal/forum/[id].astro", _page5],
    ["src/pages/portal/forum/index.astro", _page6],
    ["src/pages/portal/index.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "c02e98ab-fdcc-4b7f-b100-54dc394b692f"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
