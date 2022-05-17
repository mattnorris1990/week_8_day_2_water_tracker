import PieChart from './PieChart';
import userContext from '../context/UserContext';
import { useContext } from 'react';
import { useEmptyGlass } from '../hooks/useEmptyGlass';

const TrackerDisplay = ({glasses}) => {
    const value = useContext(userContext)
    const empties = useEmptyGlass()

    return (
        <>
            <p>{value.name}'s daily goal: {value.goal}</p>
            <p>Glasses drunk: {glasses}</p>
            <PieChart glasses={glasses} goal={value.goal} />
            { glasses >= value.goal ? empties : null }
            { glasses >= value.goal ? "Goal reached! 🥳" : null }
            { glasses >= value.goal ? empties : null }

            <br></br>
        </>
    )
}

export default TrackerDisplay;
