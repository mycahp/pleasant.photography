import type { Handler } from "@netlify/functions";

const handler: Handler = async () => {
  try {
    const query = `
      {
        products(first: 100) {
          edges {
            node {
              id
              title
              description
              handle
              createdAt
              updatedAt
              variants(first: 100) {
                edges {
                  node {
                    id
                    title
                    price
                  }
                }
              }
              metafields(namespace: "cdn", first: 100) {
                edges {
                  node {
                    key
                    value
                  }
                }
              }
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `;

    const response = await fetch(
      `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2025-07/graphql.json`,
      {
        method: "POST",
        headers: {
          "X-Shopify-Access-Token": process.env.SHOPIFY_SECRET_KEY!,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Shopify GraphQL API error:", errorText);
      return {
        statusCode: response.status,
        body: JSON.stringify({
          error: "Failed to fetch products",
          details: errorText,
        }),
      };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Cache-Control":
          "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
      },
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Internal server error",
          detail: error.message,
        }),
      };
    }

    // fallback if it's not an Error instance
    console.error("Unknown error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Unknown error",
        detail: JSON.stringify(error),
      }),
    };
  }
};

export { handler };
