import React from "react";

import styles from './profile.module.css'
import PropTypes from "prop-types";

const ProfileNavListItem = ({title, isActive}) => {
    let style = `${styles.navItem} text text_type_main-medium`;
    if (!isActive) {
        style = `${style} text_color_inactive`
    }
    return <h3 className={style}>{title}</h3>
}

export default ProfileNavListItem;

ProfileNavListItem.propTypes = {
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired
}