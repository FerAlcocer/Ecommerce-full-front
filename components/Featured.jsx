import Center from "./Center";
import { Bg, Column, Desc, Title, WrapperGrid } from "./StyledComponent/Componentes";

export default function Featured() {
  return (
    <Bg>
      <Center>
        <WrapperGrid>
            <Column>

              <Title>Pro anywhere</Title>
              <Desc>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
                maiores. Accusamus voluptatibus delectus consectetur fugiat autem
                voluptates rem, ea sint, vitae nesciunt pariatur assumenda eum et
                iusto magni corporis 
              </Desc>
                  </Column>
                  <Column>
                  <img src ="https://fernext-ecommerce.s3.amazonaws.com/1690569547370.png"
                altr ="" />
                  </Column>
        </WrapperGrid>
      </Center>
    </Bg>
  );
}
