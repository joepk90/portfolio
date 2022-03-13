import "@components/common/Section/Section.scss";


const Section = ({ children, options }) => {

    const modifiers = classModifiers(options);

    return (
        <section className={'page-section' + modifiers}>{children}</section>
    );
}

export default Section;