import { NextResponse } from "next/server";
import mysqlPool from "@/utils/db";

export async function GET(request) {
  const promissPool = mysqlPool.promise();
  const [rows, fields] = await promissPool.query("SELECT * from customers");
  return NextResponse.json(rows);
}
