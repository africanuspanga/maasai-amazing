# KiliSafari Organizing - Complete Website Build Prompt

## Project Overview
Build a modern, award-winning tourism website for **KiliSafari Organizing**, a premium tour company based in Dar es Salaam, Tanzania. This website should be visually stunning, highly functional, and optimized for conversions while showcasing Tanzania's natural wonders and cultural richness.

## Brand Identity

### Company Information
- **Company Name**: KiliSafari Organizing
- **Location**: Dar es Salaam, Tanzania
- **Tagline**: [To be determined - suggest something compelling about Tanzania adventures]
- **Years of Experience**: 10+ years

### Brand Colors (MUST USE EXACTLY)
- **Primary Dark**: `#251b0b` (Deep brown - use for headers, primary text, navigation)
- **Primary Orange**: `#ff9800` (Vibrant orange - use for CTAs, accents, hover states)
- **Secondary Green**: `#536e2b` (Olive green - use for secondary elements, badges, highlights)

### Typography
- **Heading Font**: Montserrat (weights: 400, 600, 700, 900) - for all headings and titles
- **Body Font**: Open Sans (weights: 400, 500, 600) - for all body text and descriptions
- Use `font-serif` class for headings and `font-sans` for body text

## Technical Stack & Requirements

### Framework & Tools
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Language**: TypeScript
- **Image Optimization**: Next.js Image component with proper sizing and lazy loading
- **Icons**: Lucide React icons

### Performance Requirements
- Mobile-first responsive design
- Optimized images with proper `sizes` and `loading` attributes
- Smooth animations with `will-change-transform` for performance
- Sticky navigation with backdrop blur
- Touch-friendly mobile interactions (min 44px touch targets)

### Design Philosophy
- **NOT boring or generic AI-made websites**
- Modern, sophisticated, and visually engaging
- Use cool shadcn components creatively
- Smooth transitions and hover effects
- Professional photography placeholders (leave empty for client images)
- Award-winning aesthetic with attention to detail

## Navigation Structure

### Desktop Navigation
Sticky navigation bar with backdrop blur effect, white background with 95% opacity.

**Navigation Items** (left to right):
1. **Logo** (left side) - Company logo image
2. **HOME** - Link to `/`
3. **ABOUT** - Link to `/about`
4. **SAFARIS** - Dropdown menu with:
   - Northern Circuit (`/northern-circuit`)
   - Southern Circuit (`/southern-circuit`)
   - Day Safaris (`/day-safaris`)
   - Cultural Safaris (`/cultural-safaris`)
5. **ITINERARIES** - Link to `/itineraries`
6. **ZANZIBAR** - Link to `/zanzibar`
7. **TREKKING** - Dropdown menu with:
   - Kilimanjaro (`/kilimanjaro`)
   - Mt Meru (`/mt-meru`)
   - Udzungwa (`/udzungwa`)
   - Lushoto (`/lushoto`)
8. **CONTACT** - Button (orange background) - Link to `/contact`

### Mobile Navigation
- Hamburger menu icon (right side)
- Full-screen mobile menu with smooth transitions
- Collapsible sections for dropdowns
- Large touch-friendly links
- Close button to dismiss menu

### Navigation Styling
- Text color: `#251b0b` (dark brown)
- Hover color: `#ff9800` (orange)
- Active/current page indicator
- Smooth color transitions
- Logo size: 80-100px height
- Navigation height: 80px (desktop), 64px (mobile)

## Homepage Structure

### 1. Hero Section
**Layout**: Full-screen (100vh) with background image overlay

**Content**:
- **Heading**: 4 words maximum (e.g., "Discover Tanzania's Wild Beauty")
- **Subheading**: 12 words maximum describing the company's unique value
- **Background**: Full-screen hero image (placeholder - client will provide)
- **Overlay**: Dark overlay (40% black) for text readability
- **CTA**: Single prominent button "Discover Tanzania" linking to `/contact`

**Styling**:
- Heading: 4xl-7xl font size, font-black, white text
- Subheading: lg-2xl font size, white text with slight opacity
- Button: Large size, orange background (`#ff9800`), white text, hover effect

### 2. About Section
**Layout**: Two-column grid (text left, image right) on desktop, stacked on mobile

