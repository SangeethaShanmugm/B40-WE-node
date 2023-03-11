import { client } from "./index.js";

export async function getAllBooks(req) {
  return await client
    .db("b40-b39-we")
    .collection("books")
    .find(req.query)
    .toArray();
}
export async function getBookByID(id) {
  return await client.db("b40-b39-we").collection("books").findOne({ id: id });
}
export async function deleteBookByID(id) {
  return await client
    .db("b40-b39-we")
    .collection("books")
    .deleteOne({ id: id });
}
export async function addBooks(newBooks) {
  return await client.db("b40-b39-we").collection("books").insertMany(newBooks);
}
