import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
        <div>
            <button className="w-full  px-6 font-semibold py-2.5 text-sm text-white uppercase  bg-fuchsia-700 rounded-md lg:w-auto hover:bg-stone-600 btn focus:outline-none focus:bg-purple-500">{children}</button>
        </div>
    );
};

export default PrimaryBtn;