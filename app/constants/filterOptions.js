import projectone from '@/public/project-one.jpg'
import projecttwo from '@/public/project-two.jpg'
import projectthree from '@/public/project-three.jpg'
import projectfour from '@/public/project-three.jpg'
import projectfive from '@/public/project-three.jpg'
export const PROPERTY_TYPES = [
  "Apartment",
  "House",
  "Condo",
  "Townhouse",
  "Villa",
];

export const BEDROOMS = [
  "1 Bedroom",
  "2 Bedrooms",
  "3 Bedrooms",
  "4 Bedrooms",
  "5+ Bedrooms",
];
export const PROPERTIES = [
  {
    id: 1,
    type: "Apartment",
    bedrooms: "2 Bedrooms",
    size: "500 - 1000 sqft",
    price: "$200,000 - $300,000",
    image: projectone,
  },
  {
    id: 2,
    type: "Villa",
    bedrooms: "4 Bedrooms",
    size: "2000+ sqft",
    price: "Over $400,000",
    image: projecttwo,
  },
  {
    id: 3,
    type: "Townhouse",
    bedrooms: "3 Bedrooms",
    size: "1500 - 2000 sqft",
    price: "$300,000 - $400,000",
    image: projectthree,
  },
  {
    id: 4,
    type: "Condo",
    bedrooms: "1 Bedroom",
    size: "Less than 500 sqft",
    price: "Under $100,000",
    image: projectfour,
  },
  {
    id: 5,
    type: "House",
    bedrooms: "5+ Bedrooms",
    size: "2000+ sqft",
    price: "Over $400,000",
    image: projectfive,
  },
];


export const PROPERTY_SIZES = [
  "Less than 500 sqft",
  "500 - 1000 sqft",
  "1000 - 1500 sqft",
  "1500 - 2000 sqft",
  "2000+ sqft",
];

export const PRICE_RANGES = [
  "Under $100,000",
  "$100,000 - $200,000",
  "$200,000 - $300,000",
  "$300,000 - $400,000",
  "Over $400,000",
]; 