import { RouterProvider } from "react-router-dom";
import Footer from "./components/footer/footer";
import Navigation from "./components/navigation/navigation";
import router from "./router";
import React, { useEffect } from "react";
import './index.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { ContextProvider } from "./contexts/context";
import 'toastr/build/toastr.min.css';
function App({location}) {
  useEffect(() => {
    AOS.init({ once: true});
    AOS.refresh();
  }, []);

  return (
    
    <div className="flex flex-col bg-[#DCDCDC]">
      <ContextProvider>
     <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
    </ContextProvider>
    </div>
  );
}

export default App;
