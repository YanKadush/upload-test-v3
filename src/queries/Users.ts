const url = 'https://reqres.in/api/users'

export const getUsers = async () => {
    const res = await fetch(url);
    console.log(res);
    return res.json();
};