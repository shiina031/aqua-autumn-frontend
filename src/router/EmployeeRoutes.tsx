import { Etop } from '../components/pages/employee/Etop';
import { Event } from '../components/pages/employee/Event';
import { User } from '../components/pages/employee/User';
import { routeType } from './routeTypes';

export const EmployeeRoutes: routeType[] = [
  {
    path: '/',
    exact: true,
    children: <Etop />,
  },
  {
    path: '/user',
    exact: false,
    children: <User />,
  },
  {
    path: '/event',
    exact: false,
    children: <Event />,
  },
];
