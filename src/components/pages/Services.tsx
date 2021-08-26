import PageTitle from "../PageTitle";
import PageDescription from "../PageDescription";
import {StyledPageHeader} from "../../@shared/styled/StyledPageHeader";
import {InstagramIcon} from "../../assets/img";
import styled from "styled-components";
import ServiceItem from "./services/ServiceItem";

export function Services() {
    return (
        <div>
            <StyledPageHeader>
                <PageTitle title='Services'/>
                <PageDescription text='Our services are built for your business needs'/>
            </StyledPageHeader>

            <StyledServiceBoxes>
                <ServiceItem icon={InstagramIcon} title={'Instagram Engagement Campaign'}
                             description={'Our Instagram engagement campaign will have your Instagram account come alive.'}/>
                <ServiceItem icon={InstagramIcon} title={'Email Marketing'}
                             description={'Stay top of mind with one of the most creative email marketing campaigns.'}/>
                <ServiceItem icon={InstagramIcon} title={'Search Engine Optimization'}
                             description={'Rank in the top of search engines. Local SEO, link building, and more.'}/>
                <ServiceItem icon={InstagramIcon} title={'Content Marketing Services'}
                             description={'We can be your company voice with quality content. Our writing team will give your brand the voice it needs to stick out..'}/>
                <ServiceItem icon={InstagramIcon} title={'Social Media Paid Advertising'}
                             description={'From brand awareness campaigns to lead funnels, we have got the tools to create the right ads for your business..'}/>
                <ServiceItem icon={InstagramIcon} title={'Web Design & Development'}
                             description={'Our web design and development services include everything from graphic design to UX.'}/>
            </StyledServiceBoxes>

        </div>
    );
}

const StyledServiceBoxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  padding-top: 50px;
  
  width: 100%;
`;

