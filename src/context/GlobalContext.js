import React from "react";

const GlobalContext = React.createContext({
    monthIndex: 2,
    setMonthIndex: (index) => {},
});

export default GlobalContext;