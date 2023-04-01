function merge() {
  const urlInput = document.getElementById("urlInput").value.trim();
  const messageInput = document.getElementById("messageInput").value.trim();

  // Validate URL
  const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
  if (!urlPattern.test(urlInput)) {
    document.getElementById("url-error").textContent = "Please enter a valid URL.";
    document.getElementById("mergeUrl").value = "";
    return;
  } else {
    document.getElementById("url-error").textContent = "";
  }

  const encodedMessage = encodeURIComponent(messageInput);
  const mergedUrl = `https://safe-link-drab.vercel.app/index.html?url=${encodeURIComponent(urlInput)}&message=${encodedMessage}`;

  document.getElementById("mergeUrl").value = mergedUrl;
}
