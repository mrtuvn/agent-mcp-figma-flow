export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
  unit: string;
  description: string;
  nutritionInfo?: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: 'vegetables',
    name: 'Fresh Vegetables',
    image: 'https://images.unsplash.com/photo-1609952578538-3d454550301d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBncm9jZXJ5JTIwc3RvcmV8ZW58MXx8fHwxNzU2NDUwNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    productCount: 25
  },
  {
    id: 'fruits',
    name: 'Organic Fruits',
    image: 'https://images.unsplash.com/photo-1621295239171-6f95272fdf45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZnJ1aXRzJTIwbWFya2V0fGVufDF8fHx8MTc1NjQ0MzY0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    productCount: 18
  },
  {
    id: 'bakery',
    name: 'Fresh Bakery',
    image: 'https://images.unsplash.com/photo-1679673987713-54f809ce417d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJyZWFkJTIwYmFrZXJ5fGVufDF8fHx8MTc1NjQxNzI1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    productCount: 12
  },
  {
    id: 'dairy',
    name: 'Dairy Products',
    image: 'https://images.unsplash.com/photo-1483619373149-740b4ce76d2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc2hvcHBpbmclMjBjYXJ0fGVufDF8fHx8MTc1NjM3NjY0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    productCount: 15
  }
];

export const products: Product[] = [
  // Vegetables
  {
    id: 'veg-001',
    name: 'Organic Spinach',
    price: 3.99,
    originalPrice: 4.99,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400',
    category: 'vegetables',
    rating: 4.5,
    inStock: true,
    unit: 'bunch',
    description: 'Fresh organic spinach leaves, perfect for salads and cooking. Rich in iron and vitamins.',
    nutritionInfo: {
      calories: 23,
      protein: '2.9g',
      carbs: '3.6g',
      fat: '0.4g'
    },
    tags: ['organic', 'fresh', 'leafy-greens']
  },
  {
    id: 'veg-002',
    name: 'Red Bell Peppers',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400',
    category: 'vegetables',
    rating: 4.3,
    inStock: true,
    unit: 'lb',
    description: 'Sweet and crunchy red bell peppers, great for cooking or raw snacking.',
    nutritionInfo: {
      calories: 31,
      protein: '1g',
      carbs: '7g',
      fat: '0.3g'
    },
    tags: ['sweet', 'colorful', 'vitamin-c']
  },
  {
    id: 'veg-003',
    name: 'Fresh Broccoli',
    price: 1.99,
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400',
    category: 'vegetables',
    rating: 4.4,
    inStock: true,
    unit: 'head',
    description: 'Crisp fresh broccoli heads, packed with nutrients and perfect for steaming.',
    tags: ['nutritious', 'green', 'healthy']
  },
  
  // Fruits
  {
    id: 'fruit-001',
    name: 'Organic Bananas',
    price: 1.29,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400',
    category: 'fruits',
    rating: 4.6,
    inStock: true,
    unit: 'lb',
    description: 'Sweet organic bananas, perfect for breakfast or as a healthy snack.',
    nutritionInfo: {
      calories: 89,
      protein: '1.1g',
      carbs: '23g',
      fat: '0.3g'
    },
    tags: ['organic', 'sweet', 'potassium']
  },
  {
    id: 'fruit-002',
    name: 'Gala Apples',
    price: 3.49,
    originalPrice: 3.99,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400',
    category: 'fruits',
    rating: 4.2,
    inStock: true,
    unit: 'bag',
    description: 'Crisp and sweet Gala apples, perfect for snacking or baking.',
    tags: ['crisp', 'sweet', 'fiber']
  },
  {
    id: 'fruit-003',
    name: 'Fresh Strawberries',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400',
    category: 'fruits',
    rating: 4.8,
    inStock: true,
    unit: 'container',
    description: 'Juicy fresh strawberries, bursting with flavor and vitamin C.',
    tags: ['juicy', 'vitamin-c', 'berries']
  },

  // Bakery
  {
    id: 'bakery-001',
    name: 'Artisan Whole Grain Bread',
    price: 4.49,
    image: 'https://images.unsplash.com/photo-1679673987713-54f809ce417d?w=400',
    category: 'bakery',
    rating: 4.7,
    inStock: true,
    unit: 'loaf',
    description: 'Freshly baked artisan whole grain bread with seeds and nuts.',
    tags: ['whole-grain', 'artisan', 'fresh-baked']
  },
  {
    id: 'bakery-002',
    name: 'Classic Croissants',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1555507036-ab794f27d1e9?w=400',
    category: 'bakery',
    rating: 4.5,
    inStock: true,
    unit: '6-pack',
    description: 'Buttery, flaky croissants baked fresh daily in our bakery.',
    tags: ['buttery', 'flaky', 'french']
  },

  // Dairy
  {
    id: 'dairy-001',
    name: 'Organic Whole Milk',
    price: 3.79,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400',
    category: 'dairy',
    rating: 4.4,
    inStock: true,
    unit: 'gallon',
    description: 'Fresh organic whole milk from grass-fed cows.',
    tags: ['organic', 'whole-milk', 'grass-fed']
  },
  {
    id: 'dairy-002',
    name: 'Greek Yogurt',
    price: 5.99,
    originalPrice: 6.99,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400',
    category: 'dairy',
    rating: 4.6,
    inStock: false,
    unit: 'container',
    description: 'Creamy Greek yogurt with live probiotics and high protein content.',
    tags: ['greek', 'probiotics', 'protein']
  }
];