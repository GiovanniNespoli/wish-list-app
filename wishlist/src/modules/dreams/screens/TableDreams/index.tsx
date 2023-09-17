import { Container, Content, TitleContent, WelcomeTitle } from "./styles";

export default function TableDreamScreen({ navigation }) {
  return (
    <Container
      colors={["#200726", "#4A1259", "#622773"]}
      start={[0.0, 0.0]}
      end={[1.0, 1.0]}
    >
      <Content>
        <WelcomeTitle>TABlE list</WelcomeTitle>
      </Content>
    </Container>
  );
}
