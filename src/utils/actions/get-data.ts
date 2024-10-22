export async function getDataHome() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}-5ac94010-8c22-11ef-9c36-e39848b00a62/objects/67106332031c6d71de80eebe?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`,
      { next: { revalidate: 120 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export async function getSubMenu() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}-5ac94010-8c22-11ef-9c36-e39848b00a62/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&read_key=${process.env.READ_KEY}&depth=1&props=slug,title`,
      { next: { revalidate: 120 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch menu data");
    }
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch menu data");
  }
}
