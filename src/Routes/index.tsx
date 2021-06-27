import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import ProtectedRoute from './ProtectedRoute';
import NotFound from '../components/common/NotFound';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/register" component={Register} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            <ProtectedRoute exact path="/view/:userId" component={Dashboard} />
            <Route path="*" component={NotFound} />
        </Switch>
    )
}

export default Routes;
