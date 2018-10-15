import React from 'react';

const comApresentaNadaSeListaVazia = (Component) => {
    return (props = {}) => {
        const { lista,...rest } = props;
        if (lista.length <= 0)
            return null;
        return (
            <Component
                {...rest}
            />
        );
    }
}


export default comApresentaNadaSeListaVazia