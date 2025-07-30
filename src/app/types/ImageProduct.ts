export type ImageProduct = {
  node: {
    id: string;
    title: string;
    description: string;
    handle: string;
    createdAt: string;
    updatedAt: string;
    variants: {
      edges: {
        node: {
          id: string;
          title: string;
          price: string;
        };
      }[];
    };
    metafields: {
      edges: {
        node: {
          key: string;
          value: string;
        };
      }[];
    };
  };
};
