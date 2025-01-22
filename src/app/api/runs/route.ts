import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(request: Request) {
  try {
    const client = await clientPromise
    const db = client.db("balatro-stats")
    
    // Get the request body
    const body = await request.json()

    // Add timestamp
    const runData = {
      ...body,
      timestamp: new Date(),
    }

    // Insert into MongoDB
    const result = await db.collection("runs").insertOne(runData)

    return NextResponse.json({ 
      success: true, 
      id: result.insertedId 
    })

  } catch (e) {
    console.error(e)
    return NextResponse.json(
      { error: 'Failed to insert run data' },
      { status: 500 }
    )
  }
}