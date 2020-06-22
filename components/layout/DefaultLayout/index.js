import Sibebar from './Sidebar';
import Header from './Header';

function DefaultLayout(props) {
    return (
        <div className="[ flex bg-black ]">
            <Sibebar />
            <div>
                <Header />
                <main role="main" className="[ flex-1 min-h-screen ]">
                    {props.children}
                </main>
            </div>
        </div>
    );
}

export default DefaultLayout;
