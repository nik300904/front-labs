import { PAGINTAION_ROUTE, ANOTHER_ROUTE, NEW_ROUTE } from './config';
import { useRoutes } from 'react-router-dom';
import Pagination from '../../pages/pagination';
import AnotherPage from '../../pages/another_page';
import NewPage from '../../pages/new_page';

const MainRouter = () => {
    return useRoutes([
          { path: PAGINTAION_ROUTE, element: <Pagination />,},
          { path: ANOTHER_ROUTE, element: <AnotherPage /> },
          { path: NEW_ROUTE, element: <NewPage /> },
        ]);
  }

export default MainRouter;