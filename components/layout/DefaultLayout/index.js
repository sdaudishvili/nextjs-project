import Header from './Header';

function DefaultLayout(props) {
    return (
        <>
            <Header />
            <main role="main">{props.children}</main>;
        </>
    );
}

export default DefaultLayout;
