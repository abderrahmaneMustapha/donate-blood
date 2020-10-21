import React from "react";

import {
    Avatar,
    Box,
    Button,
    Form,
    FormField,
    Select,
    TextInput,
} from "grommet";

const annee_list = ["2020", "2019", "2018", "2017"];
const months_list = ["jan", "fev", "mar"];
export function PaymentForm() {
    return (
        <Box >
            <Form align="center">
                <FormField>
                    <TextInput placeholder="Numéro de carte bancaire"></TextInput>
                </FormField>
                <Box direction="row" gap="small">
                    <FormField width="60%">
                        <Select
                            placeholder="Mois"
                            options={months_list}
                        ></Select>
                    </FormField>
                    <FormField width="40%">
                        <Select
                            placeholder="Annee"
                            options={annee_list}
                        ></Select>
                    </FormField>
                </Box>

                <FormField width="30%">
                    <TextInput placeholder="CCV"></TextInput>
                </FormField>

                <Button margin={{ top: "3em" }} label="Confimer le payment" />

                <Avatar  size="medium" margin={{horizontal:"auto", top:"4em"}} src="https://cdn.iraiser.eu/DDk7/Qq3Kywn/xsE37i7Og==/default/origin/don-en-confiance.png"></Avatar>
            </Form>
        </Box>
    );
}
