const solanaWeb3 = require('@solana/web3.js')

const connection = new solanaWeb3.Connection("https://rpc.helius.xyz/?api-key=d63a869e-bb73-4792-ae33-a06f4c72f226");

(async () => {
  while(true) {
    console.log("ok")
  console.log(await connection.getLatestBlockhash('finalized'))
    
  }
  
})();