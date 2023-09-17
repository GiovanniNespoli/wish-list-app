import { useState } from "react";
import NextButton from "../../../../components/NextButton";
import theme from "../../../../styles/theme";
import DreamsModal from "../../components/modal";
import { Container, Content, DreamsInputs, WelcomeTitle } from "./styles";

export default function CreateDreamScreen({ navigation }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <DreamsModal
        onNavigate={() => {
          setOpenModal(false);
          navigation.navigate("tableDreams");
        }}
        openModal={openModal}
        closeModal={() => {
          setOpenModal(false);
        }}
      />
      <Container>
        <Content>
          <WelcomeTitle>Cadastrar um sonho</WelcomeTitle>
          <DreamsInputs
            placeholderTextColor={theme.primary}
            placeholder="Título"
          />
          <DreamsInputs
            placeholderTextColor={theme.primary}
            placeholder="Descrição"
          />
          <NextButton
            onPress={() => {
              setOpenModal(true);
            }}
          />
        </Content>
      </Container>
    </>
  );
}
