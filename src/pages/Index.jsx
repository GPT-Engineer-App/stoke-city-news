import { Container, VStack, Heading, Text, Box, Image, Link, IconButton } from "@chakra-ui/react";
import Navigation from "../components/Navigation.jsx";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const newsArticles = [
  {
    title: "Stoke City Wins Championship Match",
    description: "Stoke City secured a thrilling victory in their latest championship match, showcasing exceptional skill and teamwork.",
    image: "https://images.unsplash.com/photo-1570498839593-e565b39455fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdG9rZSUyMGNpdHklMjBmb290YmFsbCUyMG1hdGNofGVufDB8fHx8MTcxNjQ0ODM0Mnww&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
  {
    title: "Player Spotlight: John Doe",
    description: "An in-depth look at John Doe's journey and his impact on Stoke City's recent successes.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdG9rZSUyMGNpdHklMjBwbGF5ZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTY0NDgzNDN8MA&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
  {
    title: "Upcoming Fixtures",
    description: "A preview of Stoke City's upcoming fixtures and what to expect from the team.",
    image: "https://images.unsplash.com/photo-1570498839593-e565b39455fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdG9rZSUyMGNpdHklMjBmb290YmFsbCUyMHN0YWRpdW18ZW58MHx8fHwxNzE2NDQ4MzQ0fDA&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
];

const Index = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Navigation />
      <VStack spacing={8} align="stretch" mt={4}>
        <Heading as="h1" size="2xl" textAlign="center">
          Stoke City News
        </Heading>
        {newsArticles.map((article, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={article.image} alt={article.title} />
            <Box p={6}>
              <Heading as="h2" size="lg" mb={2}>
                {article.title}
              </Heading>
              <Text mb={4}>{article.description}</Text>
              <Link href={article.link} color="teal.500" isExternal>
                Read more
              </Link>
            </Box>
          </Box>
        ))}
        <Box textAlign="center">
          <Text fontSize="lg" mb={4}>
            Follow us on social media
          </Text>
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" mx={2} />
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" mx={2} />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" mx={2} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
