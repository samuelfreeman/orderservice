// app/actions.ts
"use server";
import { neon } from "@neondatabase/serverless";


const db = neon(process.env.DATABASE_URL ||
    'postgresql://expenseApp_owner:iHDrJc7S0QWB@ep-rapid-resonance-a5xtwzb5.us-east-2.aws.neon.tech/orderdb?sslmode=require');


export default db 