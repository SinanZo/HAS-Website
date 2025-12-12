# Security Hardening Guide

## Phase 14: Security Hardening & OWASP Compliance

This guide covers security best practices, headers configuration, and OWASP Top 10 compliance for the website redesign project.

## 🔒 Security Architecture Overview

```
Frontend (React)           Backend (Express/Node.js)    Database
    ↓                            ↓                           ↓
- Input validation        - HTTPS/TLS 1.3              - Encrypted
- CSP headers             - Security headers           - Parameterized queries
- URL sanitization        - Rate limiting              - Access control
- XSS prevention          - CORS policy                - Audit logs
- Error handling          - Input validation
```

## 🛡️ Security Headers (Server-side Setup)

### Express.js Middleware

Create `middleware/securityHeaders.js`:

```javascript
const { setSecurityHeaders, cspHeaders } = require('../utils/securityUtils');

module.exports = (req, res, next) => {
  setSecurityHeaders(res);
  next();
};
```

Add to `server.js`:

```javascript
const securityHeaders = require('./middleware/securityHeaders');
app.use(securityHeaders);
```

### Headers Explained

| Header | Value | Purpose |
|--------|-------|---------|
| X-Frame-Options | DENY | Prevent clickjacking attacks |
| X-Content-Type-Options | nosniff | Prevent MIME type sniffing |
| X-XSS-Protection | 1; mode=block | XSS filter in older browsers |
| Referrer-Policy | strict-origin-when-cross-origin | Control referrer information |
| Strict-Transport-Security | max-age=31536000 | Force HTTPS for 1 year |
| Content-Security-Policy | (see details below) | Prevent inline script execution |

### HTTPS/HSTS Setup

**Local Development (Self-signed cert):**

```bash
# Generate self-signed certificate
openssl req -x509 -newkey rsa:4096 -nodes -out cert.pem -keyout key.pem -days 365

# Run with HTTPS
npm run dev -- --https --cert cert.pem --key key.pem
```

