import styled from "styled-components";
import WorkItem from "./WorkItem";
import {ALetterImg, BambyImg, BottlesImg, PaperImg, RinoImg, WoodBlockImg} from "../../../assets/img";

function WorksPerformance() {
    return (
        <Container>
            <WorkItem backgroundImg={BambyImg} title={'Minimal Design'}/>
            <WorkItem backgroundImg={WoodBlockImg} title={'Geometry'}/>
            <WorkItem backgroundImg={ALetterImg} title={'Circle'}/>
            <WorkItem backgroundImg={BottlesImg} title={'Ceramic Bottle'}/>
            <WorkItem backgroundImg={RinoImg} title={'Creative Work'}/>
            <WorkItem backgroundImg={PaperImg} title={'No Gravity'}/>
        </Container>
    );
}

export default WorksPerformance;

const Container = styled.div`
  
  padding: 5rem 15rem;
  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
  margin: -20px -20px;
`;