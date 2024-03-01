import { NextResponse } from "next/server";
import mysqlPool from "@/utils/db";

export async function GET(request, { params }) {
  const id = params.id;
  const promissPool = mysqlPool.promise();
  const [rows, fields] = await promissPool.query(
    "SELECT * from customers where CustomerID = ?",
    [id]
  );
  return NextResponse.json(rows);
}