**Content**:
- **Heading**: "Your Gateway to Tanzania's Wonders" or similar
- **Description**: 2-3 paragraphs explaining KiliSafari is a Tanzanian tour company providing best tours to enjoy Tanzania's top destinations
- **Stats Grid**: 3 columns showing:
  - "10+ Years Experience"
  - "1000+ Happy Travelers" (or similar impressive number)
  - "20+ Destinations"
- **Rating Display**: 5-star rating with text "Rated 5.0 by our travelers"
- **Image Container**: Empty placeholder for client image

**Styling**:
- Background: White
- Heading color: `#251b0b`
- Stats numbers: `#ff9800` (orange), large and bold
- Padding: 16-20 (py-16 md:py-20)

### 3. Why Choose Us Section
**Layout**: 4-column grid on desktop, 2-column on tablet, 1-column on mobile

**Content** - 4 Feature Cards:
1. **Safety First**
   - Icon: Shield
   - Description: "Your safety is our top priority with experienced guides and well-maintained equipment"

2. **Local Expertise**
   - Icon: Users
   - Description: "Born and raised in Tanzania, we know the hidden gems and best wildlife spots"

3. **24/7 Support**
   - Icon: Clock
   - Description: "Round-the-clock assistance to ensure your adventure goes smoothly"

4. **Reliability**
   - Icon: Award
   - Description: "Recognized for excellence in service and sustainable tourism practices"

**Styling**:
- Background: Light gray (`bg-gray-50`)
- Icon containers: Orange circular background (`#ff9800`), white icons
- Icon size: 64px circles with 32px icons
- Hover effect: Scale up slightly (scale-105)
- Text: Centered alignment

### 4. Top Destinations Section
**Layout**: 3-column grid on desktop, 2-column on tablet, 1-column on mobile

**Content**: Pull 3 destinations from Northern Circuit page:
1. **Serengeti National Park**
   - Image placeholder
   - Title: "Serengeti National Park"
   - Subtitle: "Witness the Great Migration"
   - Description: ~100 characters about the park
   - Button: "Explore Serengeti" → `/northern-circuit`

2. **Ngorongoro Crater**
   - Image placeholder
   - Title: "Ngorongoro Crater"
   - Subtitle: "UNESCO World Heritage Site"
   - Description: ~100 characters about the crater
   - Button: "Discover Ngorongoro" → `/northern-circuit`

3. **Lake Manyara**
   - Image placeholder
   - Title: "Lake Manyara National Park"
   - Subtitle: "Famous tree-climbing lions"
   - Description: ~100 characters about the park
   - Button: "Visit Lake Manyara" → `/northern-circuit`

**Styling**:
- Cards with shadow and hover effects (shadow-lg hover:shadow-xl)
- Image aspect ratio: 4:3
- Image hover: Scale up (scale-105)
- Gradient overlay on images (from-black/60 to-transparent)
- Button: Full width, orange background

### 5. Zanzibar Section
**Layout**: 3-column grid similar to Top Destinations

**Content**: Pull 3 tours from Zanzibar page:
1. **Stone Town Tour**
   - Image placeholder
   - Duration badge
   - Description
   - Button: "Book Experience" → `/zanzibar`

2. **Spice Tour**
   - Image placeholder
   - Duration badge
   - Description
   - Button: "Book Experience" → `/zanzibar`

3. **Prison Island Tour**
   - Image placeholder
   - Duration badge
   - Description
   - Button: "Book Experience" → `/zanzibar`

### 6. Climb Kilimanjaro Section
**Layout**: 3-column grid

**Content**: Pull 3 routes from Kilimanjaro page:
1. **Machame Route**
   - Image placeholder
   - Duration: "6-7 Days"
   - Difficulty: "Moderate to Challenging"
   - Success rate
   - Highlights list
   - Button: "Choose Machame" → `/kilimanjaro`

2. **Marangu Route**
   - Image placeholder
   - Duration: "5-6 Days"
   - Difficulty: "Moderate"
   - Success rate
   - Highlights list
   - Button: "Choose Marangu" → `/kilimanjaro`

3. **Rongai Route**
   - Image placeholder
   - Duration: "6-7 Days"
   - Difficulty: "Moderate"
   - Success rate
   - Highlights list
   - Button: "Choose Rongai" → `/kilimanjaro`

