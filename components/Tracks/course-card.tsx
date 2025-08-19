/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  price: number;
  slug: string;
}

export function CourseCard({
  id,
  title,
  description,
  image,
  rating,
  price,
  slug,
}: CourseCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-gray-600 ml-1">{rating}</span>
        </div>

        {/* Price and button */}
        <div className="flex items-center justify-between">
          <span className="font-semibold text-lg">${price}</span>
          <Link href={`/course/${slug}`}>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Preview course
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
