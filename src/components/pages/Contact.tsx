import {StyledPageHeader} from "../../@shared/styled/StyledPageHeader";
import PageTitle from "../PageTitle";
import PageDescription from "../PageDescription";
import {ErrorMessage, Form, Formik, useField} from 'formik';
import * as Yup from 'yup';
import styled from "styled-components";
import {IColorThemeProps} from "../../@styled/IColorThemeProps";

export function Contact() {

    const ContactFormValidationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Too Short!')
            .max(70, 'Too Long!')
            .required('Name is required'),
        subject: Yup.string()
            .min(3, 'Too Short!')
            .max(70, 'Too Long!')
            .required('Subject is required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Email is required'),
        message: Yup.string()
            .min(3, 'Too Short!')
            .max(1000, 'Too Long!')
            .required('Message is required'),
    });

    return (
        <div>
            <StyledPageHeader>
                <PageTitle title='Contact'/>
                <PageDescription
                    text='Say Hello. If you want to extend some info, do not hesitate to fill this form, we love to say ‘Hello Mate’.'/>
            </StyledPageHeader>

            <StyledFormContainer>
                <Formik
                    initialValues={{name: '', subject: '', email: '', message: ''}}
                    validationSchema={ContactFormValidationSchema}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    <Form>
                        <CustomTextInput name='name' placeholder='Name'/>
                        <CustomTextInput name='subject' placeholder='Subject'/>
                        <CustomTextInput name='email' placeholder='Email'/>
                        <MyTextArea name="message" rows={3} placeholder="Your message"/>
                        <StyledSubmitBtn>
                            <button type="submit">Send message</button>
                        </StyledSubmitBtn>

                    </Form>
                </Formik>
            </StyledFormContainer>
        </div>
    );
}

interface MyTextAreaProps {
    name: string,
    rows: number | undefined,
    placeholder: string,
}

const MyTextArea = (props: MyTextAreaProps) => {
    const [field] = useField(props);
    return (
        <StyledCustomInputContainer>
            <StyledCustomTextInput>
                <textarea {...field} {...props} />
            </StyledCustomTextInput>
            <StyledErrorMessage>
                <ErrorMessage name={field.name}/>
            </StyledErrorMessage>
        </StyledCustomInputContainer>
    );
};

interface CustomTextInputProps {
    name: string,
    placeholder: string,
}

const CustomTextInput = (props: CustomTextInputProps) => {
    const [field] = useField(props);
    return (
        <StyledCustomInputContainer>
            <StyledCustomTextInput>
                <input {...field} {...props} />
            </StyledCustomTextInput>
            <StyledErrorMessage>
                <ErrorMessage name={field.name}/>
            </StyledErrorMessage>
        </StyledCustomInputContainer>
    );
}

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 40px;
`;

const StyledCustomInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledCustomTextInput = styled.div`
  input, textarea {
    font-size: 18px;

    background-color: transparent;

    border: none;
    border-bottom: 2px black solid;
    padding: 15px;

    :focus {
      outline: none;
    }

    width: 750px;
  }
`;

const StyledErrorMessage = styled.div<IColorThemeProps>`
  color: ${props => props.theme.errorColor};
  font-size: 14px;
  margin: 2px 15px;
`;

const StyledSubmitBtn = styled.div<IColorThemeProps>`  
  
  button {
    cursor: pointer;
    
    background-color: ${props => props.theme.accentColor};

    border: ${props => props.theme.accentColor} 1px solid;
    border-radius: 5px;

    height: 50px;
    width: 100%;
    font-size: 20px;
    font-weight: bold;


    display: flex;
    align-items: center;
    justify-content: center;  
  }
  
`;