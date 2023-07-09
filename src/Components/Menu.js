import React from "react";
import { Box, Heading ,Text} from "@chakra-ui/react";
import { useSelector } from "react-redux";
function Menu() {
  const storeData = useSelector((reduxStoreData) => {
    return reduxStoreData.pizzas;
  });

  const allPizzas = storeData;
  return (
    <Box>
      {/* <Heading textAlign='center' mt='20px'>MENU LIST</Heading> */}
      <Box bg='red' width='100%' height='30vh' textAlign='center' paddingTop='80px' margin='10px'> 
      <Text color='white'>Choose Your Favourite</Text>
      <Heading color='white'>MENU LIGHT</Heading>
      </Box>
      <Box
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto auto",
        gap: "20px",
        marginTop: "60px",
        marginLeft: "0",
      }}
      w="85vw"
      padding="10px"
    >
      {allPizzas.map((item) => {
        return (
          <div style={{ textAlign: "center", margin: "10px" }} key={item.id}>
            <img alt='item'
              src={item.linkImagen}
              style={{
                borderRadius: "50%",
                height: "200px",
                width: "200px",
                marginTop: "8px",
                
              }}
            />
            <p style={{ marginTop: "8px", color: "#ffbf00", fontSize: "bold" }}>
              {item.nombre}
            </p>
            <p style={{ marginTop: "8px", color: "red" }}>${item.precio}</p>
          </div>
        );
      })}
    </Box>
    </Box>
  );
}

export default Menu;
