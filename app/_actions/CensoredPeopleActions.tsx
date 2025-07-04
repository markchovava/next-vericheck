import { baseURL } from "../_api/baseURL";



export async function censoredPeopleSearchAction(search: string) {
    const res = await fetch(`${baseURL}censored-people-search/${search}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}



export async function censoredPeopleViewAction(id: number) {
    const res = await fetch(`${baseURL}censored-people/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}