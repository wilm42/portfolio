import * as refs from './ref';

export const pageLoad = (view) => ({
  type: refs.PAGE_LOAD,
  view
});