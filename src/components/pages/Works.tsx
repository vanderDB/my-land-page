import {StyledPageHeader} from "../../@shared/styled/StyledPageHeader";
import PageTitle from "../PageTitle";
import PageDescription from "../PageDescription";

export function Works() {
    return (
        <div>
            <StyledPageHeader>
                <PageTitle title='Take a look at our portfolio'/>
                <PageDescription text='For every complex problem, there is an answer that is clear, simple, and wrong.'/>
            </StyledPageHeader>
        </div>
    );
};