import React from "react";
import { Form, FormField, TextInput, Box, Button, Main, Heading } from "grommet";
import { TopNav } from "../../components/navs/index";
import { WebFooter } from "../../components/footer/index";
export function Connect() {
    const [value, setValue] = React.useState();
    return (
        <>
            <TopNav />
            <Main background={{ color: "#E6E6E6" }}>
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
                <Heading level="1" size="2em" textAlign="center" margin={{bottom:"2em"}}>Connect</Heading>
                    <Form
                        value={value}
                        onChange={(nextValue) => setValue(nextValue)}
                        onSubmit={({ value }) => {}}
                    >
                        <FormField name="nom" htmlfor="nom" label="Nom">
                            <TextInput id="nom" name="nom" />
                        </FormField>
                        <FormField
                            name="prenome"
                            htmlfor="prenome"
                            label="Prenom"
                        >
                            <TextInput id="prenome" name="prenome" />
                        </FormField>
                        <FormField
                            name="wilaya"
                            htmlfor="wilaya"
                            label="Wilaya"
                        >
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
                        <Box direction="row" gap="medium">
                            <Button type="submit" primary label="Submit" />
                        </Box>
                    </Form>
                </Box>
            </Main>
            <WebFooter />
        </>
    );
}
