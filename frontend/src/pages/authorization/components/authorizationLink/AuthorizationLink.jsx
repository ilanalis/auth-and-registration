import styles from './style.module.css';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const AuthorizationLink = ({title,hrefValue}) => {
    return (
        <li className={styles.linkContainer}>
            <Link className={styles.link} to={hrefValue}>
                {title}
            </Link>
        </li>
    );
};

AuthorizationLink.propTypes = {
    title: PropTypes.string,
    hrefValue: PropTypes.string,
}

export default AuthorizationLink;