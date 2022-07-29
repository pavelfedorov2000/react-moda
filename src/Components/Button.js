import classNames from 'classnames';
import React from 'react';

const Button = ({ onClick, className, outline, children, type, disabled }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            type={type || 'button'}
            className={classNames('button', className, {
                'button--outline': outline,
            })}>
            {children}
        </button>
    );
}

export default Button;