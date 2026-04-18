import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Litehouse | Smarter GTM. Faster growth.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/images/litehouse-logo-white.png"),
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a2540",
          backgroundImage:
            "radial-gradient(circle at 25% 20%, rgba(236,200,64,0.18) 0%, transparent 55%), radial-gradient(circle at 80% 85%, rgba(77,101,255,0.15) 0%, transparent 55%)",
          padding: 80,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="Litehouse"
          width={640}
          height={128}
          style={{ marginBottom: 56 }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "#f9f7f4",
            letterSpacing: "-0.02em",
            textAlign: "center",
            lineHeight: 1.05,
          }}
        >
          <span>Smarter GTM.&nbsp;</span>
          <span style={{ color: "#ecc840" }}>Faster growth.</span>
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            color: "rgba(249,247,244,0.7)",
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          GTM engines that automate busywork and deliver a predictable
          pipeline of qualified leads.
        </div>
      </div>
    ),
    { ...size },
  );
}
