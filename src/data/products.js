// Digital product data, consumed by <DigitalProducts /> → <ProductCard />.
// "What it teaches → Who it's for → View product" per the doc spec.
// Real products filled in below — add remaining Selar products/courses as they launch.

export const products = [
  {
    id: 'data-analytics-mentorship',
    name: 'Data Analytics Mentorship Program',
    brand: 'GetMyTechTips',
    price: '₦50,000',
    whatItTeaches:
      'A two-month, 24-session curriculum covering Excel through Tableau, Python and Pandas, and career readiness.',
    whoItsFor:
      'Beginners and career-switchers who want a structured, guided path into data analytics rather than piecing together free tutorials.',
    selarUrl: 'https://wa.me/2349045831170', // TODO: add Selar product link
  },
  {
    id: 'python-loops',
    name: 'Python Loops',
    brand: 'Code with JS',
    price: '₦2,000', // TODO: add price
    whatItTeaches:
      'Focused, practical breakdown of loops in Python — a common sticking point for beginners.',
    whoItsFor:
      'New Python learners who want a short, targeted resource instead of a full-length course.',
    selarUrl: 'https://selar.com/m/julius_sarah167', // TODO: add Selar product link
  },

  // TODO — add future Code with JS / GetMyTechTips products as they launch
  // {
  //   id: 'product-slug',
  //   name: '',
  //   brand: '',
  //   price: '',
  //   whatItTeaches: '',
  //   whoItsFor: '',
  //   selarUrl: '',
  // },
];