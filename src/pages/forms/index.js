import React from "react";
import {
    Form,
    FormField,
    TextInput,
    Box,
    Button,
    Main,
    Heading,
    Grid,
    Text,
} from "grommet";
import { TopNav } from "../../components/navs/index";
import { WebFooter } from "../../components/footer/index";
import { PaymentForm } from "../../components/forms/index"
export function Connect() {
    const [value, setValue] = React.useState();
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

            <Box background={{ color: "#F6DBEF" }} pad={{vertical:"2em", horizontal:"2em"}}  width="90%" margin="small">
                <Text color="#9F216B"> <strong>Je donne une fois</strong></Text>
                <Box direction="row" margin={{top:"2em"}} justify="around" gap="small">
                    <FormField width="90%">
                        <TextInput></TextInput>
                    </FormField>
                    <Text color="#9F216B" size="1.6em"> <strong>$</strong> </Text>
                </Box>
            </Box>

            <Box background={{ color: "#BB2B80" }} pad={{vertical:"2em", horizontal:"2em"}}  width="90%" margin="small">
                <Text color="white"> <strong>Je donne chaque mois</strong></Text>
                <Box direction="row" margin={{top:"2em"}} justify="around" gap="small">
                    <FormField width="90%">
                        <TextInput></TextInput>
                    </FormField>
                    <Text color="white" size="1.6em"> <strong>$</strong> </Text>
                </Box>
            </Box>
        </Box>
    );
}
function Coordonnes() {
    const [value, setValue] = React.useState();
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
            <Form
                value={value}
                onChange={(nextValue) => setValue(nextValue)}
                onSubmit={({ value }) => {}}
            >
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

            <PaymentForm  />
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
