import React, {createContext, useState} from 'react'

interface ProductContextType {
    isHomePage: boolean;
    setIsHomePage: (isHomepage: boolean) => void;
}
export const ProductContext = createContext<ProductContextType>({
  isHomePage: true,
  setIsHomePage: ()=>{},
})

const ProductProvider : React.FC<{children: any}> = ({children}) => {
  const [isHomePage, setIsHomePage] = useState<boolean>(true);
  return (
    <ProductContext.Provider value={{isHomePage, setIsHomePage}}>
      {children}
      
    </ProductContext.Provider>
  )
}

export default ProductProvider
