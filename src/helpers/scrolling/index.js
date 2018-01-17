export function scrollToBottom(element) {
  const container = document.getElementById(element);
  if (container) container.scrollTop = container.scrollHeight - container.clientHeight;
}
