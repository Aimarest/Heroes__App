import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { MarvelPage, DcPage } from '../heroes';
import { Navbar } from '../ui';


export const AppRouter = () => {
  return (
  <>
  <Navbar/>
     <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="/*" element={<Navigate to={<LoginPage/>} />} />
      </Routes>
  </>
  )
}
