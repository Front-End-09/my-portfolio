// utils/sweetalert.js
export function sweetalert(type, title, goto = null) {
  if (typeof window === "undefined") return; // Ensure this runs only on client

  const existAlert = document.querySelector(".sweet-alert-modal");
  if (existAlert) {
    existAlert.remove();
  }

  const element = document.createElement("div");
  element.classList.add(
    "sweet-alert-modal",
    "fixed",
    "bottom-5",
    "right-5",
    "px-4",
    "py-2",
    "rounded",
    "shadow-lg",
    "flex",
    "items-center",
    "gap-2",
    "z-50"
  );

  if (type === "success") {
    element.classList.add("bg-green-700");
    element.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
        <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
          stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <p class="text-white text-sm">${title}</p>
    `;
    document.body.appendChild(element);

    // Auto remove after 2s
    setTimeout(() => {
      element.remove();
    }, 2000);

    // Redirect if goto is provided
    if (goto) {
      setTimeout(() => {
        window.location.href = goto;
      }, 1000);
    }
  } else if (type === "error") {
    element.classList.add("bg-red-600");
    element.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" 
        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="15" y1="9" x2="9" y2="15"/>
        <line x1="9" y1="9" x2="15" y2="15"/>
      </svg>
      <p class="text-white text-sm">${title}</p>
    `;
    document.body.appendChild(element);

    setTimeout(() => {
      element.remove();
    }, 2000);
  }
}
