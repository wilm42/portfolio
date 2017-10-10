import * as refs from "./ref";

export const pageLoad = view => ({
	type: refs.PAGE_LOAD,
	view,
});

export const siteWilm = () => ({
	type: refs.SITE_WILM,
});
