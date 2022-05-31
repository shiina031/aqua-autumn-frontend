import { Ctop } from '../components/pages/customer/Ctop';
import { Interested } from '../components/pages/customer/Interested';
import { Profile } from '../components/pages/customer/Profile';
import { Reserve } from '../components/pages/customer/Reserve';
import { routeType } from './routeTypes';

export const CustomerRoutes: routeType[] = [
  {
    path: '/',
    exact: true,
    children: <Ctop />,
  },
  {
    path: '/profile',
    exact: false,
    children: <Profile />,
  },
  {
    path: '/reserve',
    exact: false,
    children: <Reserve />,
  },
  {
    path: '/interested',
    exact: false,
    children: <Interested />,
  },
];
