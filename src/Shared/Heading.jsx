import Container from "./Container";


const Heading = ({Heading ,subHeading}) => {
    return (
        <Container>
              <p className="text-center text-xl">{subHeading}</p>
            <h1 className="text-center text-[#ea062b] font-bold text-4xl">{Heading}</h1>
        </Container>
    );
};

export default Heading;