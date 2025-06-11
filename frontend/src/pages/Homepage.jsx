import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import { ProductCard } from "../components/ProductCard";

const Homepage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("productos", products);

  return (
    <Container maxW="Container.xl" py={12}>
      <VStack saturate={8}>
        <Text
          fontSize="30"
          fontWeight="bold"
          textAlign="center"
          bgGradient="linear(to-r, #ffb22e,  #73fb18)"
          bgClip="text"
        >
          Recetas de Jugos y Licuados 🥤
        </Text>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing={8}
          mt={8}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
        {products.length === 0 && (
          <Text
            fontSize="xl"
            textAlign={"center"}
            fontWeight="bold"
            color="gray.500"
          >
            No hay Jugos o Licuados para mostrar 😢{" "}
            <Link to={"/create"}>
              <Text
                as="span"
                color="blue.500"
                _hover={{ textDecoration: "underline" }}
              >
                Crear Receta 📄
              </Text>
            </Link>
          </Text>
        )}
        ;
      </VStack>
    </Container>
  );
};

export default Homepage;
