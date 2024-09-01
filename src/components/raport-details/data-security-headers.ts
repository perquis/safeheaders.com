export const securityHeaders = [
  {
    label: "access-control-allow-origin",
    content:
      "This is a very lax CORS policy but the current site is a whitelisted CDN, so this is expected.",
  },
  {
    label: "content-security-policy",
    content:
      "Content Security Policy is an effective measure to protect your site from XSS attacks. By whitelisting sources of approved content, you can prevent the browser from loading malicious assets. Analyse this policy in more detail.",
  },
  {
    label: "strict-transport-security",
    content:
      "HTTP Strict Transport Security is an excellent feature to support on your site and strengthens your implementation of TLS by getting the User Agent to enforce the use of HTTPS.",
  },
  {
    label: "referrer-policy",
    content:
      "Referrer Policy is a new header that allows a site to control how much information the browser includes with navigations away from a document and should be set by all sites.",
  },
  {
    label: "x-frame-options",
    content:
      "X-Frame-Options tells the browser whether you want to allow your site to be framed or not. By preventing a browser from framing your site you can defend against attacks like clickjacking.",
  },
  {
    label: "x-xss-protection",
    content:
      "X-XSS-Protection configures the XSS Auditor in legacy browsers, with the recommended setting being 'X-XSS-Protection: 1; mode=block'. However, for a more robust defense against cross-site scripting (XSS) attacks, it is advisable to implement a Content Security Policy (CSP) instead.",
  },
  {
    label: "x-content-type-options",
    content:
      "X-Content-Type-Options prevents browsers from performing MIME type sniffing and ensures they adhere strictly to the declared content type. The recommended value for this header is 'X-Content-Type-Options: nosniff', which mitigates the risk of certain types of content misinterpretation vulnerabilities.X-Content-Type-Options stops a browser from trying to MIME-sniff the content type and forces it to stick with the declared content-type. The only valid value for this header is 'X-Content-Type-Options: nosniff'.",
  },
  {
    label: "expect-ct",
    content:
      "The Expect-CT header is set to be deprecated in the near future and can be safely removed from your configurations.",
  },
  {
    label: "permissions-policy",
    content:
      "The Permissions-Policy header is a powerful new feature that enables websites to control and restrict the use of various browser features and APIs, enhancing security and privacy.",
  },
  {
    label: "x-powered-by",
    content:
      "The X-Powered-By header often reveals information about server technologies, such as 'PHP/5.5.9-1ubuntu4.5' or 'ASP.NET'. To enhance security and reduce the exposure of server details, it's advisable to either modify this header to obfuscate its content or remove it entirely.",
  },
  {
    label: "report-to",
    content:
      "The Report-To header enables the Reporting API, allowing websites to collect detailed reports from browsers about various errors and issues that occur, thereby aiding in better monitoring and debugging.",
  },
  {
    label: "nel",
    content:
      "The Network Error Logging header is a new feature that directs browsers to send detailed reports about network and application errors. To collect and analyze these reports, you can sign up for a free account on Report URI.",
  },
  {
    label: "cross-origin-embedder-policy-report-only",
    content:
      "The Cross-Origin Embedder Policy (COEP) enables a site to control which resources can be embedded based on cross-origin permissions. It ensures that only assets that explicitly grant permission via CORS (Cross-Origin Resource Sharing) or CORP (Cross-Origin Resource Policy) can be loaded, enhancing security by preventing unauthorized access to sensitive content.",
  },
  {
    label: "cross-origin-opener-policy-report-only",
    content:
      "The Cross-Origin Opener Policy (COOP) enables a site to opt into Cross-Origin Isolation, which enhances security by isolating the site’s browsing context from other origins. This policy helps protect against cross-origin attacks and improves the site's ability to leverage certain security features.",
  },
  {
    label: "server",
    content:
      "The Server header value has been modified. Commonly, you might see values such as 'Microsoft-IIS/8.0' or 'nginx 1.7.2', which disclose information about the server software. Redacting or modifying this value can help enhance security by concealing server details.",
  },
];
