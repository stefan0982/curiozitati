// export const onRouteUpdate = () => {
//   navigator.serviceWorker.register('/sw.js').then((reg) => {
//     reg.update();
//   });
// };

// export const onServiceWorkerUpdateReady = () => {
//   window.location.reload(true)
// };

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Această aplicație a fost actualizată ` +
    `Reâncarcă pentru a vedea schimbările`
  )

  if (answer === true) {
    window.location.reload()
  }
}

export const onServiceWorkerUpdateFound = () => {
  window.location.reload()
}

export const onClientEntry = () => window.location.reload()

export const onInitialClientRender = () => window.location.reload()