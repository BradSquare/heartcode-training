"use server"
import { users } from "../db/schema";
import { db } from "../db"

/*
export async function insertOneUser(name: string, isDrugDealer: boolean) {
    await db.insert(users).values({ name: name, isDrugDealer: isDrugDealer });
}
*/

export async function insertOneUser(name: string, score: number) {
    try {
        console.log('Inserting user:', { name, score });
        await db.insert(users).values({ name, score });
        console.log(`User ${name} with score ${score} inserted successfully.`);
    } catch (err) {
        console.error('Error inserting user:', err);
        // Optionally rethrow or handle the error further
    }
}