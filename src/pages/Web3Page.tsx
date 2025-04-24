import { userHasWallet } from "@civic/auth-web3";
import { useUser } from "@civic/auth-web3/react";
import { useAutoConnect } from "@civic/auth-web3/wagmi";
import { QRCodeSVG } from "qrcode.react";
import { useCallback, useEffect, useState } from "react";

type CryptoType = "solana" | "ethereum";

function Web3Page() {
  const userContext = useUser();
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoType>("solana");
  const [amount, setAmount] = useState<string>("");
  const [currentAddress, setCurrentAddress] = useState<string>("");

  const handleCryptoChange = (crypto: CryptoType) => {
    setSelectedCrypto(crypto);
  };
  useEffect(() => {
    console.log("userContext updated", userContext);
  }, [userContext]);
  const getReceiveAddress = useCallback(async () => {
    if (!userHasWallet(userContext)) return "";

    if (userContext.user && !userHasWallet(userContext)) {
      await userContext.createWallet();
    } else {
      // Return the appropriate address based on selected crypto
      if (selectedCrypto === "solana") {
        return userContext.solana.address || "";
      } else {
        return userContext.ethereum.address || "";
      }
    }
  }, [selectedCrypto, userContext]);
  useAutoConnect();
  const [qrValue, setQRValue] = useState<string>("");
  useEffect(() => {
    if (selectedCrypto === "solana") {
      setQRValue(
        `solana:${currentAddress}${amount ? `?amount=${amount}` : ""}`
      );
    } else {
      setQRValue(
        `ethereum:${currentAddress}${amount ? `?value=${amount}` : ""}`
      );
    }
  }, [amount, currentAddress, selectedCrypto]);

  useEffect(() => {
    getReceiveAddress().then((address) => {
      console.log("Received address:", address);
      if (address) {
        setCurrentAddress(address);
      } else {
        setCurrentAddress("");
      }
    });
  }, [getReceiveAddress, userContext]);
  return (
    <div className="web3-container">
      <h2>Crypto Tip Jar</h2>

      <div className="crypto-selector">
        <button
          className={selectedCrypto === "solana" ? "active" : ""}
          onClick={() => handleCryptoChange("solana")}
        >
          Solana
        </button>
        <button
          className={selectedCrypto === "ethereum" ? "active" : ""}
          onClick={() => handleCryptoChange("ethereum")}
        >
          Ethereum
        </button>
      </div>

      {!userContext.user &&
        (userContext.isLoading ? (
          <p>Creating wallet or finding existing crypto addresses...</p>
        ) : (
          <div className="no-user">
            <p>Sign in to get your tipjar address</p>
          </div>
        ))}
      {userContext.user && userContext.isLoading ? (
        <div className="connect-wallet">
          <p>Creating wallet or finding existing crypto addresses...</p>
        </div>
      ) : (
        userContext.user && (
          <div className="tip-jar">
            <div className="amount-input">
              <label htmlFor="tipAmount">
                Optional Tip Amount (
                {selectedCrypto === "solana" ? "SOL" : "ETH"})
              </label>
              <input
                id="tipAmount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
              />
            </div>

            <div className="qr-code-container">
              <h3>
                Scan to Send {selectedCrypto === "solana" ? "SOL" : "ETH"}
              </h3>
              {currentAddress ? (
                <>
                  <QRCodeSVG value={qrValue} size={256} />
                  <p className="address">Address: {currentAddress}</p>
                </>
              ) : (
                <p>No wallet address available for {selectedCrypto}</p>
              )}
            </div>

            <button onClick={userContext.signOut} className="disconnect-button">
              Disconnect Wallet
            </button>
          </div>
        )
      )}
    </div>
  );
}

export default Web3Page;
