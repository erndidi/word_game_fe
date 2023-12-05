
   export default async function createPlayer(firstname,lastname,email, password) {
        const url = 'https://localhost:7077/api/Player';
        const headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(firstname + ':' + lastname + ':' + email + ':' + password));
        const response = await fetch(url, { headers });
        const data = await response.json();
        return data;
      }
    
    
    /*export async function fetchPlayer(username, password) {
        const url = 'https://example.com/api/user';
        const headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
        const response = await fetch(url, { headers });
        const data = await response.json();
        return data;
      }
*/


