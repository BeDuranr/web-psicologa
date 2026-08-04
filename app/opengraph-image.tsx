import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Araceli Aguilera Jorquera - Psicóloga";

export default async function OpengraphImage() {
  const dmSansSemiBold = await readFile(
    join(process.cwd(), "assets/fonts/DMSans-SemiBold.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#F8F5F0",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 96,
            height: 96,
            borderRadius: "50%",
            background: "#6B9E7A",
            color: "#FFFFFF",
            fontSize: 48,
            fontWeight: 600,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          A
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 600,
            color: "#2C2C2C",
            textAlign: "center",
          }}
        >
          Araceli Aguilera Jorquera
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 32,
            color: "#6B9E7A",
            textAlign: "center",
          }}
        >
          Psicóloga · Terapia Cognitivo-Conductual
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "DM Sans",
          data: dmSansSemiBold,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
