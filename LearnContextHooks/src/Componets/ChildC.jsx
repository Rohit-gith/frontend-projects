import React, { useContext } from "react";
//import { userContext } from "../App";
import { ThemeContext } from "../App";
import { use } from "react";


function ChildC() {
  //const user = useContext(userContext);
 const {theme,setTheme}= useContext(ThemeContext);
 function handClick(){
    if(theme=='light')
        setTheme('dark')
    else
        setTheme('light')
 }
  return (
    <div>
    <button
    onClick={handClick}
    >Change Theme</button>
    </div>
  );
}

export default ChildC;