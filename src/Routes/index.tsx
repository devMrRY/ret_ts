import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import ProtectedRoute from './ProtectedRoute';
import NotFound from '../components/common/NotFound';
import Header from '../components/common/Header';
import Profile from '../pages/Profile';
import { useSelector } from 'react-redux';
import { IRootState } from '../redux/reducers';
import { checkAuth } from '../utils/helper';

const Routes = () => {
    const isAuth = useSelector(({auth}:IRootState) => auth.isAuth);

    return (
        <>
            {(isAuth || checkAuth()) && (<Header />)}
            <Switch>
                <Route exact path="/" component={SignIn} />
                <Route exact path="/register" component={Register} />
                <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                <ProtectedRoute exact path="/view/:userId" component={Profile} />
                <ProtectedRoute exact path="/edit/:userId" component={Profile} />
                <Route path="*" component={NotFound} />
            </Switch>
        </>
    )
}

export default Routes;
