import * as refs from "./actions/ref";
import site from "./site";

const initialState = {
	view: "home",
};

export default (state = initialState, action) => {
	switch (action.type) {
		case refs.SITE_WILM:
			return { ...state, site: site.wilm };
		case refs.SITE_WILLIAM:
			return { ...state, site: site.william };
		case refs.PAGE_LOAD:
			return { ...state, view: action.view };
		default:
			return state;
	}
};
