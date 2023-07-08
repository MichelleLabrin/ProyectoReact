import { createContext, useState } from 'react';

export const DiscountContext = createContext([]);

export const DiscountProvider = ({ children }) => {
  const [discountState] = useState(['5%', '10%', '15%', '20%']);

  return (
    <DiscountContext.Provider value={discountState}>
      {children}
    </DiscountContext.Provider>
  );
};

export default DiscountProvider;


