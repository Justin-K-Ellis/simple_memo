import db from "./index";
import { notesTable } from "./schema";

async function main() {
  // Create seed data
  const note1: typeof notesTable.$inferInsert = {
    title: "My First Note",
    body: "This is my first note.",
  };
  const note2: typeof notesTable.$inferInsert = {
    title: "Job Hunting Goals",
    body: "Try to find at least two good prospects per day.",
  };

  try {
    // Seed db
    console.log("Seeding the database...");
    await db.insert(notesTable).values(note1);
    await db.insert(notesTable).values(note2);
    console.log("Database seeded!");

    // Query all
    console.log("Querying records...");

    const notes = await db.select().from(notesTable);
    console.log(notes);
  } catch (error) {
    console.error("Something went wrong when seeding or querying db.", error);
  }
}

main();
