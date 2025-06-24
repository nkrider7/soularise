import * as React from 'react';
import {
  Html,
  Container,
  Text,
  Section,
  Img,
  Font,
  Head,
  Button,
} from "@react-email/components";

interface EmailTempProps {
  email: string;
}

export const EmailTemp: React.FC<Readonly<EmailTempProps>> = ({ email }) => {
  return (
    <Html lang="en">
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>

      <Container
        style={{
          margin: "0 auto",
          maxWidth: "600px",
          padding: "32px 24px",
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          fontFamily: "Roboto, Verdana, sans-serif",
          textAlign: "center",
        }}
      >
        <Section>
          <Img
            alt="Soul Arise Banner"
            src="https://beeimg.com/images/u23340475891.webp"
            height="120"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "12px",
              objectFit: "cover",
              marginBottom: "24px",
            }}
          />
        </Section>

        <Section style={{ marginBottom: "24px" }}>
          <Text
            style={{
              fontFamily: "Roboto",
              lineHeight: "28px",
              marginBottom: "12px",
            }}
          >
            Hey {email},
          </Text>

          <Text
            style={{
              fontSize: "16px",
              lineHeight: "26px",
              color: "#4B5563", // Slightly darker gray
              margin: "0 auto",
              textAlign: "center",
              maxWidth: "520px",
            }}
          >
            Welcome to the waitlist for <strong>Soul Arise</strong> – where your real-life transformation begins like a leveling-up quest!<br /><br />

            You&apos;ve officially taken the first step on your journey to becoming your strongest self. 💪 Whether it’s crushing fitness goals, building powerful habits, or unlocking hidden potential — Soul Arise is built to guide you like a true protagonist in your own story.<br /><br />

            ✨ Inspired by <em>Solo Leveling</em>, we&apos;ve turned self-growth into an epic, task-based adventure. You&apos;ll level up, unlock new challenges, and see yourself evolve — body, mind, and soul.<br /><br />

            While we&apos;re gearing up to launch, here’s what&apos;s next:
            <ul style={{ textAlign: "left", margin: "16px auto", maxWidth: "480px", padding: "0 16px", color: "#4B5563" }}>
              <li>💌 You&apos;ll be the first to get early access</li>
              <li>🔐 Exclusive perks for waitlisters</li>
              <li>🎁 Secret bonuses... just for staying with us</li>
            </ul>

            We’re super pumped to have you on this journey. In the meantime, keep your eyes on your inbox — your dungeon is loading. 😉<br /><br />

            To growth and glory,
          </Text>
        </Section>

        <Button
          style={{
            display: "inline-block",
            marginTop: "12px",
            borderRadius: "16px",
            backgroundColor: "#3C1A7B",
            padding: "14px 36px",
            fontWeight: "500",
            fontSize: "16px",
            color: "#ffffff",
            textDecoration: "none",
          }}
          href="https://www.instagram.com/soularise.grow/"
        >
          Follow on Instagram
        </Button>
      </Container>
    </Html>
  );
};
