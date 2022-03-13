import React from "react"

import '@components/common/Container/Container.scss';

const classModifiers = function (options) {

    let classList = [];

    if (!options) return '';

    if (options.fullWidth && options.fullWidth === true) {
        classList.push('container--full-width');
    }

    if (options.noWrap && options.noWrap === true) {
        classList.push('container--no-wrap');
    }

    if (classList.length === 0) {
        return '';
    }

    return ' ' + classList.join(' ')

}


const Container = ({ children, options }) => {

    const modifiers = classModifiers(options);

    return (
        <div className={'container' + modifiers}>{children}</div>
    )

}

export default Container;