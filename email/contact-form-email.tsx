import React from 'react'
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  senderName: string;
  senderPrenom: string;
  senderSubject: string;
  message: string;
  senderEmail: string;  
};

export default function ContactFormEmail({senderName, senderPrenom, message, senderEmail, senderSubject}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Projet portfolio</Preview>
      <Preview>Nouveau message de {senderName}</Preview>
      <Tailwind>
        <Body className="text-black bg-gray-100">
          <Container>
            <Section className="px-10 py-4 my-10 bg-white rounded-md borderBlack">
              <Heading className="leading-tight">
                Vous avez reçu le message suivant du formulaire de contact
              </Heading>
              <Text>Nom & prénom: {senderName} {senderPrenom}</Text>
              <Text>Email: {senderEmail}</Text>
              <Text>Sujet: {senderSubject}</Text>
              <Text>Message: {message}</Text>
              <Hr />
              <Text>L'e-mail de l'expéditeur est: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
