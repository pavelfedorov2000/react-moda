import classNames from 'classnames';
import React from 'react';
import Phone from './Phone';

function Call({ className }) {
    return (
        <div className={classNames('call', className)}>
            <Phone className="call__link" icon />
            <span className="call__descr">Звонок бесплатный</span>
        </div>
    );
}

export default Call;