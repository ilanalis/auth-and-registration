import styles from './style.module.css';
import cn from 'classnames';
import AuthorizationLink from "./components/authorizationLink/AuthorizationLink.jsx";
import {Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";

const AuthorizationLayout = () => {
    return (
        <>
            <div className={cn('container', styles.authorizationContainer)}>
                <nav className={styles.navContainer}>
                    <ul className={styles.nav}>
                        <AuthorizationLink title={'Login'} hrefValue="/login" />
                        <AuthorizationLink title={'Sign-up'} hrefValue="/signup" />
                    </ul>
                </nav>
                <Outlet />
            </div>
            <ToastContainer position="bottom-right"/>
        </>
    );
};

export default AuthorizationLayout;