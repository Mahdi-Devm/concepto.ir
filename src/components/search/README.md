# Search Components

This directory contains components used in the search functionality of the application.

## Components

### SuggestedCompanies

The `SuggestedCompanies` component displays a list of suggested companies with their logos and names. It's designed to be used on the search page to show recommended companies to the user.

#### Usage

```jsx
import SuggestedCompanies from "@/components/search/SuggestedCompanies";

function SearchPage() {
  return (
    <div>
      <SuggestedCompanies />
    </div>
  );
}
```

#### Features

- Responsive design that works on mobile, tablet, and desktop
- Company list with logos and names
- Bookmark functionality for each company
- "View more" button to see additional suggestions
- Clean separation between list items with divider lines

#### Customization

The component currently uses a static array of company data. To connect it to a dynamic data source:

1. Replace the `companyData` array with data from your API or database
2. Implement the bookmark functionality by adding click handlers to the bookmark buttons
3. Add a click handler to the "View more" button to load additional companies

#### Mobile Optimizations

The component is optimized for mobile with:

- Responsive padding and spacing
- Appropriately sized touch targets for buttons
- Text that wraps properly on small screens
- Properly scaled images and icons

## Nabarsearch Component

The `Nabarsearch` component (defined in `src/components/search/Nabarsearch.tsx`) works together with the `SuggestedCompanies` component to provide a complete search experience.

## Layout Integration

These components are designed to work within the search layout defined in `src/app/(pages)/search/layout.tsx`.
