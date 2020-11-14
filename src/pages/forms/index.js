import React from "react";
import {
    FormField,
    TextInput,
    Box,
    Button,
    Main,
    Heading,
    Grid,
    Text,
    Form,
} from "grommet";
import { TopNav } from "../../components/navs/index";
import { WebFooter } from "../../components/footer/index";
import { PaymentForm } from "../../components/forms/index";
import { SignupSchema } from "../../components/forms/schema";
import { CREATE_USER } from "../../services/api/users/index";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useFormik } from "formik";

export function Connect() {
    let history = useHistory();
    const [createUser, { data }] = useMutation(CREATE_USER);

    const formik = useFormik({
        initialValues: {
            name: "",
            prenom: "",
            email: "",
            password1: "",
            password2: "",
            groupage : "",
            phone : "",
            gender : "",
            city  : ""
        },
        validationSchema: SignupSchema,
        onSubmit: async (values) => {
        
            await new Promise(
                console.log(
                    createUser({
                        variables: {
                            first_name: values.name,
                            last_name: values.prenom,
                            email: values.email,
                            password1: values.password1,
                            password2: values.password2,
                            groupage : values.groupage,
                            phone : values.phone,
                            gender : values.gender,
                            city : values.city
                        },
                    }).then((data) => {
                        if (data.data.register.success) {
                            localStorage.setItem(
                                "jwt",
                                data.data.register.token
                            );

                            history.push(`/`);
                        }
                    })
                )
            );
        },
    });

    let errors = data ? data.register.errors : undefined;
    

     const addErrors = ()=>{
        let result = []
        
        Object.entries(errors).forEach(([k,value])=> {
            value.forEach(
                element=>{                
                    result.push(element.message)
                }
            )
        })
        
        

        return result
     }

    return (
        <>
            <TopNav />
            <Main background={{ color: "#BB2B80" }}>
                <Box
                    background="white"
                    width={{ min: "70%" }}
                    margin={{
                        left: "auto",
                        right: "auto",
                        top: "2em",
                        bottom: "2em",
                    }}
                    pad="small"
                >
                    <Heading
                        level="1"
                        size="2em"
                        textAlign="center"
                        margin={{ bottom: "2em" }}
                    >
                        Connect
                    </Heading>

                    <div >
                    <ul>
                        {errors ? addErrors().forEach(element=>(
                            <li><Text>{element}</Text></li>
                        )) : undefined} 
                    </ul>
                    </div>
                    <Form onSubmit={formik.handleSubmit}>
                        <FormField htmlfor="name" label="Nom">
                            <TextInput
                                id="name"
                                name="name"
                                onChange={(event) => {
                                    formik.setFieldValue(
                                        "name",
                                        event.target.value
                                    );
                                }}
                            />
                        </FormField>
                        {formik.errors.name && formik.touched.name ? (
                            <div>{formik.errors.name}</div>
                        ) : null}

                        <FormField htmlfor="prenom" label="Prenom">
                            <TextInput
                                id="prenom"
                                name="prenom"
                                onChange={(event) => {
                                    formik.setFieldValue(
                                        "prenom",
                                        event.target.value
                                    );
                                }}
                            />
                        </FormField>

                        {formik.errors.prenom && formik.touched.prenom ? (
                            <div>{formik.errors.prenom}</div>
                        ) : null}


                        <FormField htmlfor="city" label="Wilaya">
                            <TextInput
                                id="city"
                                name="city"
                                onChange={(event) => {
                                    formik.setFieldValue("city", event.target.value);
                                }}
                            />
                        </FormField>
                        {formik.errors.city && formik.touched.city ? (
                            <div>{formik.errors.city}</div>
                        ) : null}


                        <FormField htmlfor="email" label="Email">
                            <TextInput
                            type="email"
                                id="email"
                                name="email"
                                onChange={(event) => {
                                    formik.setFieldValue("email", event.target.value);
                                }}
                            />
                        </FormField>

                        {formik.errors.email && formik.touched.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null}

                        <FormField htmlfor="password1" label="Password">
                            <TextInput
                                type="password"
                                id="password1"
                                name="password1"
                                onChange={(event) => {
                                    formik.setFieldValue(
                                        "password1",
                                        event.target.value
                                    );
                                }}
                            />
                        </FormField>

                        {formik.errors.password1 && formik.touched.password1 ? (
                            <div>{formik.errors.password1}</div>
                        ) : null}

                        <FormField
                            htmlfor="password2"
                            label="Password confirmation"
                        >
                            <TextInput
                                type="password"
                                id="password2"
                                name="password2"
                                onChange={(event) => {
                                    formik.setFieldValue(
                                        "password2",
                                        event.target.value
                                    );
                                }}
                            />
                        </FormField>

                        {formik.errors.password2 && formik.touched.password2 ? (
                            <div>{formik.errors.password2}</div>
                        ) : null}

                        <FormField htmlfor="groupage" label="Group">
                            <TextInput
                                id="groupage"
                                name="groupage"
                                onChange={(event) => {
                                    formik.setFieldValue(
                                        "groupage",
                                        event.target.value
                                    );
                                }}
                            />
                        </FormField>
                        {formik.errors.groupage && formik.touched.groupage ? (
                            <div>{formik.errors.groupage}</div>
                        ) : null}

                        <FormField htmlfor="phone" label="Numero telephone">
                            <TextInput
                                id="phone"
                                name="phone"
                                onChange={(event) => {
                                    formik.setFieldValue(
                                        "phone",
                                        event.target.value
                                    );
                                }}
                            />
                        </FormField>
                        {formik.errors.phone && formik.touched.phone ? (
                            <div>{formik.errors.phone}</div>
                        ) : null}

                        <FormField htmlfor="gender" label="Sex">
                            <TextInput
                                id="gender"
                                name="gender"
                                onChange={(event) => {
                                    formik.setFieldValue(
                                        "gender",
                                        event.target.value
                                    );
                                }}
                            />
                        </FormField>

                        {formik.errors.gender && formik.touched.gender ? (
                            <div>{formik.errors.gender}</div>
                        ) : null}
                       
                        
                        <Box direction="row" gap="medium">
                            <Button
                                primary
                                type="submit"
                                label="Submit"
                                onSubmit={formik.handleSubmit}
                             
                            />
                        </Box>
                    </Form>
                </Box>
            </Main>
            <WebFooter />
        </>
    );
}

