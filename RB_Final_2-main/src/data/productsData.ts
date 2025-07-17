export interface Product {
  title: string;
  image: string;
  category: string;
  subcategory: string;
  path: string;
  description?: string;
}

const allProducts: Product[] = [
  // SCHOOL & TEAM SPORTS
  // Rugby Kits
  {
    title: 'Rugby Jerseys',
    image: '/sublimated-card.jpg',
    category: 'School & Team Sports',
    subcategory: 'Rugby Kits',
    path: '/products/rugby-jerseys',
    description: 'Professional rugby jerseys for teams'
  },
  {
    title: 'Rugby Shorts',
    image: '/shorts-card.jpg',
    category: 'School & Team Sports',
    subcategory: 'Rugby Kits',
    path: '/products/rugby-shorts',
    description: 'Durable rugby shorts for performance'
  },
  {
    title: 'Full Rugby Kit',
    image: '/full-kit-card.jpg',
    category: 'School & Team Sports',
    subcategory: 'Rugby Kits',
    path: '/products/full-rugby-kit',
    description: 'Complete rugby kit with jersey and shorts'
  },
  {
    title: 'Rugby Flag Line',
    image: '/category_rugby.jpg',
    category: 'School & Team Sports',
    subcategory: 'Rugby Kits',
    path: '/products/rugby-flag-line',
    description: 'Professional rugby flag line equipment'
  },
  {
    title: 'Pole Protectors',
    image: '/category_rugby.jpg',
    category: 'School & Team Sports',
    subcategory: 'Rugby Kits',
    path: '/products/pole-protectors',
    description: 'Safety pole protectors for rugby fields'
  },

  // Netball Kits
  {
    title: 'Netball Dresses',
    image: 'https://images.pexels.com/photos/8007513/pexels-photo-8007513.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'School & Team Sports',
    subcategory: 'Netball Kits',
    path: '/products/netball-dresses',
    description: 'Professional netball dresses for teams'
  },
  {
    title: 'Netball Skirts',
    image: 'https://images.pexels.com/photos/8007514/pexels-photo-8007514.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'School & Team Sports',
    subcategory: 'Netball Kits',
    path: '/products/netball-skirts',
    description: 'Comfortable netball skirts with shorts'
  },
  {
    title: 'Full Netball Kit',
    image: 'https://images.pexels.com/photos/8007513/pexels-photo-8007513.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'School & Team Sports',
    subcategory: 'Netball Kits',
    path: '/products/full-netball-kit',
    description: 'Complete netball kit for teams'
  },

  // Cricket Kits
  {
    title: 'Cricket Whites',
    image: 'https://images.pexels.com/photos/8007516/pexels-photo-8007516.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'School & Team Sports',
    subcategory: 'Cricket Kits',
    path: '/products/cricket-whites',
    description: 'Traditional cricket whites for matches'
  },
  {
    title: 'Cricket Training Kit',
    image: 'https://images.pexels.com/photos/8007516/pexels-photo-8007516.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'School & Team Sports',
    subcategory: 'Cricket Kits',
    path: '/products/cricket-training-kit',
    description: 'Cricket training gear for practice'
  },
  {
    title: 'Full Cricket Kit',
    image: 'https://images.pexels.com/photos/8007516/pexels-photo-8007516.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'School & Team Sports',
    subcategory: 'Cricket Kits',
    path: '/products/full-cricket-kit',
    description: 'Complete cricket kit for teams'
  },

  // Hockey Kits
  {
    title: 'Hockey Jerseys',
    image: 'https://images.pexels.com/photos/163452/hockey-ice-hockey-sport-163452.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'School & Team Sports',
    subcategory: 'Hockey Kits',
    path: '/products/hockey-jerseys',
    description: 'Professional hockey jerseys'
  },
  {
    title: 'Hockey Shorts',
    image: 'https://images.pexels.com/photos/163452/hockey-ice-hockey-sport-163452.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'School & Team Sports',
    subcategory: 'Hockey Kits',
    path: '/products/hockey-shorts',
    description: 'Durable hockey shorts'
  },
  {
    title: 'Full Hockey Kit',
    image: 'https://images.pexels.com/photos/163452/hockey-ice-hockey-sport-163452.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'School & Team Sports',
    subcategory: 'Hockey Kits',
    path: '/products/full-hockey-kit',
    description: 'Complete hockey kit for teams'
  },

  // Athletics Kits
  {
    title: 'Track & Field Uniforms',
    image: 'https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'School & Team Sports',
    subcategory: 'Athletics Kits',
    path: '/products/track-field-uniforms',
    description: 'Professional track and field uniforms'
  },
  {
    title: 'Running Vests',
    image: 'https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'School & Team Sports',
    subcategory: 'Athletics Kits',
    path: '/products/running-vests',
    description: 'Lightweight running vests'
  },
  {
    title: 'Ski Pants',
    image: 'https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'School & Team Sports',
    subcategory: 'Athletics Kits',
    path: '/products/ski-pants',
    description: 'Athletic ski pants for winter sports'
  },
  {
    title: 'Leggings',
    image: 'https://images.pexels.com/photos/4761779/pexels-photo-4761779.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'School & Team Sports',
    subcategory: 'Athletics Kits',
    path: '/products/athletics-leggings',
    description: 'Performance athletics leggings'
  },
  {
    title: 'Skorts',
    image: 'https://images.pexels.com/photos/8007514/pexels-photo-8007514.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'School & Team Sports',
    subcategory: 'Athletics Kits',
    path: '/products/skorts',
    description: 'Athletic skorts for sports'
  },

  // OTHER SPORTS & CLUBS
  // Soccer Kits
  {
    title: 'Soccer Jerseys',
    image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Other Sports & Clubs',
    subcategory: 'Soccer Kits',
    path: '/products/soccer-jerseys',
    description: 'Professional soccer jerseys'
  },
  {
    title: 'Soccer Shorts',
    image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg',
    category: 'Other Sports & Clubs',
    subcategory: 'Soccer Kits',
    path: '/products/soccer-shorts',
    description: 'Durable soccer shorts'
  },
  {
    title: 'Full Soccer Kit',
    image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Other Sports & Clubs',
    subcategory: 'Soccer Kits',
    path: '/products/full-soccer-kit',
    description: 'Complete soccer kit for teams'
  },

  // Golf Apparel
  {
    title: 'Golf Polo Shirts',
    image: 'https://images.pexels.com/photos/6577527/pexels-photo-6577527.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Other Sports & Clubs',
    subcategory: 'Golf Apparel',
    path: '/products/golf-polo-shirts',
    description: 'Premium golf polo shirts'
  },
  {
    title: 'Golf Dresses',
    image: 'https://images.pexels.com/photos/6577527/pexels-photo-6577527.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Other Sports & Clubs',
    subcategory: 'Golf Apparel',
    path: '/products/golf-dresses',
    description: 'Elegant golf dresses for women'
  },

  // Darts Shirts
  {
    title: 'Darts Shirts',
    image: 'https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Other Sports & Clubs',
    subcategory: 'Darts Shirts',
    path: '/products/darts-shirts',
    description: 'Professional darts shirts'
  },

  // Fishing Gear
  {
    title: 'Fishing Long Sleeve with Cap',
    image: 'https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Other Sports & Clubs',
    subcategory: 'Fishing Gear',
    path: '/products/fishing-long-sleeve-cap',
    description: 'UV protection fishing apparel with cap'
  },

  // SCHOOLWEAR & MATRIC APPAREL
  // Matric Jackets
  {
    title: 'Standard Matric Jacket',
    image: 'https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Schoolwear & Matric Apparel',
    subcategory: 'Matric Jackets',
    path: '/products/standard-matric-jacket',
    description: 'Classic matric jacket design'
  },
  {
    title: 'Premium Matric Jacket',
    image: 'https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Schoolwear & Matric Apparel',
    subcategory: 'Matric Jackets',
    path: '/products/premium-matric-jacket',
    description: 'Premium matric jacket with advanced features'
  },

  // Tracksuits & Hoodies
  {
    title: 'School Tracksuit',
    image: 'https://images.pexels.com/photos/9909147/pexels-photo-9909147.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Schoolwear & Matric Apparel',
    subcategory: 'Tracksuits & Hoodies',
    path: '/products/school-tracksuit',
    description: 'Custom school tracksuits'
  },
  {
    title: 'School Hoodie',
    image: 'https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Schoolwear & Matric Apparel',
    subcategory: 'Tracksuits & Hoodies',
    path: '/products/school-hoodie',
    description: 'Comfortable school hoodies'
  },

  // Female Apparel
  {
    title: 'Skirts (Junior + Senior)',
    image: 'https://images.pexels.com/photos/8007514/pexels-photo-8007514.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Schoolwear & Matric Apparel',
    subcategory: 'Female Apparel',
    path: '/products/school-skirts',
    description: 'School skirts for junior and senior students'
  },
  {
    title: 'Hotpants (Junior + Senior)',
    image: 'https://images.pexels.com/photos/8007514/pexels-photo-8007514.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Schoolwear & Matric Apparel',
    subcategory: 'Female Apparel',
    path: '/products/school-hotpants',
    description: 'School hotpants for junior and senior students'
  },
  {
    title: 'Flair Dresses',
    image: 'https://images.pexels.com/photos/8007513/pexels-photo-8007513.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Schoolwear & Matric Apparel',
    subcategory: 'Female Apparel',
    path: '/products/flair-dresses',
    description: 'Stylish flair dresses for school'
  },

  // Jackets (Schoolwear)
  {
    title: 'Softshell Jackets',
    image: 'https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Schoolwear & Matric Apparel',
    subcategory: 'Jackets',
    path: '/products/school-softshell-jackets',
    description: 'Weather-resistant softshell jackets'
  },
  {
    title: 'Bomber Jackets',
    image: 'https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Schoolwear & Matric Apparel',
    subcategory: 'Jackets',
    path: '/products/school-bomber-jackets',
    description: 'Stylish bomber jackets for school'
  },
  {
    title: 'Puffer Jackets',
    image: 'https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Schoolwear & Matric Apparel',
    subcategory: 'Jackets',
    path: '/products/school-puffer-jackets',
    description: 'Warm puffer jackets for winter'
  },

  // CORPORATE & STAFF APPAREL
  // Shirts & Tops
  {
    title: 'Staff Shirts',
    image: 'https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Corporate & Staff Apparel',
    subcategory: 'Shirts & Tops',
    path: '/products/staff-shirts',
    description: 'Professional staff shirts'
  },
  {
    title: 'Round Neck Shirts',
    image: 'https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Corporate & Staff Apparel',
    subcategory: 'Shirts & Tops',
    path: '/products/round-neck-shirts',
    description: 'Comfortable round neck shirts'
  },
  {
    title: 'Long Sleeve T-Shirts',
    image: 'https://images.pexels.com/photos/4753878/pexels-photo-4753878.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Corporate & Staff Apparel',
    subcategory: 'Shirts & Tops',
    path: '/products/corporate-long-sleeve-tshirts',
    description: 'Professional long sleeve t-shirts'
  },

  // Corporate Jackets
  {
    title: 'Softshell Jackets',
    image: 'https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Corporate & Staff Apparel',
    subcategory: 'Jackets',
    path: '/products/corporate-softshell-jackets',
    description: 'Professional softshell jackets'
  },
  {
    title: 'Bomber Jackets',
    image: 'https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Corporate & Staff Apparel',
    subcategory: 'Jackets',
    path: '/products/corporate-bomber-jackets',
    description: 'Corporate bomber jackets'
  },
  {
    title: 'Corporate Jackets',
    image: 'https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Corporate & Staff Apparel',
    subcategory: 'Jackets',
    path: '/products/corporate-jackets',
    description: 'Professional corporate jackets'
  },
  {
    title: 'Bonded Jackets',
    image: 'https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Corporate & Staff Apparel',
    subcategory: 'Jackets',
    path: '/products/bonded-jackets',
    description: 'High-quality bonded jackets'
  },

  // Corporate Tracksuits & Warmups
  {
    title: 'Team Tracksuits',
    image: 'https://images.pexels.com/photos/8007515/pexels-photo-8007515.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Corporate & Staff Apparel',
    subcategory: 'Tracksuits & Warmups',
    path: '/products/corporate-team-tracksuits',
    description: 'Corporate team tracksuits'
  },

  // Corporate Golf Wear
  {
    title: 'Golf Polo Shirts',
    image: 'https://images.pexels.com/photos/6577527/pexels-photo-6577527.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Corporate & Staff Apparel',
    subcategory: 'Golf Wear',
    path: '/products/corporate-golf-polo-shirts',
    description: 'Corporate golf polo shirts'
  },
  {
    title: 'Golf Dresses',
    image: 'https://images.pexels.com/photos/6577527/pexels-photo-6577527.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Corporate & Staff Apparel',
    subcategory: 'Golf Wear',
    path: '/products/corporate-golf-dresses',
    description: 'Corporate golf dresses'
  },

  // Corporate Accessories
  {
    title: 'Ties',
    image: 'https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Corporate & Staff Apparel',
    subcategory: 'Accessories',
    path: '/products/corporate-ties',
    description: 'Corporate ties'
  },
  {
    title: 'Beanies',
    image: 'https://images.pexels.com/photos/3621192/pexels-photo-3621192.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Corporate & Staff Apparel',
    subcategory: 'Accessories',
    path: '/products/corporate-beanies',
    description: 'Corporate beanies'
  },
  {
    title: 'Caps',
    image: 'https://images.pexels.com/photos/3621192/pexels-photo-3621192.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Corporate & Staff Apparel',
    subcategory: 'Accessories',
    path: '/products/corporate-caps',
    description: 'Corporate caps'
  },

  // GYM & FITNESS APPAREL
  // Gym Tops
  {
    title: 'Performance T-Shirts',
    image: 'https://images.pexels.com/photos/4753878/pexels-photo-4753878.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Gym & Fitness Apparel',
    subcategory: 'Tops',
    path: '/products/performance-tshirts',
    description: 'High-performance gym t-shirts'
  },
  {
    title: 'Long Sleeve T-Shirts',
    image: 'https://images.pexels.com/photos/4753878/pexels-photo-4753878.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Gym & Fitness Apparel',
    subcategory: 'Tops',
    path: '/products/gym-long-sleeve-tshirts',
    description: 'Long sleeve fitness shirts'
  },
  {
    title: 'Crop Tops',
    image: 'https://images.pexels.com/photos/10105925/pexels-photo-10105925.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Gym & Fitness Apparel',
    subcategory: 'Tops',
    path: '/products/crop-tops',
    description: 'Stylish fitness crop tops'
  },
  {
    title: 'Gym Tees',
    image: 'https://images.pexels.com/photos/4753878/pexels-photo-4753878.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Gym & Fitness Apparel',
    subcategory: 'Tops',
    path: '/products/gym-tees',
    description: 'Comfortable gym tees'
  },

  // Gym Bottoms
  {
    title: 'Leggings',
    image: 'https://images.pexels.com/photos/4761779/pexels-photo-4761779.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Gym & Fitness Apparel',
    subcategory: 'Bottoms',
    path: '/products/gym-leggings',
    description: 'High-performance gym leggings'
  },
  {
    title: 'Compression Shorts',
    image: 'https://images.pexels.com/photos/7005684/pexels-photo-7005684.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Gym & Fitness Apparel',
    subcategory: 'Bottoms',
    path: '/products/compression-shorts',
    description: 'Compression shorts for training'
  },
  {
    title: 'Boardshorts',
    image: 'https://images.pexels.com/photos/7005684/pexels-photo-7005684.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Gym & Fitness Apparel',
    subcategory: 'Bottoms',
    path: '/products/boardshorts',
    description: 'Versatile boardshorts'
  },

  // Gym Outerwear
  {
    title: 'Gym Hoodies',
    image: 'https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Gym & Fitness Apparel',
    subcategory: 'Outerwear',
    path: '/products/gym-hoodies',
    description: 'Comfortable gym hoodies'
  },
  {
    title: 'Bomber Jackets',
    image: 'https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Gym & Fitness Apparel',
    subcategory: 'Outerwear',
    path: '/products/gym-bomber-jackets',
    description: 'Stylish gym bomber jackets'
  },
  {
    title: 'Puffer Jackets',
    image: 'https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Gym & Fitness Apparel',
    subcategory: 'Outerwear',
    path: '/products/gym-puffer-jackets',
    description: 'Warm puffer jackets for outdoor training'
  },
  {
    title: 'Softshell Jackets',
    image: 'https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Gym & Fitness Apparel',
    subcategory: 'Outerwear',
    path: '/products/gym-softshell-jackets',
    description: 'Weather-resistant fitness jackets'
  },

  // Lifestyle Apparel
  {
    title: 'Lifestyle Apparel',
    image: 'https://images.pexels.com/photos/4753878/pexels-photo-4753878.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Gym & Fitness Apparel',
    subcategory: 'Lifestyle Apparel',
    path: '/products/lifestyle-apparel',
    description: 'Casual lifestyle fitness apparel'
  },

  // ACCESSORIES & BRANDING
  // Socks
  {
    title: 'Long Socks',
    image: 'https://images.pexels.com/photos/3621192/pexels-photo-3621192.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Accessories & Branding',
    subcategory: 'Socks',
    path: '/products/long-socks',
    description: 'Custom long socks for teams'
  },
  {
    title: 'Short Socks',
    image: 'https://images.pexels.com/photos/3621192/pexels-photo-3621192.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Accessories & Branding',
    subcategory: 'Socks',
    path: '/products/short-socks',
    description: 'Custom short socks for teams'
  },

  // Headwear
  {
    title: 'Beanies',
    image: 'https://images.pexels.com/photos/3621192/pexels-photo-3621192.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Accessories & Branding',
    subcategory: 'Headwear',
    path: '/products/beanies',
    description: 'Custom beanies for teams'
  },
  {
    title: 'Caps',
    image: 'https://images.pexels.com/photos/3621192/pexels-photo-3621192.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Accessories & Branding',
    subcategory: 'Headwear',
    path: '/products/caps',
    description: 'Custom caps for teams'
  },
  {
    title: 'Bucket Hats',
    image: 'https://images.pexels.com/photos/3621192/pexels-photo-3621192.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Accessories & Branding',
    subcategory: 'Headwear',
    path: '/products/bucket-hats',
    description: 'Custom bucket hats for teams'
  },
  {
    title: 'Visor Caps',
    image: 'https://images.pexels.com/photos/3621192/pexels-photo-3621192.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Accessories & Branding',
    subcategory: 'Headwear',
    path: '/products/visor-caps',
    description: 'Custom visor caps for teams'
  },

  // Bags
  {
    title: 'Backpacks',
    image: 'https://images.pexels.com/photos/3621192/pexels-photo-3621192.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Accessories & Branding',
    subcategory: 'Bags',
    path: '/products/backpacks',
    description: 'Custom backpacks for teams'
  },
  {
    title: 'Tog Bags',
    image: 'https://images.pexels.com/photos/3621192/pexels-photo-3621192.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Accessories & Branding',
    subcategory: 'Bags',
    path: '/products/tog-bags',
    description: 'Custom tog bags for teams'
  },

  // Warmup & Training
  {
    title: 'Training Bibs',
    image: 'https://images.pexels.com/photos/8007515/pexels-photo-8007515.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Accessories & Branding',
    subcategory: 'Warmup & Training',
    path: '/products/training-bibs',
    description: 'Training bibs for practice'
  },
  {
    title: 'Bibs / Warm-up Vests',
    image: 'https://images.pexels.com/photos/8007515/pexels-photo-8007515.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Accessories & Branding',
    subcategory: 'Warmup & Training',
    path: '/products/warmup-vests',
    description: 'Warm-up vests for teams'
  },

  // Branding & Add-ons
  {
    title: 'Buffs',
    image: 'https://images.pexels.com/photos/3621192/pexels-photo-3621192.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Accessories & Branding',
    subcategory: 'Branding & Add-ons',
    path: '/products/buffs',
    description: 'Custom buffs for teams'
  },
  {
    title: 'Towels (Hand, Bath, Golf, Gym)',
    image: 'https://images.pexels.com/photos/3621192/pexels-photo-3621192.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Accessories & Branding',
    subcategory: 'Branding & Add-ons',
    path: '/products/custom-towels',
    description: 'Custom towels for various uses'
  },
  {
    title: 'Ties',
    image: 'https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Accessories & Branding',
    subcategory: 'Branding & Add-ons',
    path: '/products/custom-ties',
    description: 'Custom ties for teams'
  },
  {
    title: 'Wall Banners',
    image: 'https://images.pexels.com/photos/3621192/pexels-photo-3621192.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Accessories & Branding',
    subcategory: 'Branding & Add-ons',
    path: '/products/wall-banners',
    description: 'Custom wall banners for teams'
  },
  {
    title: 'Elastic Inserts',
    image: 'https://images.pexels.com/photos/3621192/pexels-photo-3621192.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    category: 'Accessories & Branding',
    subcategory: 'Branding & Add-ons',
    path: '/products/elastic-inserts',
    description: 'Elastic inserts for customization'
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'All') {
    return allProducts;
  }
  return allProducts.filter(product => product.category === category);
};

export const getProductsBySubcategory = (subcategory: string): Product[] => {
  return allProducts.filter(product => product.subcategory === subcategory);
};

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.path.includes(id));
};

export const getAllCategories = (): string[] => {
  return [...new Set(allProducts.map(product => product.category))];
};

export const getSubcategoriesByCategory = (category: string): string[] => {
  return [...new Set(allProducts
    .filter(product => product.category === category)
    .map(product => product.subcategory))];
};

export const getAllSubcategories = (): string[] => {
  return [...new Set(allProducts.map(product => product.subcategory))];
};

export default allProducts;