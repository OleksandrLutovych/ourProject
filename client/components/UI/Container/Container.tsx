import React, { ReactNode } from 'react';
import style from './Container.module.scss'

type ContainerType = {
    children: ReactNode;
}

const Container = ( {children}: ContainerType) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    );
};

export default Container;