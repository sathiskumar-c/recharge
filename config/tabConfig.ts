export const tabConfig = {
  screens: [
    { name: "index", title: "Home", icon: "home" },
    { name: "recharge", title: "Recharge", icon: "calendar-today" },
    { name: "wallet", title: "Wallet", icon: "account-balance-wallet" },
    { name: "account", title: "Account", icon: "person" },
  ],
} as const;

export default tabConfig;
