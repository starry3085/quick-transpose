# TabBar Icon Requirements

The miniprogram requires the following icons for the tabBar navigation:

## Required Icons (81x81 pixels each)

1. **transpose.png** - Inactive state for transpose tab
2. **transpose-active.png** - Active state for transpose tab  
3. **dictionary.png** - Inactive state for dictionary tab
4. **dictionary-active.png** - Active state for dictionary tab

## Icon Design Guidelines

- Size: 81x81 pixels (recommended by WeChat)
- Format: PNG with transparency support
- Style: Simple, clear, and recognizable
- Colors: 
  - Inactive: Gray (#999999 or similar)
  - Active: Blue (#1890ff or brand color)

## Icon Concepts

### Transpose Tab
- **Symbol**: Musical note with arrows or transformation symbol
- **Concept**: Represents chord transposition and key changes
- **Visual**: Could use treble clef, musical note, or circular arrows

### Dictionary Tab  
- **Symbol**: Book, list, or reference symbol
- **Concept**: Represents chord dictionary and reference
- **Visual**: Could use book icon, list icon, or musical chord symbol

## Implementation Note

Since this is a development environment, you can:
1. Use online icon generators to create simple icons
2. Use design tools like Figma, Sketch, or Canva
3. Find suitable icons from icon libraries (ensure licensing)
4. Create simple geometric shapes as placeholders

The icons should be placed in the `/images/` directory and referenced in `app.json` tabBar configuration.