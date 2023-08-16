"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const BurgerCard = () => {
  const list = [
    {
      title: "Orange",
      img: "/assets/hero.jpg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/assets/hero.jpg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/assets/hero.jpg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/assets/hero.jpg",
      price: "$5.30",
    },
  ];
  return (
    <div className="gap-5 grid">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="object-cover h-[100px] w-[100px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between bg-red-500">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default BurgerCard;
