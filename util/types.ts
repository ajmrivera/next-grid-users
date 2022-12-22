export type UserType = {
  "id": number,
  "email": string,
  "first_name": string,
  "last_name": string,
  "avatar": string
}


export type APIResponseType = {
  "page": number,
  "per_page": number, 
  "total_pages": number,
  "data": UserType[]
}