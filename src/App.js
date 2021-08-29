import { Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';
import PrivateRoute from 'components/PrivateRoute';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import PublicRoute from 'components/PublicRoute';
import { getFetchingCurrent } from 'redux/auth/auth-selectors';
const HomeView = lazy(() => import('views/HomeView'));
const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getFetchingCurrent);
  useEffect(() => dispatch(fetchCurrentUser()), [dispatch]);
  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h2>Loading</h2>
      ) : (
        <>
          <AppBar />
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>
              <PublicRoute path="/register" restricted>
                <RegisterView />
              </PublicRoute>
              <PublicRoute path="/login" redirectTo="/contacts" restricted>
                <LoginView />
              </PublicRoute>
              <PrivateRoute exact path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
              <Redirect to="/" />
            </Switch>
          </Suspense>

          <ToastContainer position="bottom-left" autoClose={3000} />
        </>
      )}
    </Container>
  );
}