### 7. Recommended By Section
**Layout**: Horizontal logo grid with 5-6 logos

**Content**: Company logos (client will provide):
- Google
- GetYourGuide
- TripAdvisor
- Booking.com
- SafariBookings
- [Other travel platforms]

**Styling**:
- Grayscale logos with hover color effect
- Even spacing with gap-8
- Centered alignment
- Background: White or light gray

### 8. Testimonials Section
**Layout**: 3-column grid with testimonial cards

**Content**: 3-6 customer testimonials with:
- Customer photo placeholder
- 5-star rating
- Testimonial text (2-3 sentences)
- Customer name
- Customer location/country

**Styling**:
- Cards with subtle shadow
- Quote icon or styling
- Star ratings in orange
- Italic text for quotes

### 9. Final CTA Section
**Layout**: Centered content with dark background

**Content**:
- **Heading**: "Ready for Your African Adventure?"
- **Subheading**: "Let us craft the perfect Tanzania experience tailored just for you"
- **Single Button**: "Start Planning" → `/contact`

**Styling**:
- Background: Dark brown (`#251b0b`)
- Text: White
- Button: Large, orange background
- Padding: 16-20 (py-16 md:py-20)

## About Page (`/about`)

### Structure

#### 1. Hero Section
- Full-width banner with background image
- Heading: "About KiliSafari Organizing"
- Subheading: Brief tagline

#### 2. Company Story Section
**Content**:
- **Heading**: "Experience, Passion, and Local Knowledge"
- **Paragraphs**: 3-4 paragraphs covering:
  - We are an experienced group of tour operators in Tanzania with over 10 years of experience
  - We ensure safety, reliability, and 24-hour support for all our clients
  - We offer comprehensive services including transportation, airport pickups, hotel transfers, and more
  - Our team consists of expert guides who are passionate about sharing Tanzania's wonders
  - We are committed to sustainable tourism and supporting local communities
  - We provide personalized itineraries tailored to each client's preferences and budget

#### 3. Image Gallery Section
- 3 image containers in a grid layout
- Leave empty for client to provide images
- Aspect ratio: 4:3 or 16:9
- Hover effects on images

#### 4. Our Services Section
**Layout**: 4-column grid

**Services**:
1. **Safari Tours**
   - Icon: Binoculars or Camera
   - Description: Wildlife safaris across Tanzania's national parks

2. **Mountain Trekking**
   - Icon: Mountain
   - Description: Guided climbs of Kilimanjaro, Meru, and more

3. **Beach Holidays**
   - Icon: Umbrella or Sun
   - Description: Relaxing getaways in Zanzibar

4. **Cultural Tours**
   - Icon: Users or Globe
   - Description: Authentic cultural experiences with local communities

5. **Transportation**
   - Icon: Car or Bus
   - Description: Airport transfers and inter-city transport

6. **Accommodation**
   - Icon: Hotel or Home
   - Description: Hotel bookings and lodge arrangements

#### 5. Why Choose Us Section
Similar to homepage but with more detailed descriptions

#### 6. Team Section (Optional)
- Grid of team member cards
- Photo placeholders
- Names and roles
- Brief bios

#### 7. CTA Section
- "Ready to Start Your Adventure?"
- Button to contact page

## Northern Circuit Page (`/northern-circuit`)

### Structure

#### 1. Hero Section
- **Heading**: "Northern Circuit Safaris"
- **Subheading**: "Tanzania's Wildlife Crown Jewels"
- **Description**: 2-3 sentences about the Northern Circuit being the most spectacular wildlife destination

#### 2. Introduction Section
- Brief overview of what makes Northern Circuit special
- Why it's considered the crown jewel of African safaris

#### 3. Destinations Grid
**Layout**: 3-column grid (2-column tablet, 1-column mobile)

**Destinations** (each with image placeholder, title, description ~500 characters, highlights list, "Book Now" button):

1. **Serengeti National Park**
   - Description: Home to the Great Migration where 2 million wildebeest traverse endless plains. Hosts incredible wildlife diversity including all Big Five animals.
   - Highlights:
     - Home to the Great Migration
     - Endless plains teeming with Big Five
     - Iconic African wilderness experience
   - Image: Empty placeholder

