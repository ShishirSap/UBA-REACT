import { useState } from "react";

const usePasswordToggle=()=>{
    const [visibility,setVisibility]=useState<{[key:string]:boolean}>({})

    const toggleVisibility=(field:string)=>{
        setVisibility((prevstate)=>({
            ...prevstate,
            [field]:!prevstate[field],
        }))
    }
    const isFieldVisible=(field:string)=>visibility[field]||false;

return {isFieldVisible,toggleVisibility}

}
export default usePasswordToggle;