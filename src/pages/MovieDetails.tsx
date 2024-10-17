import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Separator } from '../components/ui/separator';

const MovieDetails = () => {
    const { id } = useParams();

    useEffect(() => {
        // TODO: fetch data from api
        console.log(`Fetching details for movie with ID: ${id}`);
    }, [id]);

    return (
        <>
            <Navbar />
            <Separator />
            <div>{id}</div>
        </>
    );
};

export default MovieDetails;
