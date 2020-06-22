import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { withRouter } from 'next/router';

const useStyles = makeStyles({
    root: {
        padding: '0 0'
    }
});
function NavItem(props) {
    const classes = useStyles();
    return (
        <ListItem className={classes.root} selected={props.router.pathname === props.path} button>
            <Link href={props.path}>
                <div className="[ py-1-0 px-1-5 h-full w-full text-1-6 text-white ] ">{props.title}</div>
            </Link>
        </ListItem>
    );
}
export default withRouter(NavItem);
