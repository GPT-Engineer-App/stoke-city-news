import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

function Dashboard() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY")
      .then((response) => response.json())
      .then((data) => setNews(data.articles));
  }, []);

  return (
    <Box p={5}>
      <Text fontSize="2xl" mb={5}>
        Latest News
      </Text>
      {news.map((article, index) => (
        <Box key={index} mb={5}>
          <Text fontSize="xl">{article.title}</Text>
          <Text>{article.description}</Text>
        </Box>
      ))}
    </Box>
  );
}

export default Dashboard;