2. **Ngorongoro Crater**
   - Description: The world's largest inactive volcanic caldera supporting 25,000 large animals year-round. Offers virtually guaranteed Big Five sightings.
   - Highlights:
     - "Africa's Eden" - highest concentration of wildlife
     - Unique crater ecosystem
     - Guaranteed wildlife viewing
   - Image: Empty placeholder

3. **Lake Manyara National Park**
   - Description: Renowned for unique tree-climbing lions and massive flocks of pink flamingos. Offers incredible diversity with groundwater forests.
   - Highlights:
     - Pink flamingo spectacles
     - Tree-climbing lions
     - Diverse ecosystems in compact area
   - Image: Empty placeholder

4. **Tarangire National Park**
   - Description: Famous for massive elephant herds and iconic baobab trees. During dry season, attracts enormous wildlife concentrations.
   - Highlights:
     - Massive elephant herds
     - Ancient baobab trees
     - Seasonal wildlife concentrations
   - Image: Empty placeholder

5. **Arusha National Park**
   - Description: Small but diverse park dominated by Mount Meru offering unique walking safaris and canoeing adventures.
   - Highlights:
     - Walking safaris and canoeing
     - Mount Meru backdrop
     - Close to Arusha city
   - Image: Empty placeholder

#### 4. CTA Section
- "Ready for Your Northern Circuit Adventure?"
- Two buttons: "Book Now" and "Contact Us"

## Southern Circuit Page (`/southern-circuit`)

### Structure
**Same layout as Northern Circuit page**

#### Destinations (each ~500 characters):

1. **Ruaha National Park**
   - Description: Tanzania's largest national park, remote and wild. Famous for large elephant populations and predators including lions, leopards, and cheetahs.
   - Highlights:
     - Tanzania's largest park
     - Remote wilderness experience
     - Exceptional predator sightings

2. **Nyerere National Park (Selous)**
   - Description: One of Africa's largest protected areas. Offers boat safaris, walking safaris, and traditional game drives in pristine wilderness.
   - Highlights:
     - Boat and walking safaris
     - UNESCO World Heritage Site
     - Diverse wildlife and landscapes

3. **Mikumi National Park**
   - Description: Easily accessible park with reliable wildlife viewing. Part of the greater Selous ecosystem with abundant plains game.
   - Highlights:
     - Easy access from Dar es Salaam
     - Reliable wildlife sightings
     - Beautiful landscapes

4. **Udzungwa Mountains National Park**
   - Description: Biodiversity hotspot with endemic species. Offers hiking through pristine forests to spectacular waterfalls.
   - Highlights:
     - Unique primate species
     - Hiking and waterfalls
     - Biodiversity hotspot

## Kilimanjaro Page (`/kilimanjaro`)

### Structure

#### 1. Hero Section
- **Heading**: "Climb Mount Kilimanjaro"
- **Subheading**: "Conquer Africa's Highest Peak"
- **Description**: Inspiring text about reaching the Roof of Africa

#### 2. Introduction Section
- Overview of Kilimanjaro (5,895m / 19,341ft)
- Why climb with KiliSafari
- Success rates and safety record

#### 3. Routes Grid
**Layout**: 3-column grid

**Routes** (each with image placeholder, duration, difficulty, success rate, highlights, description, "Choose Route" button):

1. **Machame Route ("Whiskey Route")**
   - Duration: 6-7 days
   - Difficulty: Moderate to Challenging
   - Success Rate: ~85%
   - Description: Most popular route offering stunning scenery and excellent acclimatization. Approaches from the south through lush rainforest.
   - Highlights:
     - Scenic and diverse landscapes
     - Good acclimatization profile
     - "Climb high, sleep low" approach
     - Challenging but rewarding

2. **Marangu Route ("Coca-Cola Route")**
   - Duration: 5-6 days
   - Difficulty: Moderate
   - Success Rate: ~75%
   - Description: Only route with hut accommodation. Gradual ascent through varied vegetation zones. Same path up and down.
   - Highlights:
     - Hut accommodation (no camping)
     - Gradual, steady ascent
     - Most established route
     - Good for beginners

