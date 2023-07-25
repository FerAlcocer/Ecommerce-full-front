import Center from "./Center";
import { Bg, Desc, Title, WrapperGrid } from "./StyledComponent/Componentes";


export default function Featured() {
  return (
    <Bg>
      <Center>
        <WrapperGrid>
            <div>

        <Title>Pro anywhere</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
          maiores. Accusamus voluptatibus delectus consectetur fugiat autem
          voluptates rem, ea sint, vitae nesciunt pariatur assumenda eum et
          iusto magni corporis ullam.
        </Desc>
            </div>
            <div>

            </div>
        </WrapperGrid>
      </Center>
    </Bg>
  );
}
