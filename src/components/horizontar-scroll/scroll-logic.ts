export function getVerticalScrollPercentage() {
  // Get scrollTop (cross-browser)
  const scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  // Get viewport height
  const viewportHeight =
    document.documentElement.clientHeight || window.innerHeight;

  // Get document height (cross-browser)
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight,
  );

  // Calculate scrollable height
  const scrollableHeight = documentHeight - viewportHeight;

  // Return percentage (handle edge case where document is shorter than viewport)
  return scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
}
