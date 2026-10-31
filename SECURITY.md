# Security

Please report suspected security vulnerabilities privately through the repository's GitHub Security tab (use "Report a vulnerability" if enabled). Do not post exploit details or secrets in a public issue.

This portfolio is a static GitHub Pages site. Its production build includes a content security policy (CSP) to restrict script, style, font, and other resource sources. This is defense in depth, not a guarantee against compromise. GitHub Pages does not allow this repository to configure HTTP response headers, so a meta CSP cannot provide protections such as `frame-ancestors`, HSTS, or `X-Content-Type-Options`. Hosting behind a service that supports security headers would be needed to configure those independently.

Repository maintainers should enable two-factor authentication, protect the `main` branch, review pull requests and Dependabot alerts, and keep dependencies and GitHub Actions updated. Never place secrets in frontend code or the public repository. The policy is inserted only in production builds so Vite's development tools continue to work. If new external resources are added, review and update the policy in `vite.config.js` rather than broadly allowing all sources.
