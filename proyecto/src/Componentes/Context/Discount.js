import { createContext, useState } from "react";


export const DiscountContext = createContext();

export const useInitialDiscountContext = () => {
    const [state, setState] = useState({
        discount: ["5%", "10%", "15%", "20%"]});

    return { state, setState };
};
