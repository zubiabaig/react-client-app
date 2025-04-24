import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
    {
        extends: "./vite.config.js",
        test: {
            include: ["**/*.node.test.{js,jsx}"],
            name: "happy-dom",
            environment: "happy-dom",
            coverage: {
                provider: "istanbul",
                reporter: ["text", "json", "html"],
            }
        }
    },
    {
        extends: "./vite.config.js",
        test: {
            setupFiles: ["vitest-browser-react"],
            include: ["**/*.browser.test.{js,jsx}"],
            name: "browser",
            browser: {
                provider: "playwright",
                enabled: true,
                name: "chromium",
            },
            coverage: {
                provider: "istanbul",
                reporter: ["text", "json", "html"],
            }
        }
    }
])