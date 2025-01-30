import { NextResponse } from 'next/server';

export async function GET() {
  // This is a placeholder. Replace with your actual product data or database query
  const products = [
    { id: 1, name: 'Chocolate Cake', price: 25.99 },
    { id: 2, name: 'Vanilla Ice Cream', price: 5.99 },
    { id: 3, name: 'Strawberry Cheesecake', price: 30.99 },
  ];

  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();
  // Here you would typically save the new product to your database
  console.log('Received new product:', body);
  return NextResponse.json({ message: 'Product created successfully' }, { status: 201 });
}

