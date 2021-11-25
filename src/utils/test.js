(function (){
  // const self = this
  const timer = setInterval(() => {
    if (document.readyState === 'complete') {
      console.log('dom over')
      window.clearInterval(timer)
    }
  }, 500)
})()