3. **Rongai Route**
   - Duration: 6-7 days
   - Difficulty: Moderate
   - Success Rate: ~80%
   - Description: Approaches from the north (Kenya border). Quieter route with gradual ascent and beautiful wilderness scenery.
   - Highlights:
     - Less crowded
     - Gradual ascent
     - Approaches from north
     - Good wildlife viewing

4. **Lemosho Route**
   - Duration: 7-8 days
   - Difficulty: Moderate
   - Success Rate: ~90%
   - Description: Scenic route with excellent acclimatization. Approaches from the west through pristine wilderness.
   - Highlights:
     - Highest success rate
     - Excellent acclimatization
     - Stunning scenery
     - Less crowded

5. **Northern Circuit**
   - Duration: 8-9 days
   - Difficulty: Moderate
   - Success Rate: ~95%
   - Description: Longest and newest route. Circles around the northern slopes offering unparalleled views and acclimatization.
   - Highlights:
     - Highest success rate
     - Most scenic route
     - Best acclimatization
     - Remote and pristine

#### 4. What's Included Section
- Professional mountain guides
- Porters and support crew
- All park fees and permits
- Camping equipment (tents, sleeping mats)
- Meals on the mountain
- Emergency oxygen
- First aid kit

#### 5. Preparation Tips Section
- Physical fitness requirements
- Best time to climb
- What to pack
- Altitude sickness prevention

#### 6. CTA Section
- "Ready to Reach the Summit?"
- Buttons: "Choose Your Route" and "Get Quote"

## Mt Meru Page (`/mt-meru`)

### Structure
Similar to Kilimanjaro page but focused on Mt Meru

#### Content:
- **Height**: 4,566m (14,980ft)
- **Duration**: 3-4 days
- **Difficulty**: Moderate to Challenging
- **Description**: Tanzania's second-highest peak. Excellent acclimatization trek before Kilimanjaro. Stunning views of Kilimanjaro from the summit.

#### Routes:
1. **Momella Route** (only route)
   - 3-4 days
   - Passes through diverse vegetation zones
   - Wildlife viewing opportunities
   - Spectacular crater views

## Oldonyo Lengai Page (`/oldonyo-lengai`)

### Structure
Similar layout to other trekking pages

#### Content:
- **Height**: 2,962m (9,718ft)
- **Name Meaning**: "Mountain of God" in Maasai
- **Unique Feature**: World's only active carbonatite volcano
- **Duration**: 1-2 days
- **Difficulty**: Challenging (steep ascent)
- **Description**: Sacred mountain to the Maasai people. Night climb to reach summit for sunrise. Active volcano with unique lava.

## Lushoto Page (`/lushoto`)

### Structure
Similar to other trekking pages

#### Content:
- **Location**: Usambara Mountains, Tanga Region
- **Duration**: 2-5 days (various trails)
- **Difficulty**: Easy to Moderate
- **Description**: Scenic mountain town with cool climate. Beautiful hiking trails through forests and villages. Cultural experiences with local communities.

#### Highlights:
- Scenic mountain landscapes
- Cool climate (escape the heat)
- Cultural village visits
- Waterfalls and viewpoints
- Local markets and crafts

## Udzungwa Page (`/udzungwa`)

### Structure
Similar to other trekking pages

#### Content:
- **Location**: Udzungwa Mountains National Park
- **Duration**: 1-3 days (various trails)
- **Difficulty**: Easy to Moderate
- **Description**: Biodiversity hotspot with endemic species. Hiking through pristine forests to spectacular waterfalls. Primate watching.

#### Highlights:
- Sanje Waterfall (170m)
- Endemic primate species
- Pristine rainforest
- Bird watching paradise
- Swimming in natural pools

## Zanzibar Page (`/zanzibar`)

### Structure

#### 1. Hero Section
- **Heading**: "Zanzibar"
- **Subheading**: "The Spice Island Paradise"
- **Description**: Discover the magic of Zanzibar where pristine beaches meet rich cultural heritage

#### 2. Introduction Section
- Overview of Zanzibar's history and culture
- Why visit Zanzibar
- Best time to visit

#### 3. Tours Grid
**Layout**: 3-column grid

**Tours** (each with image placeholder, duration, description, highlights, "Book Experience" button):

1. **Stone Town Tour**
   - Duration: Half Day
   - Description: Historic UNESCO World Heritage Site exploration
   - Highlights:
     - UNESCO World Heritage Site
     - Spice markets and bazaars
     - Historical architecture
     - Sultan's Palace

