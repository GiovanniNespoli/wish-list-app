import { useState } from "react";
import theme from "../../../../styles/theme";
import {
  BackButton,
  BackButtonText,
  Container,
  Content,
  DeleteContent,
  FlatListContent,
  StyledFlatList,
  TableContent,
  TableLabel,
  TableText,
  Title,
} from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

interface IData {
  id: string;
  title: string;
  description: string;
}

export default function TableDreamScreen({ navigation }) {
  const [items, setItems] = useState<IData[]>([
    {
      id: "1",
      title: "titulo12",
      description: "descriocao12",
    },
    {
      id: "2",
      title: "titulo1",
      description: "descriocao1",
    },
    {
      id: "3",
      title: "titulo1",
      description: "descriocao1",
    },
    {
      id: "4",
      title: "titulo1",
      description: "descriocao1",
    },
    {
      id: "5",
      title: "titulo1",
      description: "descriocao1",
    },
    {
      id: "6",
      title: "titulo1",
      description: "descriocao1",
    },
    {
      id: "7",
      title: "titulo1",
      description: "descriocao1",
    },
    {
      id: "8",
      title: "titulo1",
      description: "descriocao1",
    },
    {
      id: "9",
      title: "titulo1",
      description: "descriocao1",
    },
  ]);

  return (
    <Container
      colors={["#200726", "#4A1259", "#622773"]}
      start={[0.0, 0.0]}
      end={[1.0, 1.0]}
    >
      <Content>
        <Title>Sua lista de sonhos</Title>
        <FlatListContent>
          <StyledFlatList
            data={items}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TableContent key={item.id}>
                <TableLabel size={20}>
                  <TableText>{item.title}</TableText>
                </TableLabel>
                <TableLabel size={60}>
                  <TableText>{item.description}</TableText>
                </TableLabel>
                <TableLabel size={10}>
                  <DeleteContent
                    onPress={() => {
                      const deleteData = items.filter(
                        (value) => value.id !== item.id
                      );

                      setItems(deleteData);
                    }}
                  >
                    <MaterialIcons
                      name="delete"
                      size={24}
                      color={theme.primary}
                    />
                  </DeleteContent>
                </TableLabel>
              </TableContent>
            )}
          />
        </FlatListContent>
        <BackButton
          onPress={() => {
            navigation.navigate("homeModule");
          }}
        >
          <BackButtonText>Voltar</BackButtonText>
        </BackButton>
      </Content>
    </Container>
  );
}
