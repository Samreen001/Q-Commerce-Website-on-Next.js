import Image from 'next/image'
import Link from 'next/link'

// This should ideally be in a separate types file
type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  type: string;
}

// In a real application, this function would fetch data from an API
async function getProducts(): Promise<Product[]> {
  // Simulating an API call
  return [
    { id: '1', name: 'Chocolate Delight', description: 'Rich chocolate ice cream with chocolate chips and a fudge swirl.', price: 4.99, image: '/images/home.jpg', type: 'Cake' },
    { id: '2', name: 'Strawberry Dream', description: 'Fresh strawberry cake made with real strawberries chunks.', price: 4.99, image: '/images/st-cake.jpg', type: 'Cake' },
    { id: '3', name: 'Vagan-Vanilla', description: 'Smooth vanilla ice cream with a tropical twist of coconut.', price: 4.99, image: '/images/v.vanila.jpg', type: 'Cake' },
    { id: '4', name: 'Pista Ice Cream', description: 'Creamy pistachio ice cream made with roasted pistachios.', price: 4.99, image: '/images/pista.jpg', type: 'ice cream' },
    { id: '5', name: 'Vanilla Bean', description: 'Classic vanilla ice cream made with real vanilla beans.', price: 4.99, image: '/images/vanila.png', type: 'ice cream' },
    { id: '6', name: 'TootiFruity Ice-cream', description: 'A colorful mix of fruit-flavored ice-cream with chunks of real fruit.', price: 4.99, image: '/images/tuti-fruiti.webp', type: 'ice cream' },
    { id: '7', name: 'Dry-Fruit Cake', description: 'Decadent dry fruit cake with rich almond cashew nut & walnut frosting.', price: 24.99, image: '/images/dry fruits.jpg', type: 'cake' },
    { id: '8', name: 'Blue Berry Ice-Cream', description: 'Made with fresh or frozen blueberries and cream.', price: 22.99, image: '/images/blue.jpg', type: 'Ice Cream' },
    { id: '9', name: 'Mixed Ice-Cream', description: 'Classic Mixed Ice-Cream with Fresh Fruits chunks.', price: 19.99, image: '/images/ice-cream.webp', type: 'Ice Cream' },
    { id: '10', name: 'Caramel Crunch', description: 'Classic yummy Caremal crunch with butter scotch falvor Ice-Cream with real crunch chunks.', price: 19.99, image: '/images/caramel.jpg', type: 'ice cream' },
    { id: '11', name: 'Mango Ice Cream', description: 'Classic & Yummy Mango Ice-Cream with Fresh Mango chunks.', price: 19.99, image: '/images/mango.jpg', type: 'Ice Cream' },
    { id: '12', name: 'Fruit Cake', description: ' This classic cake with different types of real fruit absolutely stunning with fruits.', price: 29.99, image: '/images/fruit cake.jpg', type: 'cake' },
    { id: '13', name: ' Strawberry Ice-Cream', description: 'Fresh strawberry ice cream made with ripe, juicy strawberries.', price: 19.99, image: '/images/st.jpg', type: 'Ice-Cream' },
    { id: '15', name: 'Pine-Apple Cake', description: ' This classic cake, while absolutely stunning with real pineapple chunks.', price: 19.99, image: '/images/pineapple.jpg', type: 'cake' },
    { id: '16', name: 'Blue Berry', description: ' This classic cake with real blue berries chunks, absolutely stunning with.', price: 29.99, image: '/images/blue.b.jpg', type: 'Cake' },
  ];
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-8 bg-pink-200">
      <h1 className="text-3xl font-bold mb-8">Our Ice Creams and Cakes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id} className="block">
            <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-lg font-bold text-pink-600">${product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500 mt-1 capitalize">{product.type}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

