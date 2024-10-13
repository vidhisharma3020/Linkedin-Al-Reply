export default defineBackground(() => {
  console.log('Extension background service started!', { id: browser.runtime.id });
});
