import React, { createContext, useContext, useState } from 'react';

// only some sections are contest
const AccountContext = createContext();

export const useAccount = () => {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error('useAccount must be used within an AccountProvider');
  }
  return context;
};

export const AccountProvider = ({ children }) => {
  const [connectedAccounts, setConnectedAccounts] = useState({
    spotify: false,
    appleMusic: false
  });

  const connectAccount = (platform) => {
    setConnectedAccounts(prev => ({ ...prev, [platform]: true }));
  };

  const disconnectAccount = (platform) => {
    setConnectedAccounts(prev => ({ ...prev, [platform]: false }));
  };

  const hasAnyConnectedAccount = () => {
    return connectedAccounts.spotify || connectedAccounts.appleMusic;
  };

  return (
    <AccountContext.Provider value={{
      connectedAccounts,
      connectAccount,
      disconnectAccount,
      hasAnyConnectedAccount
    }}>
      {children}
    </AccountContext.Provider>
  );
};