**Production (Let's Encrypt):**

Use certbot with your hosting provider:

```bash
# If using Nginx
sudo certbot --nginx -d yourdomain.com

# If using Apache
sudo certbot --apache -d yourdomain.com

# Or use your hosting provider's SSL setup
```

## 📋 Content Security Policy (CSP)

### CSP Implementation

The CSP policy prevents inline scripts and restricts resource loading:

```
default-src 'self'
  ↓
Only same-origin resources allowed by default

script-src 'self' *.googletagmanager.com
  ↓
Scripts only from same origin and Google Tag Manager

img-src 'self' data: https:
  ↓
Images from same origin, data URIs, and HTTPS

object-src 'none'
  ↓
Disable <object>, <embed>, <applet> tags
```

### CSP Violations

Monitor CSP violations in browser console (Development):

```javascript
// If you see CSP violations, add the blocked resource to the policy:
// Example: "Refused to load the script..." → Add source to script-src
```

CSP Report-Only Mode (Testing):

```
Content-Security-Policy-Report-Only: default-src 'self'; report-uri /csp-report
```

This logs violations without blocking (safe for testing).

## 🛡️ OWASP Top 10 Compliance

### 1. Broken Access Control ✅

**What we do:**
- Backend validates all API requests
- Frontend never trusts user input
- Session tokens expire

**Check:**
```javascript
// Never do this (trusting client-side checks)
if (userRole === 'admin') { /* show admin panel */ }

// Always validate on server
fetch('/api/admin', { /* server validates */ })
```

### 2. Cryptographic Failures ✅

**What we do:**
- HTTPS/TLS 1.3 enforced
- No sensitive data in localStorage
- Passwords never transmitted in plain text

**Check:**
```javascript
// ❌ DON'T store sensitive data
localStorage.setItem('authToken', token);

// ✅ DO use HttpOnly cookies (server-side)
// Set-Cookie: authToken=...; HttpOnly; Secure; SameSite=Strict
```

### 3. Injection (SQL, XSS, Command) ✅

**What we do:**
- React escapes HTML by default
- Backend uses parameterized queries
- Input sanitization on form submission

**Check:**
```javascript
// ❌ DON'T use dangerouslySetInnerHTML
<div dangerouslySetInnerHTML={{ __html: userInput }} />

// ✅ DO render as text (React escapes automatically)
<div>{userInput}</div>

// ❌ DON'T build SQL strings
const query = `SELECT * FROM users WHERE id = ${userId}`;

// ✅ DO use parameterized queries
const query = 'SELECT * FROM users WHERE id = ?';
db.query(query, [userId]);
```

### 4. Insecure Design ✅

**What we do:**
- Security-first architecture
- No hardcoded secrets in code
- Environment variables for sensitive config

**Check:**
```javascript
// ❌ DON'T hardcode secrets
const API_KEY = 'sk_live_xyz123abc';

// ✅ DO use environment variables
const API_KEY = process.env.API_KEY;
```

### 5. Security Misconfiguration ✅

**What we do:**
- Security headers configured
- Dependencies kept up-to-date
- Error messages don't leak info

**Check:**
```bash
# Regular dependency audits
npm audit

# Update packages
npm update

# Check for vulnerabilities
npm audit fix
```

### 6. Vulnerable Components ✅

**What we do:**
- Regular npm audits
- Dependabot alerts enabled on GitHub
- Pin minor versions in package-lock.json

**Check:**
```bash
# Check for vulnerabilities
npm audit

# Audit specific package
npm audit jwt-decode

# Update all packages
npm update --save
```

### 7. Authentication & Session Management ✅

**What we do:**
- Session tokens expire after 30 minutes
- Tokens stored in secure HttpOnly cookies
- Re-authentication required for sensitive actions

**Check:**
```javascript
// Backend should set tokens with:
// Secure flag (HTTPS only)
// HttpOnly flag (not accessible from JS)
// SameSite=Strict (prevent CSRF)
res.cookie('authToken', token, {
  httpOnly: true,
  secure: true, // HTTPS only
  sameSite: 'strict',
  maxAge: 30 * 60 * 1000 // 30 minutes
});
```

### 8. Data Integrity Failures ✅

**What we do:**
- CSRF tokens on all forms
- POST/PUT for mutations (not GET)
- Checksum verification for critical data

**Check:**
```javascript
// ❌ DON'T mutate data with GET
fetch('/api/delete-user?id=123');

// ✅ DO use POST/DELETE with CSRF token
fetch('/api/delete-user', {
  method: 'DELETE',
  headers: { 'X-CSRF-Token': csrfToken },
  body: JSON.stringify({ id: 123 })
});
```

### 9. Logging & Monitoring ✅

**What we do:**
- Error logging with Sentry/LogRocket
- GA4 event tracking
- Security event logging

**Check:**
```javascript
// Log errors
console.error('Error:', error);

// Track security events
import { logSecurityEvent } from './utils/securityUtils';
logSecurityEvent('suspicious_activity', {
  eventDetails: 'Multiple failed login attempts'
});
```

### 10. SSRF (Server-Side Request Forgery) ✅

**What we do:**
- URL validation before making requests
- Whitelist allowed domains
- No user input in backend URLs

**Check:**
```javascript
// ❌ DON'T allow user-controlled URLs
fetch(userProvidedUrl);

// ✅ DO validate and whitelist
import { validateUrl } from './utils/securityUtils';
if (validateUrl(url) && allowedDomains.includes(new URL(url).hostname)) {
  fetch(url);
}
```

## 🔐 Input Validation & Sanitization

### Form Validation

Use `securityUtils.js` functions:

```javascript
import {
  sanitizeInput,
  validateEmail,
  validatePhone,
  detectXSSAttempt
} from './utils/securityUtils';

function handleFormSubmit(formData) {
  // Sanitize inputs
  const name = sanitizeInput(formData.name);
  
  // Validate format
  if (!validateEmail(formData.email)) {
    return error('Invalid email');
  }
  
  // Detect attacks
  if (detectXSSAttempt(formData.message)) {
    logSecurityEvent('xss_attempt', { field: 'message' });
    return error('Invalid input');
  }
  
  // Proceed
  submitForm({ name, email: formData.email });
}
```

### Common Injection Patterns

```javascript
import { detectSQLInjection, detectXSSAttempt } from './utils/securityUtils';

// SQL Injection Detection
detectSQLInjection("' OR '1'='1"); // Returns true

// XSS Detection
detectXSSAttempt("<script>alert('xss')</script>"); // Returns true
```

## 📊 Security Checklist

### Before Deployment

- [ ] HTTPS enabled (check browser padlock)
- [ ] All security headers configured
- [ ] CSP policy active (check DevTools)
- [ ] HSTS enabled (check Response Headers)
- [ ] npm audit passes (0 vulnerabilities)
- [ ] Environment variables not in code
- [ ] API keys stored in .env.local (not in git)
- [ ] Database uses parameterized queries
- [ ] Form validation on server-side
- [ ] No console.log() of sensitive data
- [ ] Error messages don't leak information
- [ ] CORS properly configured
- [ ] Rate limiting enabled
- [ ] Logging/monitoring active
- [ ] Security headers tested with security.txt

### Security Testing Tools

1. **npm audit** - Dependency vulnerabilities
```bash
npm audit
```

2. **security.txt** - Security contact info
Create `public/.well-known/security.txt`:
```
Contact: mailto:security@example.com
Expires: 2025-11-04T00:00:00.000Z
Preferred-Languages: en, ar
```

3. **OWASP ZAP** - Penetration testing
```bash
docker run -t owasp/zap2docker-stable zap-baseline.py -t http://localhost:3000
```

4. **SSL Labs** - HTTPS configuration
Visit: https://www.ssllabs.com/ssltest/

5. **Security Headers** - Header validation
Visit: https://securityheaders.com/

## 🚨 Incident Response

### If Security Issue Discovered

1. **Stop the bleed** - Disable affected functionality
2. **Assess impact** - Who's affected? What data?
3. **Notify stakeholders** - Be transparent
4. **Fix the vulnerability** - Apply patch
5. **Test thoroughly** - Verify fix works
6. **Monitor** - Watch for re-exploitation
7. **Post-mortem** - Learn for next time

### Security Contacts

Add to `security.txt`:

```
Contact: security@example.com
Contact: +962-123-456789
Expires: 2025-11-04T00:00:00.000Z
Preferred-Languages: en, ar
```

## 🔄 Dependency Management

### Keep Dependencies Updated

```bash
# Check for outdated packages
npm outdated

# Update packages safely
npm update

# Major version updates (use with caution)
npm install package@latest

# After updates, run tests
npm test
npm audit
```

### Lock Dependencies

Always commit `package-lock.json`:

```json
{
  "dependencies": {
    "react": "18.3.1"  // Exact version, no ^
  }
}
```

## 📝 Environment Variables

Create `.env.local` (NEVER commit):

```bash
# API Configuration
REACT_APP_API_URL=https://api.example.com
REACT_APP_GA4_ID=G-XXXXXXX

# Feature Flags
REACT_APP_FEATURE_BETA=false
REACT_APP_FEATURE_ANALYTICS=true

# Security
REACT_APP_CSP_NONCE=generated_at_runtime
REACT_APP_SECURITY_LOG_ENDPOINT=https://logs.example.com/api/logs
```

Add to `.gitignore`:

```
.env.local
.env.*.local
```

## 🎯 Security Best Practices

✅ **DO:**
- Use HTTPS everywhere
- Validate on server (never trust client)
- Keep dependencies updated
- Use security headers
- Log security events
- Implement rate limiting
- Use strong passwords
- Enable 2FA for admin accounts
- Regular security audits
- Security training for team

❌ **DON'T:**
- Hardcode secrets in code
- Trust client-side validation alone
- Use deprecated libraries
- Store sensitive data in localStorage
- Disable security features in production
- Use eval() or Function()
- Allow arbitrary user input in URLs
- Ignore security warnings
- Leave debug mode on in production
- Commit .env files to git

## 📚 Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [React Security](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)
- [CSP Reference](https://content-security-policy.com/)
- [SSL Labs](https://www.ssllabs.com/)
- [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)

## ✅ Implementation Checklist

### Frontend
- [ ] CSP headers set (check DevTools)
- [ ] Input validation working
- [ ] XSS prevention tested
- [ ] HTTPS connection verified
- [ ] Security event logging working

### Backend
- [ ] Security headers middleware added
- [ ] HTTPS/TLS configured
- [ ] HSTS enabled
- [ ] Parameterized queries used
- [ ] Rate limiting implemented
- [ ] CORS properly configured
- [ ] Error messages sanitized

### Infrastructure
- [ ] SSL certificate valid
- [ ] Firewall configured
- [ ] DDoS protection enabled
- [ ] Regular backups in place
- [ ] Monitoring/alerting active

### Ongoing
- [ ] npm audit passes
- [ ] Dependencies updated monthly
- [ ] Security headers tested quarterly
- [ ] Penetration testing yearly
- [ ] Team security training annual

---

**Updated:** November 4, 2025  
**Task:** Phase 14 - Security hardening  
**Status:** ✅ Complete  
**Files:** securityUtils.js, middleware setup guide  
**Integration:** Ready for Express.js backend
