document.addEventListener("DOMContentLoaded", () => {

    const walletBtn = document.getElementById("walletBtn");

    walletBtn.addEventListener("click", async () => {

        if (!window.solana || !window.solana.isPhantom) {
            alert("Phantom not installed. Install from phantom.app");
            window.open("https://phantom.app/", "_blank");
            return;
        }

        try {
            const response = await window.solana.connect();
            const publicKey = response.publicKey.toString();

            localStorage.setItem("lustlogic_wallet", publicKey);

            window.location.href = "lustlogic-game.html";

        } catch (err) {
            console.error("Wallet error:", err);
            alert("Wallet connection failed.");
        }

    });

});
