import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const blogPosts = [
  {
    id: 'laundry-sorting-guide',
    title: 'The Complete Guide to Sorting Your Laundry Like a Pro',
    excerpt: 'Learn the professional techniques that keep your clothes looking fresh and lasting longer.',
    content: `
# The Complete Guide to Sorting Your Laundry Like a Pro

Proper sorting is the foundation of excellent laundry care. Here's how professionals do it:

## Sort by Color
- **Whites**: Pure white items only
- **Lights**: Pastels, light grays, and off-whites
- **Darks**: Navy, black, deep colors
- **Bright Colors**: Reds, bright blues, vibrant colors

## Sort by Fabric Type
- **Delicates**: Silk, lace, fine knits
- **Everyday Cotton**: T-shirts, jeans, casual wear
- **Heavy Items**: Towels, bedding, thick sweaters

## Pro Tips
1. Always check pockets before sorting
2. Treat stains immediately before washing
3. Turn dark colors inside out to prevent fading
4. Separate new colored items for the first few washes

Remember: Taking an extra 5 minutes to sort properly can add years to your clothes' lifespan!
    `,
    date: 'August 20, 2025',
    readTime: '3 min read',
    category: 'Laundry Care'
  },
  {
    id: 'stain-removal-secrets',
    title: 'Emergency Stain Removal: What to Do Before We Pick Up',
    excerpt: 'Quick actions you can take to prevent permanent stains before our professional treatment.',
    content: `
# Emergency Stain Removal: What to Do Before We Pick Up

Time is critical when dealing with stains. Here's your emergency action plan:

## Immediate Actions (First 5 Minutes)
1. **Don't Rub**: Blot gently to avoid spreading
2. **Act Fast**: Fresh stains are always easier to remove
3. **Cool Water**: Rinse with cold water for most stains
4. **Avoid Heat**: Never use hot water on unknown stains

## Common Stains & Quick Fixes

### Blood Stains
- Rinse immediately with cold water
- Never use warm water (it sets the protein)
- Apply a small amount of salt if available

### Oil-Based Stains
- Sprinkle cornstarch or baby powder to absorb oil
- Let sit for 10-15 minutes before brushing off
- Avoid water initially

### Wine/Juice Stains
- Blot immediately
- Apply salt to absorb liquid
- Rinse with club soda if available

## What NOT to Do
- Don't use soap immediately (can set some stains)
- Don't apply heat
- Don't rub vigorously
- Don't mix different cleaning products

When in doubt, do minimal treatment and let our professionals handle it. We have specialized equipment and techniques for every type of stain!
    `,
    date: 'August 19, 2025',
    readTime: '4 min read',
    category: 'Stain Care'
  },
  {
    id: 'fabric-care-guide',
    title: 'Understanding Fabric Care Labels: Your Garment\'s Secret Language',
    excerpt: 'Decode those mysterious symbols and keep your clothes in perfect condition.',
    content: `
# Understanding Fabric Care Labels: Your Garment's Secret Language

Those little symbols on your clothes aren't just decoration – they're your guide to proper care!

## Washing Symbols
- **Tub with water**: Machine washable
- **Tub with hand**: Hand wash only
- **Tub with X**: Do not wash (dry clean only)
- **Numbers in tub**: Maximum temperature (°C)

## Drying Symbols
- **Square with circle**: Tumble dry
- **Square with lines**: Air dry
- **Square with curved line**: Hang to dry
- **Square with X**: Do not tumble dry

## Ironing Symbols
- **Iron with dots**: Temperature guide
  - 1 dot: Low heat (synthetic)
  - 2 dots: Medium heat (silk, wool)
  - 3 dots: High heat (cotton, linen)
- **Iron with X**: Do not iron

## Professional Care Symbols
- **Circle**: Dry clean
- **Circle with letter**: Specific dry cleaning solvent
- **Circle with X**: Do not dry clean

## Pro Tips for Longevity
1. Always check labels before washing
2. When in doubt, choose gentler settings
3. Group similar care requirements together
4. Keep a photo of care symbols on your phone for reference

At Nahati, we're experts in reading these labels and treating each garment according to its specific needs. Trust us to decode the mystery and keep your clothes looking their best!
    `,
    date: 'August 18, 2025',
    readTime: '5 min read',
    category: 'Fabric Care'
  },
  {
    id: 'seasonal-wardrobe-care',
    title: 'Seasonal Wardrobe Transitions: Storing and Caring for Off-Season Clothes',
    excerpt: 'Professional tips for storing seasonal clothes to keep them fresh and ready for next year.',
    content: `
# Seasonal Wardrobe Transitions: Storing and Caring for Off-Season Clothes

Proper seasonal storage prevents damage and keeps your clothes ready for next season.

## Pre-Storage Preparation
1. **Clean Everything**: Never store dirty clothes
2. **Repair Minor Issues**: Fix loose buttons, small tears
3. **Check for Stains**: Address any spots before storing
4. **Ensure Complete Dryness**: Moisture leads to mold and mildew

## Storage Methods

### Hanging Items
- Use padded hangers for jackets and coats
- Cover with breathable garment bags
- Avoid plastic covers (trap moisture)

### Folded Items
- Use acid-free tissue paper for delicates
- Cedar blocks for natural moth protection
- Vacuum storage bags for bulky items

### Special Care Items
- **Leather**: Clean and condition before storage
- **Wool**: Professional cleaning recommended
- **Formal Wear**: Consider professional storage services

## Storage Environment
- **Cool & Dry**: Avoid basements and attics
- **Dark**: Prevent sun fading
- **Clean**: Vacuum storage area first
- **Ventilated**: Allow air circulation

## Quick Retrieval Tips
- Label storage containers clearly
- Take photos of stored items
- Keep an inventory list
- Store frequently accessed items in front

## Common Storage Mistakes
1. Using regular cardboard boxes (attracts pests)
2. Storing in damp areas
3. Overpacking containers
4. Forgetting to check stored items periodically

Let Nahati handle your seasonal wardrobe transitions with our professional cleaning and storage preparation services!
    `,
    date: 'August 17, 2025',
    readTime: '6 min read',
    category: 'Seasonal Care'
  }
]

export { blogPosts }

export default function BlogPost({ title, excerpt, date, readTime, category, onReadMore }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="card group cursor-pointer"
      onClick={onReadMore}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-brand/10 text-brand rounded-full">
          {category}
        </span>
        <span className="text-xs text-gray-500">{readTime}</span>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand transition-colors line-clamp-2">
        {title}
      </h3>
      
      <p className="mt-2 text-gray-700 text-sm line-clamp-3">{excerpt}</p>
      
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-gray-500">{date}</span>
        <motion.span 
          className="text-brand text-sm font-medium group-hover:translate-x-1 transition-transform"
          whileHover={{ x: 4 }}
        >
          Read more →
        </motion.span>
      </div>
    </motion.article>
  )
}
