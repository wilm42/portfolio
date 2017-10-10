import * as refs from "./actions/ref";
import * as site from "./site";

const initialState = {
	view: "home",
	site: {
		nameCap: "William",
		nameLowr: "william",
		email: "hi@william.direct",
		bioBlurb: null,
	},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case refs.SITE_WILM:
			return { ...state, site: site.wilm };
		case refs.PAGE_LOAD:
			return { ...state, view: action.view };
		default:
			return state;
	}
};
