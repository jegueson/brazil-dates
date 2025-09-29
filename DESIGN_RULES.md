# 🎨 Design Rules - Calendário Brasileiro

## 📋 **CRITICAL REQUIREMENTS**

### 1. **Header & Footer Consistency** ⚠️ **MANDATORY**
- **ALL pages MUST include the same header and footer structure**
- **Header**: Sticky navigation with logo, title, and mobile menu
- **Footer**: Complete footer with links, categories, and copyright
- **Exception**: Only modal/overlay components can skip this rule

### 2. **Google Tag Manager** ⚠️ **AUTOMATIC**
- **GTM is automatically included** on all pages via global installation
- **Container ID**: `GTM-WDL73LX`
- **No additional setup needed** for new pages
- **Tracking**: Automatic page views and custom events

### 3. **Page Structure Template**
```tsx
const PageComponent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header - MANDATORY */}
      <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          {/* Header content */}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page content */}
      </main>

      {/* Footer - MANDATORY */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          {/* Footer content */}
        </div>
      </footer>
    </div>
  );
};
```

### 3. **Navigation Requirements**
- **Mobile Navigation**: Must include all main pages
- **Quick Links**: Sidebar should link to all major sections
- **Footer Links**: Complete navigation in footer
- **Breadcrumbs**: Use for deep navigation (optional)

### 4. **SEO Requirements**
- **useSEO Hook**: Every page MUST use the SEO hook
- **Meta Tags**: Title, description, keywords required
- **Structured Data**: Include when relevant
- **Canonical URLs**: Must be set for all pages

### 5. **Responsive Design**
- **Mobile First**: All components must be mobile-responsive
- **Breakpoints**: Use Tailwind's responsive classes
- **Touch Friendly**: Minimum 44px touch targets
- **Readable Text**: Minimum 16px font size

### 6. **Accessibility**
- **Alt Text**: All images must have alt text
- **ARIA Labels**: Use for interactive elements
- **Keyboard Navigation**: All interactive elements must be keyboard accessible
- **Color Contrast**: Meet WCAG AA standards

### 7. **Performance**
- **Static Data**: Prefer static data over API calls
- **Lazy Loading**: Use for heavy components
- **Image Optimization**: Use appropriate image formats
- **Bundle Size**: Keep components lightweight

## 🚫 **FORBIDDEN PATTERNS**

### ❌ **Never Do This:**
- Create pages without header/footer
- Use inline styles instead of Tailwind classes
- Skip SEO configuration
- Create non-responsive components
- Use hardcoded strings without internationalization
- Create pages that break the design system

### ❌ **Common Mistakes:**
- Forgetting to add new pages to navigation
- Not updating footer links
- Skipping mobile navigation updates
- Creating pages without proper SEO
- Using inconsistent spacing/padding

## ✅ **BEST PRACTICES**

### 🎯 **Always Do This:**
- Follow the page structure template
- Include header and footer on every page
- Use the useSEO hook for all pages
- Test on mobile devices
- Update navigation when adding pages
- Use consistent color schemes
- Follow the established design patterns

### 🔄 **Update Checklist:**
When adding new pages:
- [ ] Include header with navigation
- [ ] Include footer with links
- [ ] Add to mobile navigation
- [ ] Configure SEO properly
- [ ] Test responsive design
- [ ] Update main page links
- [ ] Test all navigation paths

## 📱 **Mobile Navigation Structure**
```tsx
const navItems = [
  { href: "/", label: "Início", icon: Home },
  { href: "/regionais", label: "Regionais", icon: MapPin },
  { href: "/sobre", label: "Sobre", icon: Info },
  { href: "/historia", label: "História", icon: History },
  { href: "/tradicoes", label: "Tradições", icon: Sparkles },
  { href: "/contato", label: "Contato", icon: Mail },
  // Add new pages here
];
```

## 🎨 **Design System**

### Colors:
- **Primary**: Blue gradient
- **Accent**: Complementary color
- **Cultural**: Special holiday color
- **Muted**: Subtle backgrounds

### Typography:
- **Headings**: Bold, gradient text
- **Body**: Readable, proper contrast
- **Links**: Hover effects required

### Spacing:
- **Container**: `container mx-auto px-4`
- **Sections**: `py-8` or `py-12`
- **Cards**: Consistent padding and margins

---

**⚠️ REMEMBER: Every page MUST have header and footer. This is non-negotiable for consistency and user experience.**