function MonDon() {
    return (
        <Box
            fill="horizontal"
            gridArea="mon_don"
            background="white"
            pad="small"
            direction="column"
            align="center"
            gap="medium"
        >
            <Heading
                level="1"
                size="1.5em"
                textAlign="center"
                margin={{ bottom: "2em" }}
            >
                MON DON
            </Heading>

            <Box
                background={{ color: "#F6DBEF" }}
                pad={{ vertical: "2em", horizontal: "2em" }}
                width="90%"
                margin="small"
            >
                <Text color="#9F216B">
                    {" "}
                    <strong>Je donne une fois</strong>
                </Text>
                <Box
                    direction="row"
                    margin={{ top: "2em" }}
                    justify="around"
                    gap="small"
                >
                    <FormField width="90%">
                        <TextInput></TextInput>
                    </FormField>
                    <Text color="#9F216B" size="1.6em">
                        {" "}
                        <strong>$</strong>{" "}
                    </Text>
                </Box>
            </Box>

            <Box
                background={{ color: "#BB2B80" }}
                pad={{ vertical: "2em", horizontal: "2em" }}
                width="90%"
                margin="small"
            >
                <Text color="white">
                    {" "}
                    <strong>Je donne chaque mois</strong>
                </Text>
                <Box
                    direction="row"
                    margin={{ top: "2em" }}
                    justify="around"
                    gap="small"
                >
                    <FormField width="90%">
                        <TextInput></TextInput>
                    </FormField>
                    <Text color="white" size="1.6em">
                        {" "}
                        <strong>$</strong>{" "}
                    </Text>
                </Box>
            </Box>
        </Box>
    );
}
function Coordonnes() {
    return (
        <Box
            background="white"
            gridArea="coordonnes"
            fill="horizontal"
            pad="small"
        >
            <Heading
                level="1"
                size="1.5em"
                textAlign="center"
                margin={{ bottom: "2em" }}
            >
                MES COORDONNÉES
            </Heading>
            <Form>
                <FormField name="nom" htmlfor="nom" label="Nom">
                    <TextInput id="nom" name="nom" />
                </FormField>
                <FormField name="prenome" htmlfor="prenome" label="Prenom">
                    <TextInput id="prenome" name="prenome" />
                </FormField>
                <FormField name="wilaya" htmlfor="wilaya" label="Wilaya">
                    <TextInput id="wilaya" name="wilaya" />
                </FormField>
                <FormField name="group" htmlfor="group" label="Group">
                    <TextInput id="group" name="group" />
                </FormField>
                <FormField
                    name="numero"
                    htmlfor="numero"
                    label="Numero telephone"
                >
                    <TextInput id="numero" name="numero" />
                </FormField>
            </Form>
        </Box>
    );
}

function Reglement() {
    return (
        <Box gridArea="reglement" align="center" background="white" pad="small">
            <Heading
                level="1"
                size="1.5em"
                textAlign="center"
                margin={{ bottom: "2em" }}
            >
                MON RÈGLEMENT
            </Heading>

            <PaymentForm />
        </Box>
    );
}
export function Donne() {
    return (
        <>
            <TopNav />
            <Main
                pad={{ top: "3em", horizontal: "3rem" }}
                background={{ color: "#BB2B80" }}
            >
                <Grid
                    rows={["large", "large", "large"]}
                    columns={["1/3", "1/3", "1/3"]}
                    areas={[["mon_don", "coordonnes", "reglement"]]}
                >
                    <MonDon />
                    <Coordonnes />
                    <Reglement />
                </Grid>
            </Main>
            <WebFooter />
        </>
    );
}
