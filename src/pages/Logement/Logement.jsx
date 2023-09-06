import data from '../../data.json'
import { useParams, useSearchParams } from 'react-router-dom'

const Logement = () => {
    const {id} = useParams();

    const logement = data.find((item => item.id == id))
    console.log(logement)

    return (
        <p>Test</p>
    )


}

export default Logement;