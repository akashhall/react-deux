import React from 'react'
import { Link } from 'react-router-dom';

const SLink = (props) => {
    const { className, value, id, href ,onChange, placeholder } = props;
    return (
        <React.Fragment>
            <Link to={{ pathname: href, state: id }} >
                <span className={className}>{value}</span>
            </Link>
        </React.Fragment>
    )
}

export default SLink;