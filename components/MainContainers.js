import A from "./A";
import {Head} from "next/document";

const MainContainers = ({children}) => {
  return (
    <>
      <div className="navbar">
        <A text="Main" href={"/"}/>
        <A text="Users" href={"/users"}/>
      </div>
      <div>
        {children}
      </div>
      <style jsx>
        {`
          .navbar{
            background: orange;
            padding: 15px; 
          }
         
        `}
      </style>
    </>
  );
};

export default MainContainers;