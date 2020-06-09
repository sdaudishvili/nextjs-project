import React from 'react';
import SectionBody from './SectionBody';
import SectionHead from './SectionHead';

function Page(props) {
    return (
        <main id="main" role="main">
            <h1 className="[ px-3-0 mt-2-0 text-3-0 ]">{props.pageTitle}</h1>
            <section className="box-shadow [ bg-white text-1-5 ]">
                <SectionHead>Information</SectionHead>
                <SectionBody elems={props.body} />
            </section>
        </main>
    );
}

export default Page;
