document.addEventListener("DOMContentLoaded", () => {
  // Xử lý các thẻ <code> rỗng
  document.querySelectorAll("code").forEach(codeBlock => {
    if (codeBlock.innerText.trim() === "") {
      codeBlock.textContent = "Coming soon!";

      const pre = codeBlock.closest("pre");
      if (pre) {
        pre.style.display = "flex";
        pre.style.justifyContent = "center";
      }
    }
  });

  // Xử lý nút copy
  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const codeBlock = document.querySelector(targetId);

      if (!codeBlock) return;

      const code = codeBlock.innerText;

      const textarea = document.createElement("textarea");
      textarea.value = code;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);

      textarea.select();
      const success = document.execCommand("copy");
      document.body.removeChild(textarea);

      if (success) {
        btn.textContent = "✓ Copied!";
      } else {
        btn.textContent = "❌ Failed";
      }

      setTimeout(() => {
        btn.textContent = "📋 Copy";
      }, 1500);
    });
  });
});