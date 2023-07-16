import { Trip } from "@prisma/client";
import Image from "next/image";
import React from "react";

interface TripHeaderProps {
  trip: Trip
}

const TripHeader = ({ trip }: TripHeaderProps) => {
  return(
  <div className="flex flex-col">
    <div className="relative h-[300px] w-full ">
      <Image
        src={trip.coverImage}
        fill style={{
          objectFit: "cover",
        }}
        alt={trip?.name}
      />
    </div>
    <div className=" flex flex-col p5">
      <h1 className="text-x5 text-grayPrimary underline">{trip.name}</h1>

      <div className="flex items-center gap-1 my-1">
        <p className="text-x5 text-grayPrimary">
          <span className="text-primary font-medium">R${trip.pricePerDay.toString()} </span> por dia
        </p>

      </div>
    </div>
    </div>
  )
}
export default TripHeader