import React from "react";
interface PasswordInputProps{
    name:string;
    value:string;
    onChange:React.ChangeEventHandler<HTMLInputElement>;
    placeholder:string;
    isVisible:boolean;
    onToggleVisibility:()=>void;
    className:string;
}

const PasswordInput:React.FC<PasswordInputProps>=({
    name,value,onChange,className,placeholder,isVisible,onToggleVisibility,})=>{

        return (
            <div>
                <input type={isVisible?'text':'password'}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={className}
                
                />

            <div>
                <input type='checkbox' id='checkbox' onClick={onToggleVisibility}/>
                
                <label className="font-normal inline text-1rem text-[#372d2d]" htmlFor="checkbox">Show</label>
                </div>
            </div>
        )
    }
export default PasswordInput