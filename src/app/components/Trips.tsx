'use client'
import { prisma } from "@/lib/prisma";


const getTrips = async () => {
  const trips = await prisma.trip.findMany({});
  return trips
}

const Trips = async () => {
  const date = await fetch("")
  
  return
  <div>

  </div>
}