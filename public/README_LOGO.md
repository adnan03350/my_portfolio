# Logo Setup Instructions

## Adding Your Aizentra Labs Logo

1. **Save your logo file** as `logo.png` in the `/public` directory
   - Recommended size: 512x512px or higher (square format works best)
   - Format: PNG with transparent background preferred
   - The logo should be a dark/black design that will be inverted to white

2. **The logo is automatically integrated in:**
   - **Navbar** - Top left corner with company name
   - **Company Section** - Large animated logo display
   - **Footer** - Centered logo above copyright

3. **Current Implementation:**
   - The logo uses CSS filters to invert colors (brightness-0 invert) for dark backgrounds
   - It's responsive and scales appropriately on all devices
   - Includes hover animations and effects

4. **If your logo is already white/light colored:**
   - Remove the `filter brightness-0 invert` classes from the Image components
   - Or adjust the filter classes in:
     - `components/Navbar.tsx`
     - `components/sections/Company.tsx`
     - `components/sections/Footer.tsx`

## File Location
Place your logo file at: `/public/logo.png`
