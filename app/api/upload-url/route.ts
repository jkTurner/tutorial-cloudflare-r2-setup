import { r2 } from "@/lib/r2";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    const { fileType, fileName } = await req.json();
    const url = await getSignedUrl(
        r2,
        new PutObjectCommand({
            Bucket: process.env.R2_BUCKET!,
            Key: fileName,
            ContentType: fileType,
        }),
        { expiresIn: 60 }
    );

    const publickUrl = `${process.env.R2_DEV_URL}/${fileName}`

    return NextResponse.json({ url, publickUrl });
}