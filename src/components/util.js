import { selectedPdts, setPdts } from "../redux/actions/menuActions";

export const dispatchUpdater = (menuItems, dispatch) => {
  dispatch(setPdts(menuItems));
  let sltData = menuItems.filter((ele) => ele.count > 0 );
  dispatch(selectedPdts(sltData));
};
