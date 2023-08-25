import React, { useState } from 'react';

const Header = () => {
    const [arim, setArim] = useState(true);
    const disappear =() =>{
        setArim(false)
    }
    return (
        <div className='text-center flex-auto'>
            <h1 className='text-center font-bold text-4xl my-4'>Ai universe</h1>
            {arim &&
                <div className="avatar">
                    <div className="w-24 rounded-3xl">
                        <img src="https://lh3.googleusercontent.com/ogw/AGvuzYZZ0tq6d-N5gk4GkfdVTfCg0Fh9M4B_iE4rX46-jQ=s32-c-mo" />
                    </div>
                    <button onClick={disappear} className='btn mx-3 mt-5'>Snap</button>
                </div>

            }
        </div>
    );
};

export default Header;