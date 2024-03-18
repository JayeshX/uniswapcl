// import { Goerli } from "@usedapp/core";

// export const ROUTER_ADDRESS = "0x756D6E08Be7C15f6045e87CeA0D9d03bfba87592";

// export const DAPP_CONFIG = {
//   readOnlyChainId: Goerli.chainId,
//   readOnlyUrls: {
//     [Goerli.chainId]:
//       "https://eth-goerli.g.alchemy.com/v2/PuHnBqS1NQeEd-GDk37LpGNN3YxnthQv",
//   },
// };

import { Sepolia } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x361280f97263cbebd0874596ec64d49898177aeec3b4f9116f8f4e5b4ee7fab"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Sepolia.chainId,
  readOnlyUrls: {
    [Sepolia.chainId]: "https://eth-sepolia.g.alchemy.com/v2/-VMN3vAg4pjN8X3kuYJJczE6BNMq7CdG",
     
  },
};