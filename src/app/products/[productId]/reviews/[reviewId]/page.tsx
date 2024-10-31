import React from 'react'
import { notFound } from 'next/navigation';


export default function ReviewDetails( { params }: { params: {
    productId: string;
    reviewId: string
 };
} ) {
  if(parseInt(params.reviewId) > 1000) {
    notFound()
  }
  return (
    <div>
        <h3>Review {params.reviewId} for Product {params.productId} </h3>
    </div>
  )
}
