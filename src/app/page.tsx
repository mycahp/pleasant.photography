"use client";

import { useEffect, useState } from "react";
import { ImageProduct } from "./types/ImageProduct";
import ImageModal from "./components/ImageModal";
import { orderBy } from "lodash";

const Skeleton = () => (
  <div className="bg-gray-200 rounded w-full aspect-[5/1] animate-pulse h-[100px] animate__flash animate__slower animate__animated animate__infinite" />
);

export default function Home() {
  const [imageList, setImageList] = useState<ImageProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [currentImageModalProduct, setCurrentImageModalProduct] = useState<
    ImageProduct | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/getShopifyProducts");
      if (!res.ok) {
        setError(true);
      } else {
        setImageList((await res.json()).data.products.edges as ImageProduct[]);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <div className="card">
        {!loading && error && (
          <div className="flex flex-col justify-center gap-2 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-[96px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
              />
            </svg>
            <span className="text-2xl">
              There was an error loading images... Please try again.
            </span>
          </div>
        )}

        <div className="gap-4 columns-1 sm:columns-2 lg:columns-3">
          {loading && [...Array(12)].map((_, i) => <Skeleton key={i} />)}
          {!loading &&
            !error &&
            orderBy(imageList, ["node.updatedAt"], ["desc"]).map(
              (img: ImageProduct) => {
                const imageUrl = img.node.metafields.edges.find(
                  (edge) => edge.node.key == "image_url"
                )?.node.value;

                const imageTitle = img.node.title;

                return (
                  <div
                    key={img.node.handle}
                    className="mb-4 break-inside-avoid"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${imageUrl}?format=auto&quality=60&width=1000`}
                      className="hover:shadow-md rounded-sm w-full sm:hover:scale-[1.01] transition"
                      alt={imageTitle}
                      onClick={() => {
                        setCurrentImageModalProduct(img);
                        setImageModalOpen(true);
                      }}
                    />
                  </div>
                );
              }
            )}
        </div>
      </div>

      {currentImageModalProduct && (
        <ImageModal
          isOpen={imageModalOpen}
          imageProduct={currentImageModalProduct}
          onOpenChange={(open) => setImageModalOpen(open)}
        />
      )}
    </>
  );
}
