(function(){
    let branch_session = sessionStorage.getItem("branch_session");
    branch_session = JSON.parse(branch_session);

    document.addEventListener("userInfoEvent", () => {
      let newEvent = new CustomEvent('userEventCallback', { detail:branch_session});
      document.dispatchEvent(newEvent);
    });
})()
