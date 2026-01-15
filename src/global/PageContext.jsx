import { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export const PageProvider = ({ value, children }) => {
  return (
    <PageContext.Provider value={value}>
      {children}
    </PageContext.Provider>
  )
}

export const usePage = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('usePage must be used within a PageProvider');
  }
  return context;
}

// // 1. Create the context
// const PageStateContext = createContext(null);

// // 2. Create a provider component
// export const PageStateProvider = ({ children }) => {
//   const [page, setPage] = useState('home');

//   return (
//     <PageStateContext.Provider value={{ page, setPage }}>
//       {children}
//     </PageStateContext.Provider>
//   );
// };

// // 3. Create a custom hook to use the global state
// export const usePageState = () => useContext(PageStateProvider);