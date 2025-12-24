import React from 'react'
import { Html, Body, Link, Container, Tailwind, Text, Preview } from '@react-email/components'
const WelcomeTemplate = ({ name }: { name: String }) => {
    return (
        <Html>
            <Tailwind>
                <Body className="bg-white">
                    <Preview>Welcome to our app! </Preview>
                    < Container >
                        <Text className='font-bold text-3xl'>Hello {name}! </Text>
                        <Link href="https://example.com">Visit our website</Link>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default WelcomeTemplate