import PageTitle from "../PageTitle";
import PageDescription from "../PageDescription";
import {StyledPageHeader} from "../../@shared/styled/StyledPageHeader";

export function Services() {
    return (
        <div>
            <StyledPageHeader>
                <PageTitle title='Services'/>
                <PageDescription text='Our services are built for your business needs'/>
            </StyledPageHeader>
        </div>
    );
}