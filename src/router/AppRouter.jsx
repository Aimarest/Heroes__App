import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { MarvelPage } from '../heroes/pages/MarvelPage';
import { DcPage } from '../heroes/pages/DcPage';

export const AppRouter = () => {
  return (
  <>
     <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="/*" element={<Navigate to={<LoginPage/>} />} />
      </Routes>
  </>
  )
}
