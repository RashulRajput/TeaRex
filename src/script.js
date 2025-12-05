// Minimal browser-safe script required by tests and the renderer HTML.
// Keep this file intentionally tiny; avoid using Node-specific APIs here.

// Expose a small API for UI scripts to hook into during tests.
window.__tearex_script_loaded__ = true;
console.log('src/script.js loaded');

// Optional: provide a safe global require shim for components that guard
// against missing `require`. This intentionally does nothing in browser/jsdom.
if (typeof window.require === 'undefined') {
    window.require = function () {
        throw new Error('require is not available in this environment');
    };
}
