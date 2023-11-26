import {useState} from 'react'
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {Modal, StatusBar} from "./components";
import {getUsers} from "./queries/Users.ts";
import {getHotels} from "./queries/Countries.ts";
import {initialData} from "./consts.ts";

import './App.css'

function  App() {
    const queryClient = useQueryClient();
    const [open, setOpen] = useState<boolean>(false);

    const {
        data: usersList, isSuccess: isUsersSuccess, isLoading: isUsersLoading, isFetched: isUsersFetched, isError, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
        staleTime: 20000,
        initialData
    });
    const {data: countriesList, isLoading: isCountriesLoading, isFetched: isCountriesFetched, isSuccess: isCountriesSuccess} = useQuery({
        queryKey: ['hotels'],
        queryFn: getHotels,
    })

    if (isError) return <div>Request Failed</div>;

    return (
        <div className='app'>
            <div className='page'>
                <button onClick={() => queryClient.removeQueries({ queryKey: ['users'], exact: true })}>Invalidate cache</button>
                <button onClick={() => refetch()}>Fetch new data</button>
                <button onClick={() => setOpen(true)}>Open modal</button>
                <div className='additional'>
                    <div>
                        <h2>Countries</h2>
                        <ul>
                            {isCountriesSuccess && countriesList?.data.map(({code, name}: {code: string | null, name: string | null}) => (
                                <li key={code}>{name}</li>
                            ))}
                        </ul>
                    </div>
                    <StatusBar
                        isCountriesLoading={isCountriesLoading}
                        isCountriesFetched={isCountriesFetched}
                        isUsersLoading={isUsersLoading}
                        isUsersFetched={isUsersFetched}
                    />
                </div>
            </div>
            {open && <Modal onClose={() => setOpen(false)} data={usersList?.data} isSuccess={isUsersSuccess} />}
        </div>
    )
}

export default App
