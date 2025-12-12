// Small mock products dataset for local dev / fallback mode
module.exports = [
  {
    id: 1001,
    name: 'Mock Safety Helmet',
    category: 'Head Protection',
    subCategory: 'Safety Helmets',
    distributor: 'MockCo',
    image: '/images/mock_helmet.png',
    description: 'Lightweight mock safety helmet for UI testing.',
    brief: 'Mock safety helmet',
    colors: ['white', 'yellow'],
    sizes: ['Adjustable'],
    gallery: ['/images/mock_helmet.png'],
    additionalInfo: { Weight: '300 g', Standards: 'EN397' }
  },
  {
    id: 1002,
    name: 'Mock Safety Glasses',
    category: 'Eye Protection',
    subCategory: 'Safety Glasses',
    distributor: 'MockCo',
    image: '/images/mock_glasses.png',
    description: 'Clear-lens mock safety glasses.',
    brief: 'Mock safety glasses',
    colors: ['clear'],
    sizes: [],
    gallery: ['/images/mock_glasses.png'],
    additionalInfo: { Lens: 'Polycarbonate', Standards: 'EN166' }
  },
  {
    id: 1003,
    name: 'Mock Work Gloves',
    category: 'Hand Protection',
    subCategory: 'Work Gloves',
    distributor: 'MockCo',
    image: '/images/mock_gloves.png',
    description: 'Comfortable mock gloves.',
    brief: 'Mock gloves',
    colors: ['black'],
    sizes: ['M','L'],
    gallery: ['/images/mock_gloves.png'],
    additionalInfo: { Material: 'Leather', Standards: 'EN388' }
  }
];
