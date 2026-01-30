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