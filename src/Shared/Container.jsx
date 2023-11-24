/* eslint-disable react/prop-types */


const Container = ({children}) => {
    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5">
            {children}
        </div>
    );
};

export default Container;