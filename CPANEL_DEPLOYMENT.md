# 🚀 cPanel Deployment Guide - Calendário Brasileiro

## 📋 **Pre-Deployment Checklist**

### ✅ **Build Status**
- ✅ Production build completed successfully
- ✅ All files optimized and minified
- ✅ SEO meta tags configured
- ✅ Google Tag Manager integrated
- ✅ All URLs updated to `calendario-feriados.com.br`

### 📁 **Files to Upload**
The `dist/` folder contains all production files:
```
dist/
├── index.html (5.37 kB)
├── assets/
│   ├── index-B2muMK_g.js (1,198.96 kB)
│   ├── index-C454Opvl.css (80.49 kB)
│   ├── index.es-RpbaU9gI.js (150.42 kB)
│   └── purify.es-aGzT-_H7.js (22.15 kB)
├── calendar-icon.svg
├── favicon.ico
├── placeholder.svg
├── robots.txt
└── sitemap.xml
```

## 🎯 **cPanel Deployment Steps**

### **Step 1: Access cPanel File Manager**
1. Login to your cPanel account
2. Navigate to **File Manager**
3. Go to **public_html** directory (or your domain's root directory)

### **Step 2: Upload Production Files**
1. **Upload the entire `dist/` folder contents** to your domain root
2. **Important**: Upload ALL files from the `dist/` folder
3. **Do NOT** upload the `dist/` folder itself, just its contents

### **Step 3: Set Correct Permissions**
Set the following permissions:
- **Files**: 644 (rw-r--r--)
- **Directories**: 755 (rwxr-xr-x)
- **index.html**: 644
- **robots.txt**: 644
- **sitemap.xml**: 644

### **Step 4: Configure .htaccess (Important!)**
Create a `.htaccess` file in your domain root with the following content:

```apache
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# React Router - Handle client-side routing
RewriteEngine On
RewriteBase /

# Handle Angular and React Router
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Force HTTPS (optional but recommended)
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Redirect www to non-www (optional)
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]
```

### **Step 5: Verify Deployment**
1. **Test your domain**: Visit `https://calendario-feriados.com.br`
2. **Check all pages**: Test navigation between pages
3. **Test regional pages**: Visit `/regionais` and individual state pages
4. **Check mobile**: Test on mobile devices
5. **Verify SEO**: Check meta tags in browser dev tools

## 🔧 **Post-Deployment Configuration**

### **Google Search Console**
1. Add your domain to Google Search Console
2. Submit the sitemap: `https://calendario-feriados.com.br/sitemap.xml`
3. Verify ownership

### **Google Analytics**
1. The Google Tag Manager is already configured
2. Container ID: `GTM-WDL73LX`
3. Verify tracking is working

### **SSL Certificate**
1. Ensure SSL certificate is active
2. Force HTTPS redirects (included in .htaccess)
3. Test all pages load over HTTPS

## 📊 **Performance Optimization**

### **File Sizes (Optimized)**
- **Total Size**: ~1.5 MB (compressed: ~400 KB)
- **Main JS**: 1,198.96 kB (gzipped: 334.81 kB)
- **CSS**: 80.49 kB (gzipped: 13.38 kB)
- **HTML**: 5.37 kB (gzipped: 1.76 kB)

### **Loading Performance**
- ✅ **Gzip Compression**: Enabled in .htaccess
- ✅ **Browser Caching**: 1 year for static assets
- ✅ **Minified Assets**: All JS/CSS minified
- ✅ **Optimized Images**: SVG icons optimized

## 🚨 **Troubleshooting**

### **Common Issues**

#### **1. 404 Errors on Page Refresh**
- **Cause**: Missing .htaccess rewrite rules
- **Solution**: Ensure .htaccess file is uploaded with React Router rules

#### **2. Assets Not Loading**
- **Cause**: Incorrect file paths or permissions
- **Solution**: Check file permissions (644 for files, 755 for directories)

#### **3. SEO Meta Tags Not Working**
- **Cause**: Server-side rendering not configured
- **Solution**: This is normal for client-side React apps. Meta tags will work for social sharing.

#### **4. Regional Pages Not Working**
- **Cause**: React Router not configured properly
- **Solution**: Ensure .htaccess rewrite rules are active

### **Performance Issues**
- **Large JS Bundle**: Consider code splitting for future updates
- **Slow Loading**: Enable gzip compression and browser caching
- **Mobile Performance**: Test on actual mobile devices

## 📈 **Monitoring & Maintenance**

### **Regular Checks**
1. **Site Speed**: Use Google PageSpeed Insights
2. **SEO Performance**: Monitor Google Search Console
3. **Analytics**: Check Google Analytics for user behavior
4. **Uptime**: Monitor site availability

### **Updates**
1. **Content Updates**: Modify data files in `src/data/`
2. **SEO Updates**: Update meta tags in `src/hooks/useSEO.ts`
3. **Regional Data**: Add new holidays in `src/data/regional-holidays.ts`

## 🎉 **Success Indicators**

### **✅ Deployment Successful When:**
- [ ] Site loads at `https://calendario-feriados.com.br`
- [ ] All pages navigate correctly
- [ ] Regional pages work (`/regionais`, `/regional/rio-janeiro`)
- [ ] Mobile navigation functions
- [ ] Contact form opens email client
- [ ] Google Tag Manager loads
- [ ] SEO meta tags appear in page source
- [ ] Sitemap accessible at `/sitemap.xml`

---

**🚀 Your Brazilian calendar is ready for production deployment!**

**Domain**: `https://calendario-feriados.com.br`
**Build Size**: ~1.5 MB (optimized)
**Pages**: 30+ pages (main + regional)
**SEO**: Fully optimized for Brazilian market
