import { Navigate } from 'react-router-dom';

const ProtectAdmin = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('cashier'));

    if (!user) {
        return <Navigate to="/signin" />;
    }

    if (user.role == 'admin') {
        return <h1>Ydfasdf</h1>;
    }

    return children;
};

export default ProtectAdmin;
