import { baseURL } from "../_api/baseURL";



export async function unConsolidatedSanctionSearchAction(search: string) {
    const res = await fetch(`${baseURL}un-consolidated-sanctions/${search}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}


export async function unConsolidatedSanctionPaginateAction(url: string) {
    const res = await fetch(url, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}



export async function unConsolidatedSanctionViewAction(id: number) {
    const res = await fetch(`${baseURL}un-consolidated-sanctions/view/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}