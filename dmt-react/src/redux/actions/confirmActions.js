import { SHOW_CONFIRM, HIDE_CONFIRM } from '../constants/action-types';

export const showConfirm = (id, isAskedAboutConfirm) => {
  return {
    type: SHOW_CONFIRM,
    id,
    isAskedAboutConfirm,
  };
};

export const hideConfirm = () => {
  return {
    type: HIDE_CONFIRM,
  };
};
