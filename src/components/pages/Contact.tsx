import {StyledPageHeader} from "../../@shared/styled/StyledPageHeader";
import PageTitle from "../PageTitle";
import PageDescription from "../PageDescription";

export function Contact() {
    return (
        <div>
            <StyledPageHeader>
                <PageTitle title='Contact'/>
                <PageDescription text='Say Hello. If you want to extend some info, do not hesitate to fill this form, we love to say ‘Hello Mate’.'/>
            </StyledPageHeader>
        </div>
    );
};