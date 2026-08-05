import mongoose from "mongoose";

import Product from "./db/models/Products.js";
import products from "./seed.js";

process.loadEnvFile();

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "Metafab",
    });

    console.log("MongoDB Connected");

    const result = await Product.bulkWrite(
      products.map((product) => ({
        updateOne: {
          filter: { slug: product.slug },
          update: { $setOnInsert: product },
          upsert: true,
        },
      }))
    );

    console.log(`${result.upsertedCount} new products inserted`);
    console.log(`${products.length - result.upsertedCount} seed products already existed`);

    await mongoose.disconnect();
    console.log("MongoDB Disconnected");

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
