import * as React from 'react';
import {
  Html,
  Container,
  Text,
  Heading,
  Section,
  Img,
  Font,
  Head,
} from "@react-email/components";

interface EmailTempProps {
  email: string;
}

export const EmailTemp: React.FC<Readonly<EmailTempProps>> = ({ email }) => {
  return (
    // <Html lang="en">
	// 	<Head>
	//    <Font
    //       fontFamily="Roboto"
    //       fallbackFontFamily="Verdana"
    //       webFont={{
    //         url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
    //         format: "woff2",
    //       }}
    //       fontWeight={400}
    //       fontStyle="normal"
    //     />
	// 	</Head>
      <Container
        style={{
          margin: "0 auto",
          maxWidth: "600px",
          padding: "24px",
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <Heading
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#FF6A00",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          Thanks For Subscribing!
        </Heading>

        <Section style={{ margin: "16px 0" }}>
          <Img
            alt="Herman Miller Chair"
            src="https://beeimg.com/images/l42598628764.png"
            height="120"
            style={{
              width: "100%",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />

          <Section style={{ marginTop: "32px", textAlign: "center" }}>
            <Text
              style={{
                margin: "16px 0",
                fontSize: "18px",
                fontWeight: "600",
                lineHeight: "28px",
                color: "#F97316", // orange-600
              }}
            >
              {email} subscribed to our exclusive version!
            </Text>

            <Heading
              as="h1"
              style={{
                margin: "8px 0 0",
                fontSize: "36px",
                fontWeight: "600",
                lineHeight: "36px",
                color: "#111827", // gray-900
              }}
            >
              Boomzo!
            </Heading>

            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "#6B7280", // gray-500
              }}
            >
              Prepare to connect with top services effortlessly. Say goodbye to the hassle and hello to convenience! Exciting Features Await!
            </Text>

            {/* 
            Uncomment to add the button and socials back later if needed

            <Button
              style={{
                marginTop: "16px",
                borderRadius: "8px",
                backgroundColor: "#F97316",
                padding: "12px 40px",
                fontWeight: "600",
                color: "#ffffff",
                textDecoration: "none",
              }}
              href="https://www.boomzo.in/"
            >
              Get Started
            </Button>

            <Section style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <SocialIcons showMail />
            </Section>
            */}
          </Section>
        </Section>
      </Container>
// </Html>
  );
};
