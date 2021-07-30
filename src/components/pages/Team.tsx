import {StyledPageHeader} from "../../@shared/styled/StyledPageHeader";
import PageTitle from "../PageTitle";
import PageDescription from "../PageDescription";

export function Team() {
    return (
        <div>
            <StyledPageHeader>
                <PageTitle title='Our team'/>
                <PageDescription text='Great work, great people.'/>
            </StyledPageHeader>
        </div>
    );
};