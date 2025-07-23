import { ImageProduct } from "../types/ImageProduct";

export default function ImageModal({
  imageProduct,
  isOpen,
  onOpenChange,
}: {
  imageProduct: ImageProduct;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!isOpen) {
    return null;
  }

  const imageUrl = imageProduct.node.metafields.edges.find(
    (edge) => edge.node.key == "image_url"
  )?.node.value;

  const imageTitle = imageProduct.node.title;

  const imageHandle = imageProduct.node.handle;

  const buyUrl = `https://shop.mycahpleasant.photography/product/${imageHandle}`;

  return (
    <>
      <div
        className="z-50 fixed inset-0 flex justify-center items-center bg-black/75"
        onClick={() => onOpenChange(false)}
      >
        <div
          className="group relative max-w-[90vw] max-h-[100vh] overflow-visible text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center">
            <img
              src={imageUrl}
              alt={imageTitle}
              className="max-w-full max-h-[calc(100vh-100px)] object-contain"
            />
            <a
              href={buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/90 hover:bg-white shadow mt-4 px-4 py-2 rounded text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              Buy Print
            </a>
          </div>
        </div>
      </div>
      <button
        onClick={() => onOpenChange(false)}
        className="top-4 right-4 z-50 fixed text-white text-2xl cursor-pointer"
      >
        &times;
      </button>
    </>
  );
}
