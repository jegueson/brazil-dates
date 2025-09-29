# 📊 Google Tag Manager Setup - Calendário Brasileiro

## 🎯 **Current Implementation**

Google Tag Manager has been successfully installed across all pages with the following configuration:

- **GTM Container ID**: `GTM-WDL73LX`
- **Implementation**: Global installation in `index.html`
- **Coverage**: All pages automatically include GTM tracking

## 📋 **Installation Details**

### ✅ **What's Already Done:**

1. **Head Script**: Added to `index.html` in the `<head>` section
2. **Body Fallback**: Added noscript iframe right after `<body>` tag
3. **Global Coverage**: Works on all pages automatically (SPA routing)

### 🔧 **Code Locations:**

**File**: `index.html`
- **Head Script**: Lines 74-80
- **Body Fallback**: Lines 84-87

## 🚀 **For Future Development**

### 📝 **New Page Checklist:**

When creating new pages, GTM is **automatically included** because it's installed globally. However, ensure:

- [ ] Page uses the standard page structure template
- [ ] SEO configuration is properly set up
- [ ] Page is added to navigation if needed
- [ ] Test GTM tracking in browser dev tools

### 🎯 **GTM Configuration:**

1. **Container ID**: `GTM-WDL73LX`
2. **Data Layer**: Automatically initialized
3. **Events**: Can be tracked via `dataLayer.push()`
4. **Debugging**: Use GTM Preview mode for testing

### 📊 **Recommended GTM Tags:**

Consider setting up these tags in your GTM container:

1. **Google Analytics 4**
   - Track page views
   - Track user interactions
   - Track regional page visits

2. **Custom Events**
   - Holiday detail views
   - Regional page visits
   - Search interactions
   - Calendar interactions

3. **Conversion Tracking**
   - Newsletter signups
   - Contact form submissions
   - Social media clicks

### 🔍 **Testing GTM:**

1. **Preview Mode**: Use GTM Preview mode to test
2. **Browser Dev Tools**: Check Network tab for GTM requests
3. **Data Layer**: Use `dataLayer` in console to verify
4. **Real-time Reports**: Check GA4 real-time reports

## 📱 **Page Structure Template**

For new pages, use this template to ensure GTM works correctly:

```tsx
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const NewPage = () => {
  useSEO({
    title: "Page Title",
    description: "Page description",
    // ... other SEO config
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header showSearch={false} />
      
      {/* Custom Page Header */}
      <div className="bg-card/50 border-b border-border/30">
        <div className="container mx-auto px-4 py-4">
          {/* Page-specific header content */}
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Page content */}
      </main>
      
      <Footer />
    </div>
  );
};

export default NewPage;
```

## 🎯 **GTM Event Tracking Examples**

### 📊 **Track Page Views:**
```javascript
// Automatic with GTM - no additional code needed
```

### 🎯 **Track Custom Events:**
```javascript
// Track holiday detail views
dataLayer.push({
  'event': 'holiday_view',
  'holiday_name': 'Carnaval',
  'holiday_date': '2025-02-17'
});

// Track regional page visits
dataLayer.push({
  'event': 'regional_page_view',
  'state': 'Rio de Janeiro',
  'region': 'Sudeste'
});

// Track search interactions
dataLayer.push({
  'event': 'search',
  'search_term': 'carnaval',
  'results_count': 5
});
```

## 🔧 **Maintenance**

### ✅ **Regular Checks:**
- [ ] GTM container is active
- [ ] Tags are firing correctly
- [ ] Data layer events are working
- [ ] Analytics data is flowing

### 🚨 **Troubleshooting:**
- **GTM not loading**: Check container ID
- **Events not firing**: Verify dataLayer.push() syntax
- **Missing data**: Check GTM Preview mode
- **Analytics issues**: Verify GA4 configuration

## 📈 **Performance Impact**

- **Minimal Impact**: GTM loads asynchronously
- **No Blocking**: Doesn't affect page load speed
- **Efficient**: Single container for all tracking
- **Scalable**: Easy to add new tags and triggers

## 🎉 **Benefits**

✅ **Automatic Tracking**: All pages tracked without additional code
✅ **Centralized Management**: All tracking in GTM interface
✅ **Easy Updates**: Change tracking without code changes
✅ **Rich Analytics**: Detailed user behavior insights
✅ **Conversion Tracking**: Monitor user engagement and goals

---

**⚠️ Important**: GTM is now installed globally and will work on all current and future pages automatically. No additional setup needed for new pages!
