import React, {ChangeEvent} from 'react';

import './CustomInput.scss'

interface InputProps {
    label: string;
    name: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    defaultValue?: string;
    type?: string;
    required?: boolean;
}

const Input: React.FC<InputProps> = ({type = 'text', label, ...props}) => {
    return (
        <div className='wrapper-input'>
            <label>{label}</label>
            <input
                type={type}
                {...props}
            />
        </div>
    );
};

export default Input;