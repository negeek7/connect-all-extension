export default defineBackground(() => {
  console.log('Hello background! This is nice!!', { id: browser.runtime.id });
});

