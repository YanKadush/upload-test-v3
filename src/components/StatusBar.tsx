import {FC} from "react";

type StatusBarProps = {
    isCountriesLoading: boolean;
    isCountriesFetched: boolean;
    isUsersLoading: boolean;
    isUsersFetched: boolean
}

export const StatusBar: FC<StatusBarProps> = ({isCountriesLoading,isCountriesFetched, isUsersLoading, isUsersFetched }) => (
    <div className='statusBar'>
        <h2>Status bar</h2>
        <div className='statusItems'>
            <p>Hotel loading: {isCountriesLoading ? 'Hotels loading...' : ''}</p>
            <p>Hotel fetched: {isCountriesFetched ? 'Hotels fetched' : ''}</p>
            <p>Users loading: {isUsersLoading ? 'Users loading...' : ''}</p>
            <p>Users loading: {isUsersFetched ? 'Users fetched' : ''}</p>
        </div>
    </div>
)