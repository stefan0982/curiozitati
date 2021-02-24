// export const onRouteUpdate = () => {
//   navigator.serviceWorker.register('/sw.js').then((reg) => {
//     reg.update();
//   });
// };

// export const onServiceWorkerUpdateReady = () => {
//   window.location.reload(true)
// };

// export const onServiceWorkerUpdateReady = () => {
//   const answer = window.confirm(
//     `Această aplicație a fost actualizată ` +
//     `Reâncarcă pentru a vedea schimbările`
//   )
//
//   if (answer === true) {
//     window.location.reload()
//   }
// }

// exports.onServiceWorkerUpdateReady = () => window.location.reload(true);

export const onRouteUpdate = () => {
  navigator.serviceWorker.register('/sw.js').then((reg) => {
    reg.update();
  });
};

export const onServiceWorkerUpdateReady = () => {
  // Set window.___swUpdated to prevent update on page navigation.
  // Overrides https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby/cache-dir/navigation.js#L64
  window.___swUpdated = false
  window.location.reload()
}