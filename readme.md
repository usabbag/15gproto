# Coffee App Product Requirements Document

## Overview
A minimalist, functional app for coffee enthusiasts to manage their coffee making equipment, recipes, and knowledge. The app follows a monochromatic design with blue interactive elements for clarity and focus.

## Visual Design Guidelines

### Color Palette
- Primary Background: #FFFFFF
- Secondary Background: #F5F5F5
- Text (Primary): #000000
- Text (Secondary): #666666
- Interactive Elements: #0066CC
- Borders: #CCCCCC
- Success States: #004D40
- Error States: #B71C1C

### Typography
- Primary Font: Inter
- Headers: 24px (H1), 20px (H2), 16px (H3)
- Body Text: 14px
- Small Text: 12px

### Component Styling
- Border Radius: 4px
- Padding (Container): 16px
- Spacing between elements: 12px
- Card Shadow: 0 2px 4px rgba(0, 0, 0, 0.1)

## Tab Structure
Navigation: Bottom tab bar with icons and labels for each section

### 1. Supplies Tab

#### Features
- Equipment List View
  - Categorized sections: Beans, Grinders, Brewing Devices
  - Each item displays name, date added, and key details
  - Quick-edit capability with long press

#### Add/Edit Flows
1. Beans
   - Name
   - Roaster
   - Roast Date
   - Origin
   - Notes
   - Current Amount (optional)

2. Grinders
   - Name/Model
   - Type (Electric/Manual)
   - Custom Settings List
     - Setting Name
     - Grind Size Value
     - Notes

3. Brewing Devices
   - Type (dropdown)
   - Brand
   - Model
   - Purchase Date (optional)
   - Notes

### 2. My Recipes Tab

#### Layout
- Grid view of recipe cards
- FAB (Floating Action Button) in bottom right
- Search/Filter bar at top

#### Recipe Card Display
- Recipe Name
- Brewing Device Used
- Bean Type
- Time to Make
- Rating (if rated)

#### Recipe Creation/Edit Flow
1. Basic Info
   - Name
   - Description
   - Private/Public toggle

2. Equipment Selection
   - Brewing Device (from Supplies)
   - Grinder (from Supplies)
   - Grind Setting

3. Ingredients
   - Coffee Bean (from Supplies)
   - Coffee Amount
   - Water Amount
   - Water Temperature

4. Steps
   - Ordered list of steps
   - Time per step (optional)
   - Notes per step (optional)

### 3. Public Recipes Tab

#### Features
- Infinite scroll list of recipe cards
- Search with filters
  - Brewing Device Type
  - Difficulty Level
  - Time to Make
  - Rating

#### Recipe Card
- Same layout as My Recipes
- Additional elements:
  - Author
  - Save button
  - Like count
  - Comment count

### 4. Guides Tab

#### Content Types
- Articles
- Video Guides (embedded)
- Equipment Reviews
- Technique Tutorials

#### Organization
- Categories
  - Brewing Methods
  - Equipment
  - Bean Knowledge
  - Techniques
  - Tips & Tricks

#### Article Display
- Header Image
- Title
- Author
- Reading Time
- Content (Markdown support)
- Related Guides

### 5. Tools Tab

#### Calculator Section
1. Ratio Calculator
   - Input: Either coffee or water amount
   - Desired ratio selection
   - Real-time calculation
   - Common ratio presets

2. Grind Size Converter
   - Input: Current grinder & setting
   - Output: Equivalent settings for other grinders
   - Save conversion as preset

#### Timer Section
- Customizable timer presets
- Multiple stage timing
- Notification sounds
- Save timer sequence to recipe

## Data Models

### User
- ID
- Username
- Email
- Profile Picture
- Equipment List
- Recipe List
- Saved Recipes

### Equipment
- ID
- Type
- Name
- Details (JSON)
- Date Added
- Last Used

### Recipe
- ID
- Author ID
- Name
- Equipment IDs
- Ingredients
- Steps
- Privacy Setting
- Ratings
- Comments
- Created Date
- Modified Date

## Technical Requirements

### Performance
- Recipe list load time: <2s
- Image optimization for guide content
- Offline support for saved recipes
- Background sync for updates

### Security
- User authentication required
- Recipe privacy controls
- Rate limiting for public recipe submissions

### Analytics
Track:
- Recipe creation/editing
- Tool usage
- Guide engagement
- Search patterns
- Equipment preferences

## Future Considerations
- Community features
- Recipe sharing
- Equipment marketplace
- Barista certification tracking
- Integration with smart coffee scales
- Coffee shop finder