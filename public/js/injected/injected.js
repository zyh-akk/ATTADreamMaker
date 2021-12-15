(function () {
  var myHeaders = new Headers();

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://api.twitter.com/1.1/account/verify_credentials.json?oauth_consumer_key=MkGh5S5rTmisQXMiagQt5Mxfs&oauth_token=1385945756394160128-cTYnKD97k39Ml6WzDNweIPgvR8ik7z&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1639557677&oauth_nonce=AUsTpVs2T6W&oauth_version=1.0&oauth_signature=SHY6DS2pnc%2FCCtUAkTL%2FmlD%2BQEc%3D",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      document.addEventListener("userInfoEvent", () => {
        let newEvent = new CustomEvent('userEventCallback', { detail: JSON.parse(result) });
        document.dispatchEvent(newEvent);
      })
    })
    .catch((error) => console.log("error", error));

})()
