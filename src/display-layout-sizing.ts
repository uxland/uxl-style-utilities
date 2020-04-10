export const displayLayoutSizing = (withLog: boolean) => {
  const doc = document.getElementsByTagName('body')[0];
  const out = window.outerHeight;
  const inn = window.innerHeight;
  if (doc) {
    doc.style.setProperty('--window-outer-height', `${out}px`);
    doc.style.setProperty('--window-inner-height', `${inn}px`);
    doc.style.setProperty('--body-height', `${doc.clientHeight}px`);
  }
  if (withLog) {
    console.log('|---------------------------------------|');
    console.log('|----------- LAYOUT SIZING -------------|');
    console.log(`|------ Window outer height: ${out}px -----|`);
    console.log(`|------ Window inner height: ${inn}px -----|`);
    console.log(`|--------- Body height: ${doc.clientHeight}px ----------|`);
    console.log(`|---------------------------------------|`);
  }
};
