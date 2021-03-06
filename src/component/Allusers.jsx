import { TableCell, TableRow, Table,  TableHead, TableBody, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getUsers } from "../Service/api";

const useStyle = makeStyles({
    table:{
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *':{
            background: '#000000',
            color: '#FFFFFF',
            fontSize: 20
        }
    },
    row: {
        '& > *':{
            fontSize: 20
        }
    }
}

)
const Allusers = () => {

    const [users, setUsers] =useState([]);
    const classes = useStyle();

    useEffect(() => {
        getAllusers();

    }, [])

    const getAllusers = async() => {
        const response = await getUsers();
        console.log(response.data);
        setUsers(response.data);
    }
    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow className={classes.row}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    );
}

export default Allusers;