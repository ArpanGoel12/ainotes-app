import { Pinecone } from "@pinecone-database/pinecone";

const apiKey = process.env.PINECONE_API_KEY;
console.log(apiKey);

if (!apiKey) {
  throw Error("PINECONE_API_KEY is not set");
}

const pinecone = new Pinecone({
  environment: "gcp-starter",
  apiKey,
});
console.log(pinecone);
export const notesIndex = pinecone.Index("note-app");


//https://aiapp-w7pp2ss.svc.aped-4627-b74a.pinecone.io