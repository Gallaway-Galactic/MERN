import Header from '../components/Header';
import Form from '../components/Form';


const Create = (props) => {

    return (<>
        <Header page="Create Book"></Header>
        <Form method="post" action="/" book={{}}/>
    </>);
};

export default Create;