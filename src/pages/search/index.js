import React from "react";
import {
    Main,
    TextInput,
    Box,
    Button,
    Grid,
    Card,
    CardBody,
    CardFooter,
    Text,
} from "grommet";
import { Search as SearchIcon, User } from "grommet-icons";
import { WebFooter } from "../../components/footer/index";
import { TopNav } from "../../components/navs/index";
import Users from "../../assets/data/json/users.json";
function UserCard(props) {
    return (
        <Card>
            <CardBody pad="small">
                <User size="40em" />
                <Box margin={{ top: "2em" }}>
                    <Text>
                        <strong>
                            {props.nom} {props.prenom}
                        </strong>
                    </Text>
                    <Text>{props.group}</Text>
                </Box>
            </CardBody>
            <CardFooter pad="small" direction="row" justify="around">
                <Text>{props.wilaya}</Text>
                <Text>{props.maladie}</Text>
            </CardFooter>
        </Card>
    );
}
export default function Search() {
    let data = Users.users;
    let [search_data , setSearchData] = React.useState(data)
   
    let setSearch = (query) => {

        console.log(query)
        let result = [];
        data.forEach((element) => {
            if (
                element.wilaya.includes(query) ||
                element.nom.includes(query) ||
                element.prenom.includes(query) ||
                element.group.includes(query) ||
                element.maladie.includes(query) 
            ) {
                result.push(element);
            }
        })
        setSearchData(result)
    };
    return (
        <>
            <TopNav />
            <Main pad={{ bottom: "3em" }}>
                <Box
                    width="medium"
                    direction="row"
                    margin="large"
                    align="center"
                    round="small"
                    border
                >
                    <TextInput id="search-input"  placeholder="Search ..." plain></TextInput>

                    <Button
                        icon={<SearchIcon />}
                        onClick={() => {
                            let query= document.getElementById("search-input").value
                            setSearch(query)
                        }
                       }
                    />
                </Box>
                <Box pad="medium">
                    <Grid
                        gap="medium"
                        rows="small"
                        columns={{ count: "fit", size: "small" }}
                    >
                    {search_data ?
                        <>{search_data.map((element) => (
                            <UserCard
                                nom={element.nom}
                                prenom={element.prenom}
                                wilaya={element.wilaya}
                                maladie={element.maladie}
                                group={element.group}
                            />
                        ))}</>:  <div> Nothing to see here </div>}
                    </Grid>
                </Box>
            </Main>
            <WebFooter />
        </>
    );
}
