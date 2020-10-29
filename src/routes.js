import { Favorites, Home, Profile } from './views';
import { paths } from './constants';

export default [
  {
    path: paths.client.HOME,
    component: Home,
    exact: true,
  },
  {
    path: paths.client.FAVORITES,
    component: Favorites,
    exact: true,
  },
  {
    paths: paths.client.PROFILE_ID,
    component: Profile,
    exact: true,
  },
];
