import React from 'react';

const Title = ({children}) => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-fuchsia-700 '>{children}</h2>
        </div>
    );
};

export default Title;