2. **Prison Island Tour**
   - Duration: Half Day
   - Description: Giant tortoises and history
   - Highlights:
     - Giant Aldabra tortoises
     - Historical prison ruins
     - Snorkeling opportunities
     - Coral reefs

3. **Spice Tour**
   - Duration: Half Day
   - Description: Aromatic spice plantation experience
   - Highlights:
     - Tropical spice plantations
     - Fresh fruit tasting
     - Traditional cooking demonstrations
     - Learn about spice history

4. **Nungwi Turtle Sanctuary**
   - Duration: Half Day
   - Description: Marine conservation experience
   - Highlights:
     - Sea turtle conservation
     - Marine education
     - Beautiful Nungwi beach
     - Swimming with turtles

5. **The Rock Restaurant**
   - Duration: Evening
   - Description: Iconic dining experience
   - Highlights:
     - Unique rock location
     - Fresh seafood
     - Stunning ocean views
     - Romantic atmosphere

6. **Nakupenda Beach**
   - Duration: Full Day
   - Description: Sandbank paradise
   - Highlights:
     - Pristine sandbank
     - Crystal clear waters
     - Seafood barbecue
     - Snorkeling

7. **Sunset Dhow Cruise**
   - Duration: Evening
   - Description: Romantic traditional sailing
   - Highlights:
     - Traditional dhow sailing
     - Spectacular sunsets
     - Romantic atmosphere
     - Refreshments included

#### 4. Beach Paradise Section
- Two-column layout (text + image)
- Description of Zanzibar's beaches
- List of beach activities
- CTA button

#### 5. CTA Section
- "Ready to Experience Zanzibar Magic?"
- Buttons: "Plan Your Trip" and "Get Quote"

## Contact Page (`/contact`)

### Structure

#### 1. Hero Section
- **Heading**: "Get in Touch"
- **Subheading**: "Let's Plan Your Perfect Tanzania Adventure"

#### 2. Contact Form Section
**Layout**: Two-column (form left, info right)

**Form Fields**:
- Full Name (required)
- Email Address (required)
- Phone Number (optional)
- Country (dropdown)
- Tour Interest (dropdown):
  - Safari Tours
  - Mountain Trekking
  - Zanzibar Beach Holiday
  - Cultural Tours
  - Custom Itinerary
- Preferred Travel Dates (date picker)
- Number of Travelers (number input)
- Budget Range (dropdown)
- Message/Special Requests (textarea)
- Submit Button: "Send Inquiry"

**Contact Information Card**:
- **Address**:
  - KiliSafari Organizing
  - [Street Address]
  - Dar es Salaam, Tanzania
  - P.O. Box [Number]

- **Phone**: +255 [Phone Number]
- **Email**: info@kilisafari.com (or similar)
- **WhatsApp**: +255 [WhatsApp Number]

- **Office Hours**:
  - Monday - Friday: 8:00 AM - 6:00 PM
  - Saturday: 9:00 AM - 4:00 PM
  - Sunday: Closed

- **Social Media Links**:
  - Facebook
  - Instagram
  - Twitter
  - TripAdvisor

#### 3. Why Contact Us Section
- 3-column grid with benefits:
  - Fast Response (within 24 hours)
  - Expert Advice (10+ years experience)
  - Custom Itineraries (tailored to your needs)

#### 4. Map Section (Optional)
- Embedded Google Maps showing office location

#### 5. FAQ Section
- Accordion with common questions:
  - What's included in safari packages?
  - Do I need a visa for Tanzania?
  - What's the best time to visit?
  - How do I book a tour?
  - What payment methods do you accept?

## Footer Component

### Structure
**Layout**: 4-column grid on desktop, stacked on mobile

#### Column 1: Company Info
- Company logo
- Tagline: "Your gateway to Tanzania's wonders"
- Brief description (2-3 sentences)
- Social media icons

#### Column 2: Quick Links
- About Us
- Northern Circuit
- Southern Circuit
- Zanzibar
- Kilimanjaro
- Contact

#### Column 3: Safari Tours
- Day Safaris
- Cultural Safaris
- Hidden Gems
- Historical Sites
- Custom Itineraries

