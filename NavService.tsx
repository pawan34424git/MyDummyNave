import { NavigationActions, StackActions } from "react-navigation";
const config = {};
function setNavigator(nav) {
  if (nav) {
    config.navigator = nav;
  }
}
function getNavigation() {
  return config.navigator._navigation;
}

function navigate(routeName, params) {
  if (config.navigator && routeName) {
    let action = NavigationActions.navigate({ routeName, params });
    config.navigator.dispatch(action);
  }
}
function push(routeName, params) {
  if (config.navigator && routeName) {
    let action = StackActions.push({ routeName, params });
    config.navigator.dispatch(action);
  }
}
function pop() {
  if (config.navigator) {
    let action = StackActions.pop();
    config.navigator.dispatch(action);
  }
}

function goBack() {
  if (config.navigator) {
    let action = NavigationActions.back({});
    config.navigator.dispatch(action);
  }
}
function navigateReset(routeName, params) {
  if (config.navigator && routeName) {
    config.navigator.dispatch(
      StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName,
            params,
          }),
        ],
      })
    );
  }
}

function openDrawer() {
  const { _navigation } = config.navigator;
  if (_navigation) {
    _navigation.openDrawer();
  }
}

function closeDrawer() {
  const { _navigation } = config.navigator;
  if (_navigation) {
    _navigation.closeDrawer();
  }
}

export default {
  setNavigator,
  navigate,
  goBack,
  navigateReset,
  openDrawer,
  getNavigation,
  push,
  closeDrawer,
  pop,
};
