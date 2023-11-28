export function destroyDataZoom() {
  if (window.jw_player) {
    console.log("destroy jw_player");
    window.jw_player.remove();
    window.jw_player = null;
  }

  if (window.datazoom_context) {
    console.log("destroy datazoom_context");
    window.datazoom_context.destroy();
    window.datazoom_context = null;
  }
}

const loadScript = (src: string, id: string) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.setAttribute("data-testid", id);
    script.setAttribute("id", id);
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};

export function loadDataZoom(datazoomScript: string) {
  loadScript(datazoomScript, "datazoom-script").then(() => {
    window.datazoom.setMetadata({
      deviceID: "15001234567890",
    });

    window.datazoom_context = window.datazoom.createContext(window.jw_player);
  });
}