#### Column 4: Contact Info
- Address with MapPin icon
- Phone with Phone icon
- Email with Mail icon
- WhatsApp with MessageCircle icon

#### Bottom Bar
- Copyright: "© 2025 KiliSafari Organizing. All rights reserved."
- Established year
- Optional: Privacy Policy | Terms & Conditions

### Styling
- Background: Black (`bg-black`)
- Text: White and gray-300
- Links hover: Orange (`#ff9800`)
- Border top: Gray-700
- Padding: py-12

## WhatsApp Float Component

### Structure
- Fixed position button (bottom-right corner)
- Circular button with WhatsApp icon
- Green background (#25D366 - WhatsApp green)
- Hover effect: Scale up slightly
- Click: Opens WhatsApp chat with pre-filled message

### Positioning
- Bottom: 24px (mobile), 32px (desktop)
- Right: 24px (mobile), 32px (desktop)
- Z-index: 50
- Size: 56px x 56px (mobile), 64px x 64px (desktop)

### Functionality
- Link to: `https://wa.me/255[PHONE]?text=Hello, I'm interested in booking a tour with KiliSafari`
- Opens in new tab
- Smooth fade-in animation on page load

## Design System Details

### Color Usage Guidelines

#### Primary Dark Brown (`#251b0b`)
- Main headings
- Navigation text
- Body text
- Footer background alternative
- Dark overlays

#### Primary Orange (`#ff9800`)
- All CTA buttons
- Hover states
- Active links
- Icons in feature sections
- Accent elements
- Stats numbers
- Badges

#### Secondary Green (`#536e2b`)
- Secondary buttons
- Badges
- Highlights
- Alternative accent color
- Success states

#### Neutral Colors
- White: Backgrounds, text on dark
- Gray-50: Section backgrounds
- Gray-100-300: Borders, subtle backgrounds
- Gray-600-700: Secondary text
- Black: Footer, overlays

### Typography Scale
- **Hero Headings**: text-4xl md:text-6xl lg:text-7xl
- **Section Headings**: text-3xl md:text-4xl lg:text-5xl
- **Card Titles**: text-xl md:text-2xl
- **Body Text**: text-base md:text-lg
- **Small Text**: text-sm
- **Button Text**: text-base md:text-lg

### Spacing System
- **Section Padding**: py-16 md:py-20
- **Container Max Width**: max-w-7xl
- **Grid Gaps**: gap-6 md:gap-8
- **Card Padding**: p-4 md:p-6

### Border Radius
- **Cards**: rounded-lg (8px)
- **Buttons**: rounded-md (6px)
- **Images**: rounded-lg or rounded-2xl
- **Badges**: rounded-full

### Shadows
- **Cards**: shadow-lg hover:shadow-xl
- **Buttons**: shadow-md
- **Navigation**: shadow-sm

### Transitions
- **Duration**: 200-300ms
- **Easing**: ease-in-out
- **Properties**: transform, opacity, colors, shadow

### Hover Effects
- **Cards**: Scale up images (scale-105), increase shadow
- **Buttons**: Darken background, scale up slightly
- **Links**: Change color to orange
- **Icons**: Scale up (scale-105)

## Image Guidelines

### Image Placeholders
- Use empty `<div>` containers with aspect ratios
- Add descriptive comments: `{/* Image: [Description] - Client to provide */}`
- Suggested aspect ratios:
  - Hero images: 16:9 or full viewport
  - Destination cards: 4:3
  - Portrait images: 3:4
  - Square images: 1:1

### Image Optimization
- Use Next.js Image component
- Add proper `alt` text
- Use `loading="lazy"` for below-fold images
- Use `priority` for hero images
- Define `sizes` attribute for responsive images
- Quality: 85 for hero images, 75 for others

## Responsive Breakpoints
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

### Mobile-Specific Optimizations
- Stack columns vertically
- Increase touch target sizes (min 44px)
- Simplify navigation to hamburger menu
- Reduce text sizes appropriately
- Optimize image sizes for mobile
- Hide non-essential elements
- Increase spacing for readability

## SEO & Metadata

### Page Titles Format
- Homepage: "KiliSafari Organizing - Discover Tanzania's Wild Beauty"
- Other pages: "[Page Name] | KiliSafari Organizing"

### Meta Descriptions
- Homepage: "Experience authentic safaris, epic mountain treks, and cultural adventures in Tanzania with KiliSafari Organizing. 10+ years of expertise in creating unforgettable African journeys."
- Keep under 160 characters
- Include relevant keywords
- Compelling call-to-action

### Keywords
- Tanzania safari
- Kilimanjaro trekking
- Serengeti tours
- Zanzibar holidays
- Northern Circuit safari
- Tanzania tour operator
- African wildlife safari
- Mount Kilimanjaro climb

## Accessibility Requirements
- Semantic HTML elements
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast ratios (WCAG AA minimum)
- Screen reader friendly

## Performance Optimizations
- Lazy load images below fold
- Optimize image sizes and formats
- Minimize JavaScript bundle
- Use CSS transforms for animations
- Implement code splitting
- Add loading states
- Optimize font loading
- Minimize layout shifts

## Content Guidelines

### Tone of Voice
- Professional yet warm and welcoming
- Adventurous and inspiring
- Knowledgeable and trustworthy
- Passionate about Tanzania
- Customer-focused

### Writing Style
- Clear and concise
- Active voice
- Descriptive and evocative
- Benefit-focused
- Call-to-action oriented

### Content Length
- Hero sections: Brief and impactful
- Descriptions: 100-500 characters depending on context
- About page: 500-1000 words
- Destination pages: 200-300 words per destination

## Call-to-Action Strategy

### Primary CTAs
- "Discover Tanzania"
- "Book Now"
- "Start Planning"
- "Get Quote"
- "Contact Us"

### Secondary CTAs
- "Learn More"
- "View Details"
- "Explore [Destination]"
- "Choose Route"

### CTA Placement
- Hero section: 1 primary CTA
- End of each section: Relevant CTA
- Destination cards: "Book Now" or "Explore"
- Footer: Contact information
- Floating WhatsApp button: Always visible

## Additional Features to Implement

### Interactive Elements
- Image galleries with lightbox
- Accordion FAQs
- Dropdown menus with smooth animations
- Hover effects on cards
- Smooth scroll to sections
- Back to top button

### Forms
- Contact form with validation
- Quote request form
- Newsletter signup
- Booking inquiry form

### Social Proof
- Customer testimonials
- Star ratings
- Trust badges
- Partner logos
- Social media feeds (optional)

## Testing Checklist

### Functionality
- [ ] All links work correctly
- [ ] Forms submit properly
- [ ] Navigation works on all devices
- [ ] Dropdowns function correctly
- [ ] WhatsApp button opens correctly
- [ ] Images load properly

### Responsive Design
- [ ] Test on mobile (320px - 480px)
- [ ] Test on tablet (768px - 1024px)
- [ ] Test on desktop (1280px+)
- [ ] Test on large screens (1920px+)
- [ ] Check landscape and portrait orientations

### Performance
- [ ] Page load time < 3 seconds
- [ ] Images optimized
- [ ] No layout shifts
- [ ] Smooth animations
- [ ] No console errors

### Browser Compatibility
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast sufficient
- [ ] Focus indicators visible
- [ ] Alt text present

## Final Notes

### Important Reminders
1. **Leave ALL image containers empty** - Client will provide images later
2. **Use exact brand colors** - No substitutions
3. **Make it award-winning** - Not boring or generic
4. **Mobile-first approach** - Optimize for mobile devices
5. **Use cool shadcn components** - Accordion, cards, dropdowns, etc.
6. **Smooth animations** - Professional and polished
7. **All buttons must link to correct pages** - Especially contact page
8. **Consistent styling** - Follow design system throughout
9. **Professional photography placeholders** - Descriptive comments
10. **Test thoroughly** - All devices and browsers

### Success Criteria
- Modern, visually stunning design
- Fast loading and smooth performance
- Mobile-friendly and responsive
- Easy navigation and user flow
- Clear calls-to-action
- Professional and trustworthy appearance
- Showcases Tanzania's beauty effectively
- Converts visitors to inquiries

---

**This prompt provides complete specifications for building an award-winning tourism website for KiliSafari Organizing. Follow all guidelines carefully to create a professional, modern, and conversion-optimized website that stands out from typical AI-generated sites.**
