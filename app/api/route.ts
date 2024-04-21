import { listAllFiles } from "@/utils/blob";

export async function GET() {
  const res = await listAllFiles();
  return Response.json(res);
}
