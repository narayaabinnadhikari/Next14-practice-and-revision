import React from 'react'

export default function ReviewDetails( { params }: { params: {
    productId: string;
    reviewId: string
 };
} ) {
  return (
    <div>
        <h3>Review {params.reviewId} for Product {params.productId} </h3>
    </div>
  )
}
