import React, { useState } from "react";
import { Box, Button, Container, Flex, Heading, IconButton, Input, Stack, Text, Textarea, useToast } from "@chakra-ui/react";
import { FaHeadphonesAlt, FaPaypal, FaQuestionCircle } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";

const Index = () => {
  const [message, setMessage] = useState("");
  const toast = useToast();

  const handlePurchase = () => {
    // Here you would integrate the PayPal purchase logic
    toast({
      title: "Purchase Successful",
      description: "Thank you for purchasing Spotify Premium!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleSendMessage = () => {
    // Here you would integrate sending the message to the support
    toast({
      title: "Message Sent",
      description: "Our support team will get back to you shortly.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
    setMessage("");
  };

  return (
    <Container maxW="container.md" py={10}>
      <Flex direction="column" alignItems="center" mb={10}>
        <Heading mb={4}>Spotify Premium Shop</Heading>
        <Text fontSize="lg">Get your premium subscription now</Text>
        <Button leftIcon={<FaPaypal />} colorScheme="blue" variant="solid" mt={6} onClick={handlePurchase} size="lg">
          Buy with PayPal
        </Button>
      </Flex>

      <Stack spacing={4}>
        <Button
          leftIcon={<FaQuestionCircle />}
          colorScheme="teal"
          variant="outline"
          size="lg"
          onClick={() =>
            toast({
              title: "Help Center",
              description: "Redirecting to the help center...",
              status: "info",
              duration: 3000,
              isClosable: true,
            })
          }
        >
          Help Center
        </Button>

        <Box>
          <Heading size="md" mb={2}>
            Contact Support
          </Heading>
          <Textarea placeholder="Write your message..." value={message} onChange={(e) => setMessage(e.target.value)} />
          <IconButton aria-label="Send message" icon={<AiOutlineSend />} colorScheme="green" mt={2} isRound onClick={handleSendMessage} />
        </Box>
      </Stack>
    </Container>
  );
};

export default Index;
