import { NextResponse } from 'next/server';

export async function GET() {
  const PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

  if (!PLACE_ID || !API_KEY) {
    console.error("ERRO: Variáveis de ambiente não encontradas.");
    return NextResponse.json({ reviews: [], error: "Configurações ausentes" }, { status: 500 });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${API_KEY}&language=pt-BR`;

  try {
    const response = await fetch(url, { 
      next: { revalidate: 86400 }, // Cache de 24h
      headers: { "Content-Type": "application/json" }
    });

    const data = await response.json();

    if (data.status !== "OK") {
      console.error("Google API Error:", data.error_message);
      return NextResponse.json({ reviews: [], error: data.status }, { status: 400 });
    }

    return NextResponse.json({
      reviews: data.result.reviews || [],
      rating: data.result.rating,
      user_ratings_total: data.result.user_ratings_total
    });

  } catch (error) {
    return NextResponse.json({ reviews: [], error: "Falha na conexão" }, { status: 500 });
  }
}